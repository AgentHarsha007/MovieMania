const buttons=document.getElementsByClassName("star");
const submit_button=document.getElementById("delta007");
submit_button.addEventListener("click",function(event){
    event.preventDefault();
    const rating=document.getElementById("Rating_given").value;
    document.getElementById("Rateddata").innerHTML=rating;
    const movieName = document.getElementById("movie_name").textContent.trim();
    const movieNameInput = document.createElement("input");
    movieNameInput.type = "hidden";
    movieNameInput.name = "nameofmovie";
    movieNameInput.value = movieName;
    document.getElementById("form124").appendChild(movieNameInput);
    console.log(movieName);
    document.getElementById("form124").submit();
    document.getElementById("form124").removeChild(movieNameInput);
})
function get_movie_data(name){
   return fetch("http://localhost:4000/top100_k.json").then(out => out.json()).then(data =>{
        const userabd={};
    const user=data.find(x => x.name==name);
    userabd["name"]=user.name;
    userabd["genre"]=user.genre;
    return userabd;
})

}
const b=document.querySelector("[templater]");
const d=document.getElementById("adder");
document.addEventListener("DOMContentLoaded",function(){
    var i=0;
fetch("http://localhost:4000/top100_n.json").then(out => out.json()).then(data =>{
    data.forEach(user=> {
        var genre_info=document.getElementById("movie_name").textContent;
        var string=genre_info.substring(0,genre_info.length-7);
        console.log(string);
        if(user.name!=string){
        get_movie_data(string).then(out => {
        var current_genre=out.genre;
        current_genre=current_genre.filter(genre => genre !== "Drama");
        console.log(current_genre);
        var search_genre=user.genre;
        search_genre=search_genre.filter(genre => genre !== "Drama");
        console.log(search_genre);  
        var matchFound = search_genre.some(genre => current_genre.includes(genre));
        if(i<8){
        if(matchFound){
            i++;
            const stock=b.content.cloneNode(true);
            const c=stock.children[0];
            console.log(c);
            const imgclass=c.querySelector("[imager1234]");
            console.log(imgclass);
            const infoclass=c.querySelector("[noqry]");
            console.log(infoclass);
            imgclass.src="movie_img/"+user.name.trim()+".jpg"
            infoclass.textContent=user.name;
            d.append(c);
            }}
    })};})
})})