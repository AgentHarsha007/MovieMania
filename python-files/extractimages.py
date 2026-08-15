import requests
import json
from bs4 import BeautifulSoup as bs
from selenium import webdriver
import os
os.makedirs("movie_img",exist_ok=True)
headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

with open('top100_n.json','r') as file:
    content=json.load(file)
    # images_src_list=[]
    for movie in content:
        name=movie["name"].strip()
        name1=name+".jpg"
        image_url=movie["poster"]
        out1=requests.get(image_url,headers=headers)
        image=out1.content
        with open(os.path.join("movie_img",name1),"wb+")  as alpha:
            alpha.write(image)
            print("image downlaoded")



