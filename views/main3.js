// document.getElementById("button").addEventListener('click',function() {
//     document.getElementById("main007").classList.add("blurrone");
//     document.getElementById("login_block").style.display="block";


// });
// document.getElementsByClassName("close")[0].addEventListener("click",function(){
//     document.getElementById("login_block").style.display="none";
//     document.getElementById("main007").classList.remove("blurrone");
// });
const a=document.querySelector("[new_query]");
const d=document.getElementById("container");
function get_movie_name(){
     
  return  fetch("http://localhost:4000/top100_k.json").then(xout => xout.json()).then(out1 => {
        let doltp=[];
        out1.forEach(movie =>{
            doltp.push({"name":movie.name.trim() , "genre":movie.genre,"poster":movie.poster});
        })
        return doltp
    });
}
fetch("http://localhost:4000/top100_k.json").then(xout => xout.json()).then(out1 => {
   delta= out1.map(james => {
        const stock=a.content.cloneNode(true);
        const b=stock.children[0];
        // b.href="http://localhost:4000/movies_html"+james.name.trim()+".html";
        // console.log(b.href);
        b.id = james.name.trim().replace(/\s+/g, '-');
        const imgclass=b.getElementsByClassName("hello")[0] ;

        const infoclass=b.querySelector("[div_query]");
        imgclass.src="movie_img/"+james.name.trim()+".jpg";
        infoclass.textContent=james.name.trim(); 
        if(james.name==". Ikiru"){
            imgclass.src="movie_img/"+"ikiru"+".jpg";
        }

        d.append(b);
        return { name:james.name.trim(),element: b };
    })
;})

    fetch("http://localhost:4000/top100_k.json").then(xout => xout.json()).then(out1 => {
            out1.forEach(james => {
                var omega=james.name.trim().replace(/\s+/g, '-');
                console.log( document.getElementById(omega));
                document.getElementById(omega).addEventListener("click", async (event) =>{
                    try{ console.log(event.target);
                        const movie_opened = event.target.textContent;
                        console.log(movie_opened);
                        var var1=JSON.stringify({movie_opened});
                        console.log( JSON.stringify({movie_opened})); // Get data from the div
                    const response = await fetch('/html', {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: var1 // Send both button data and div data to the server
                        });
                        const htmlContent = await response.text(); // Get HTML content from the response
                        // const newWindow = window.open('http://localhost:4000/open', '_blank');
                        // newWindow.document.write(htmlContent);}
                        window.location.href = '/html';}
                    catch (error) {

                            console.error('Error:', error);
                        }});
                })
            });
var delta=[];
const search=document.getElementById("input_searcher");
search.addEventListener("input",(e)=>{
    delta.forEach(user=>{


        user.element.style.display="block";
    })
    console.log(delta)
    const valueinside=e.target.value.toLowerCase();
    delta.forEach(user=>{
        const abcd=user.name.toLowerCase().includes(valueinside);
       if(!abcd){

        user.element.style.display="none";}
    })    
})
function get_user(){
   return  fetch("http://localhost:4000/current_user.json").then(out => out.json()).then(out1 => {
        console.log(out1);
        console.log(out1[0].user)
    return out1[0].user;
});

}
document.getElementById("Recommend").addEventListener('click',function(event){
    document.getElementById("closebut").style.display="block";
    document.getElementsByClassName("search")[0].style.display="none";
    document.getElementById("logout").style.display="none";
    document.getElementById("Recommend").style.display="none";
    get_user().then(user=>{
    var delta12=user+"_rating.json";
    fetch(`http://localhost:4000/database/${delta12}`).then(out => out.json()).then(out1 => {
    const movieswithratings=out1;
const moviesWithRatings = out1;
  let genreRatings = {};
  let genreCounts = {};
  
  moviesWithRatings.forEach(movie => {
      movie.genre.forEach(genre => {
          if (!genreRatings[genre]) {
              genreRatings[genre] = parseInt(movie.rating);
              genreCounts[genre] = 1;
          } else {
              genreRatings[genre] += parseInt(movie.rating);
              genreCounts[genre]++;
          }
      });
  });
  console.log(genreRatings);
  console.log(genreCounts);
  Object.keys(genreRatings).forEach(genre => {
      genreRatings[genre] /= genreCounts[genre];
  });
  console.log(genreRatings);
  console.log(genreCounts);
  let recommendations = {};
  get_movie_name().then(out =>{
    const moviesToRecommend =out;
  console.log(moviesToRecommend);
  moviesToRecommend.forEach(movie => {
     console.log(1);
      let movieScore = 0;
      movie.genre.forEach(genre => {
          if (genreRatings[genre]) {

              movieScore += genreRatings[genre];
          }
      });
      console.log(movieScore);
      recommendations[movie.name] = movieScore;
  });
  console.log(recommendations);
 
  let sortedRecommendations = Object.entries(recommendations).sort((a, b) => b[1] - a[1]);
  if(sortedRecommendations.length >7){
  var topRecommendations = sortedRecommendations.slice(0, 7); 
  }
  else{
    var topRecommendations = sortedRecommendations.slice(0, 3);
  }
  console.log("Top Recommendations:", topRecommendations);
  delta.forEach(user=>{


    user.element.style.display="none";
    })
    console.log(delta)
    delta.forEach(user=>{
        console.log(user.name);
        for(i=0;i<topRecommendations.length;i++){ 
  if(topRecommendations[i][0]==user.name){
    user.element.style.display="block";}}
}) 

})

  
});

});



})
const closebut=document.getElementById("closebut");
closebut.addEventListener("click",function(){
    document.getElementById("closebut").style.display="block";
    document.getElementsByClassName("search")[0].style.display="flex";
    document.getElementById("logout").style.display="block";
    document.getElementById("Recommend").style.display="block";
    delta.forEach(user=>{


        user.element.style.display="block";
        })
})



