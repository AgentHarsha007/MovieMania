const { time } = require('console');
const express= require('express')
const app=express()
const bodyParser = require('body-parser');
// app.listen(4000)
const fs=require("fs");
const { validateHeaderName } = require('http');
var delta=2;
const path = require('path'); 
const staticPath = path.join(__dirname); 
app.use(express.static(staticPath));
function change_c_u(name){
    const ar=fs.readFileSync('./current_user.json', 'utf8');
    const br=JSON.parse(ar);
    br[0].user=name;
    fs.writeFileSync('./current_user.json', JSON.stringify(br, null, 2));



};
function change_c_m(name){
    const a12=fs.readFileSync('./current_movie.json', 'utf8');
    const b12=JSON.parse(a12);
    b12[0].movie=name;
    fs.writeFileSync('./current_movie.json', JSON.stringify(b12, null, 2));

};
function get_c_m(){
    const a12=fs.readFileSync('./current_movie.json', 'utf8');
    const b12=JSON.parse(a12);
    return b12[0].movie;
};
function get_c_u(){
    const a12=fs.readFileSync('./current_user.json', 'utf8');
    const b12=JSON.parse(a12);
    return b12[0].user;
};
// To handle file paths
app.use(express.urlencoded({extended:false}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// `app.set('view engine', 'ejs');`

// Define the static folder path
// Assuming your static files are in a 'public' folder
// Serve static files from the 'public' folder
app.get('/',(req,res)=>{
    console.log(1);
    res.sendFile('search.html', { root : __dirname });
});
// app.post("/login.html",(req,res)=>{


// })
// app.post("/",(req,res)=>{
//     req.body.
// })
// app,post
app.get('/Register',(req,res)=>{
    res.sendFile("Register.html",{ root : __dirname })
});
app.post("/Register",async (req,res)=>{
    try{
        const users={
            id:Date.now().toString(),
            name:req.body.k2,
            date_of_birth:req.body.bdate,
            email:req.body.email,
            password:req.body.password
        };
        console.log(users);
        change_c_u(users.name);
        const store=fs.readFileSync("./database/user_data.json",'utf8');
        const storedata=JSON.parse(store);
        const userWithEmail = storedata.find(user => user.email === users.email);
        if(userWithEmail){
            res.redirect('/');
        }
        else{
        const fileName = `./database/${users.name}_rating.json`;
        fs.writeFileSync(fileName, '[]');
        storedata.push(users);
        fs.writeFileSync("./database/user_data.json",JSON.stringify(storedata,null,2));
        console.log("added");

        res.redirect("/main");}
    }
    catch(err){
        console.log(err);
        res.redirect('/');
    }

});

app.get('/main',(req,res)=>{
    app.use(express.static('views'));
    const jsonData = fs.readFileSync('./database/user_data.json', 'utf8');
    const data = JSON.parse(jsonData);
    var last_element=data[data.length-1];
    res.render("main.ejs",{last_element});
    // res.sendFile("main.html",{ root : __dirname });
    // const store1=fs.readFileSync("./storage.json", "utf8");
    // const store1data=JSON.parse(store1);
    // res.json({store1data});
});
app.post('/',async (req,res)=>{
    try{
            const email=req.body.gam2;
            const password=req.body.alp3;
            const jsonData = fs.readFileSync('./database/user_data.json', 'utf8');
            const data = JSON.parse(jsonData);
            // console.log(data);
            // console.log(email);
            // console.log(password);  
            const search_user=data.find(x => x.email == email && x.password == password);
            // console.log(search_user);
            const search_user_name=data.find(x => x.email=== email && x.password != password);
            if(search_user){
                const name=search_user.name;
                // current_user=name;
                change_c_u(name);
                var last_element={name:name};
                app.use(express.static('views'));
                res.render("main.ejs",{last_element});
            }
            else{
                if(search_user_name){
                   var alpha=0;
                   delta=alpha;
                   console.log(delta);
                   app.use(express.static(staticPath));
                //    res.sendFile(path.resolve('./search.html'), { alpha });
                    res.sendFile("search.html",{root : __dirname});
                }
                else{
                    alpha=1;
                    delta=alpha;
                    console.log(delta);
                    // res.sendFile(path.resolve('./search.html'), { alpha });
                    res.sendFile("search.html",{root : __dirname});
                }

            }
    }
    catch(err){
        console.log(err);
        res.redirect('/');
    }
});
// console.log(current_user)
app.get('/alpha', (req, res) => {
    console.log(delta);
    res.json({ alpha: delta }); // Or retrieve alpha from wherever it's stored
});
// app.get('/Rating_data',(req,res))
app.use(bodyParser.json());
app.post('/html',(req,res)=>{

// const {body} = req;
//  const bb=body;
//  console.log(bb);
//  const movie_opened = bb.movie_opened;
//  const htmlContent = `<html><body><h1>Data: ${movie_opened}</h1></body></html>`;
//  res.send(htmlContent); // Send HTML content as a response
console.log(req.body);  
const  movie_opened = req.body.movie_opened;
change_c_m(movie_opened);
console.log(movie_opened);
const current_movie_d=fs.readFileSync('./top100_k.json', 'utf8');
const current_movie_data=JSON.parse(current_movie_d);
const search_movie=current_movie_data.find(x => x.name.trim() == get_c_m()) ;
const image_url=search_movie.poster;
const plot=search_movie.plot;
const genre=search_movie.genre;
const directors=search_movie.writers;
const cast=search_movie.cast;
const imdb=search_movie.imdb_rating;
const year=search_movie.year;
const votedpeople=search_movie.voted_people;
const writers=search_movie.writers;
var xorgate="gate";
const current_movie=get_c_m();

app.use(express.static('views'));
res.render('beast', {
    current_movie,
    image_url,
    plot,
    genre,
    directors,
    cast,
    imdb,
    year,
    votedpeople,
    writers,
    xorgate
});
});
app.get('/html',(req,res)=>{
    const current_movie_d=fs.readFileSync('./top100_k.json', 'utf8');
    const current_movie_data=JSON.parse(current_movie_d);
    const search_movie=current_movie_data.find(x => x.name.trim() == get_c_m()) ;
    const image_url=search_movie.poster;
    const plot=search_movie.plot;
    const genre=search_movie.genre;
    const directors=search_movie.writers;
    const cast=search_movie.cast;
    const imdb=search_movie.imdb_rating;
    const year=search_movie.year;
    const votedpeople=search_movie.voted_people;
    const writers=search_movie.writers;
    var xorgate="gate";
    const current_movie=get_c_m();
    console.log(get_c_u());
    const userDataJSON1 = fs.readFileSync(`./database/${get_c_u()}_rating.json`, 'utf8');
    const user_rating_data=JSON.parse(userDataJSON1);
    const index=user_rating_data.findIndex(item => item.movie_name === get_c_m());
    if(index==-1){
        xorgate="n/R";
    }
    if(index != -1){
        xorgate=user_rating_data[index].rating;
    }
    app.use(express.static('views'));
    res.render('beast', {
        current_movie,
        image_url,
        plot,
        genre,
        directors,
        cast,
        imdb,
        year,
        votedpeople,
        writers,
        xorgate
    });
})
app.post("/rating",async (req,res)=>{
    try{
        const rating_given=req.body.rating_given;
        const movie_name_year=req.body.nameofmovie;
        console.log(req.body);
        const movie_name=movie_name_year.substring(0,movie_name_year.length-7);
        console.log(req.body);
        console.log(rating_given);
        console.log(movie_name);
        const current_movie_d=fs.readFileSync('./top100_k.json', 'utf8');
        const current_movie_data=JSON.parse(current_movie_d);
        const search_movie=current_movie_data.find(x => x.name.trim() == get_c_m()) ;
        const image_url=search_movie.poster;
        const plot=search_movie.plot;
        const genre=search_movie.genre;
        const directors=search_movie.writers;
        const cast=search_movie.cast;
        const imdb=search_movie.imdb_rating;
        const year=search_movie.year;
        const votedpeople=search_movie.voted_people;
        const writers=search_movie.writers;
        var xorgate="gate";
        const current_movie=get_c_m();
        if(get_c_u() != "hello"){
        const userDataJSON1 = fs.readFileSync(`./database/${get_c_u()}_rating.json`, 'utf8');
        const user_rating_data=JSON.parse(userDataJSON1);
        const index=user_rating_data.findIndex(item => item.movie_name === get_c_m());
        if(index==-1){
            xorgate="n/R";
        }
        if(index != -1){
            xorgate=user_rating_data[index].rating;
        }
            const userDataPath = `./database/${get_c_u()}_rating.json`;
            let userData = [];
            if (fs.existsSync(userDataPath)) {
                const userDataJSON = fs.readFileSync(userDataPath, 'utf8');
                userData = JSON.parse(userDataJSON);
            }
    
            // Find the movie in user data
            const movieIndex = userData.findIndex(item => item.movie_name === movie_name);
    
            // Update or add the movie rating
            if (movieIndex === -1) {
                // Movie not found, add it
                userData.push({ "movie_name": movie_name, "rating": rating_given ,"genre":genre});
                xorgate=rating_given;
            } else {
                // Movie found, update its rating
                userData[movieIndex].rating = rating_given;
                xorgate=rating_given;
            }
    
            // Write updated user data back to JSON file
            fs.writeFileSync(userDataPath, JSON.stringify(userData, null, 2));

        }
        app.use(express.static('views'));
        res.render('beast', {
            current_movie,
            image_url,
            plot,
            genre,
            directors,
            cast,
            imdb,
            year,
            votedpeople,
            writers,
            xorgate
        });


    }
    catch(error){
        console.log(error);

    }
});
app.listen(4000)



