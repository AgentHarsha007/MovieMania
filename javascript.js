document.getElementById("button").addEventListener('click',function() {
    document.getElementById("main007").classList.add("blurrone");
    document.getElementById("login_block").style.display="block";


});
document.getElementsByClassName("close")[0].addEventListener("click",function(){
    document.getElementById("login_block").style.display="none";
    document.getElementById("main007").classList.remove("blurrone");
});
const a=document.querySelector("[new_query]");
const d=document.getElementById("container");
fetch("http://localhost:4000/top100_n.json").then(xout => xout.json()).then(out1 => {
    out1.forEach(james => {
        const stock=a.content.cloneNode(true);
        const b=stock.children[0];
        const imgclass=b.getElementsByClassName("hello")[0] ;
        const infoclass=b.querySelector("[div_query]");
        imgclass.src="movie_img/"+james.name.trim()+".jpg"
        // infoclass.textContent=james.name;
        d.append(b);
    });
});
var alpha=2;
fetch("http://localhost:4000/alpha")
    .then(response => response.json())
    .then(data => {
         alpha = data.alpha;
         if(alpha==1){
            window.alert("No user with that email");
        }
        if(alpha==0){
            window.alert("Password incorrect");
        }

    }); 