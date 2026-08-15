import requests
import json
from bs4 import BeautifulSoup as bs

from selenium import webdriver
driver=webdriver.Chrome()
driver.get("https://www.imdb.com/search/title/?groups=top_100&count=100&sort=user_rating,desc")
page=driver.page_source
driver.quit()
headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
url="https://www.imdb.com/search/title/?groups=top_100&count=100&sort=user_rating,desc"
# driver.get(url)
movies_data=[]
z=200
if z==200:
    data=bs(page,'html.parser')
    # alpha2=data.find_all("div",class_="sc-e2dbc1a3-0 ajrIH sc-b0691f29-2 bhhtyj dli-ratings-container")
    # alpha1=data.find_all("h3",class_="ipc-title__text")
    # movie_names=[]
    # for xor in alpha1:
    #     i={}
    #     i["name"]=xor.get_text()[3:]
    # children = x.select("div.alpha > *")

    #     movie_names.append(i)
# else:
#     print("i dont care dude")
#https://www.imdb.com/title/tt0111161/?ref_=sr_t_1
    for delta in data.select("li.ipc-metadata-list-summary-item"):
        plot=delta.find("div",class_="ipc-html-content-inner-div").get_text()
        rating=delta.find("span",class_="ipc-rating-star ipc-rating-star--base ipc-rating-star--imdb ratingGroup--imdb-rating" ).get_text()
        delta3=delta.find_all("span",class_="sc-b189961a-8 kLaxqf dli-title-metadata-item")
        if len(delta3)==3:
            year=delta3[0].get_text()
            runtime=delta3[1].get_text()
            RatedNA=delta3[2].get_text()
        else:
            year=delta3[0].get_text()
            runtime=delta3[1].get_text()
            RatedNA=0


        voted_people=delta.find("span",class_="ipc-rating-star--voteCount").get_text()
        Name=delta.find("h3",class_="ipc-title__text").get_text()
        extra_url=delta.find("a",class_="ipc-title-link-wrapper" )['href']
        info_url="https://www.imdb.com"+extra_url
        resp2=requests.get(info_url,headers=headers)
        writers=[]
        cast=[]
        if  resp2.status_code==200:
            data2=bs(resp2.content,"html.parser")
            director=data2.find("a",class_="ipc-metadata-list-item__list-content-item ipc-metadata-list-item__list-content-item--link").get_text()
            genre_content=data2.find("div", class_="ipc-chip-list__scroller")
            genre_con=genre_content.find_all("span",class_="ipc-chip__text")
            wncc=data2.find_all("a",class_="ipc-metadata-list-item__list-content-item ipc-metadata-list-item__list-content-item--link")
            image=data2.find("a",class_="ipc-lockup-overlay ipc-focusable")["href"]
            resp3=requests.get("https://www.imdb.com"+image,headers=headers)
            data3=bs(resp3.content,"html.parser")
            image_src=data3.find("img",class_="sc-7c0a9e7c-0 eWmrns")["src"]
            k=0
            genre=[]
            for a in genre_con:
                genre.append(a.get_text())
            for i in wncc:
                if k<3 :
                    if k==0:
                        pass
                    else:
                        writers.append(i.get_text())
                else:
                    break
                k=k+1
            ancc=data2.find_all("a",class_="sc-bfec09a1-1 gCQkeh")
            i=0
            for j in ancc:
                if i<3:
                    cast.append(j.get_text())
                    i=i+1
                else:
                    break
        
        i={}
        i["name"]=Name[3:]
        i["year"]=year
        i["run_time"]=runtime
        i["imdb_rating"]=rating[0:3]
        i["voted_people"]=voted_people[4:6]
        i["genre"]=genre
        i["director"]=director
        i["writers"]=writers
        i["cast"]=cast
        i["plot"]=plot
        i["RatedNA"]=RatedNA
        i["poster"]=image_src
        # i["video"]=video_src1
        movies_data.append(i)

with open('top100_delta.json', 'w') as json_file:
    json.dump(movies_data, json_file, indent=4)
# driver.quit()   



           















