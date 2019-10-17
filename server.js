const express= require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const passport= require('passport');
const router= require('router');

const bcrypt= require('bcryptjs');
const jwt = require("jsonwebtoken");

const validateRegisterInput = require('./validation/register');
const validateLoginInput = require('./validation/login');

const User= require('./BackEnd/models/user');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*  for remote 
  
// const db= require('./config/keys').mongoURI;
// mongoose.connect(db,{useNewUrlParser:true})
//  .then(()=>console.log("MongoDB successfully connected"))
//  .catch(err=>console.log(err));

*/

app.post('/register',function(req,res){
    const {err, isValid} = validateRegisterInput(req.body);
    if(!isValid){
       return res.status(400).json(err);    
    }
    User.findOne({email:req.body.email}).then(user=>{
        if(user){
            return res.status(400).json({email:'user already exist'});
        }else{
          const newuser= new User({
              name:req.body.name,
              email:req.body.email,
              password:req.body.password,
          })
        }

        // hash password before saving
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
          });
        })
      });


      app.post('/login', (req,res) => {
      const {err, isValid} = validateLoginInput;
      const email= req.body.email;
      const password=req.body.password;
       if(!isValid){
          return res.status(400).json(err);
       }
       User.findOne({email:email}).then(user=>{
           if(!user){
               return res.status(400).json({email:'Email not found'});
           }
           bcrypt.compare(password,user.password).then( isMatch => {
            if(isMatch){
               const payload={
                   id:user.id,
                   name:user.name,
               };
               jwt.sign(
                payload,
                "secret",
                {
                expiresIn: 31556926 
                },
                (err,token)=>{
                    res.json({
                        token:'bearer'+ token,
                        success:true,
                    });
                }
               )
            } else{
                return res.status(400).json({password:'password didnt match'});
            }
           })
       })
      });
mongoose.connect('mongodb://127.0.0.1:27017/local', { useNewUrlParser:true } );
const connection = mongoose.connection;


connection.once('open',function(){
console.log('MongoDB database connection ');
})
 const port = process.env.PORT || 5000;
// app.use(passport.initialize());
// require('./config/passport')(passport);
// app.use('/api/users', users);

 app.listen(port,()=>{
     console.log('server started at :', port);
});
