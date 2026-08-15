
    const d=document.getElementById("container");
    const e=document.querySelector("[added]");
    console.log(e);
    fetch("http://localhost:4000/top100_n.json").then(xout => xout.json()).then(out1 => {
        out1.forEach(james => {
            const stock1=e.content.cloneNode(true);
            const b1=stock1.children[0];
            const img_main=b1.getElementsByClassName("imgclr")[0];
            const rating=b1.getElementsByClassName("Rating")[0];
            const voted=b1.getElementsByClassName("voted")[0];
            voted.textContent=james.voted_people;
            rating.textContent=james.imdb_rating;
            b1.id=james.name.trim();
            b1.getElementsByClassName("genre").textContent=james.genre[0]+" "+james.genre[1];
            b1.getElementsByClassName("plot").textContent=james.plot;
            d.append(b1);
            const stock=a.content.cloneNode(true);
            const b=stock.children[0];
            b.id=james.name.trim()+"1";
            const imgclass=b.getElementsByClassName("hello")[0] ;
            const infoclass=b.querySelector("[div_query]");
            infoclass.textContent=james.name;
            d.append(b);

        });
    });
const buttons=document.getElementsByClassName("butonn");
console.log(buttons)
console.log(buttons.length)
for (var i = 0; i < buttons.length; i++) {
        console.log(buttons[i]);
        buttons[i].addEventListener('click', function(event) {
            var buttonId = event.target.id;
            var string=buttonId.substring(0,buttonId.length-1);
            console.log(string);
            if (document.getElementById(string) ){
            document.getElementById(string).style.display="block";}
    
        });
    }
for(var j=0;j<10;j++){
    console.log(j);
}


