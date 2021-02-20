const express=require('express')
const path=require('path');


const app = express();


// express static file used
app.use(express.static(path.join(__dirname, 'public')));



// ejs engine setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// Dummy users
var users = [
    { name: 'tobi', email: 'tobi@learnboost.com' },
    { name: 'loki', email: 'loki@learnboost.com' },
    { name: 'jane', email: 'jane@learnboost.com' }
  ];

app.get('/home',(req,res)=>{
    res.render('home',{
        users: users,
    });
})



const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));