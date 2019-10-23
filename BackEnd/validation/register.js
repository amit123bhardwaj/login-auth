const Validator= require('validator');
const isEmpty= require('is-empty');

module.exports = function validateRegisterInput(data){
    var err={};
    console.log('data inside validator for register', data);

    data.name= !isEmpty(data.name) ? data.name:'';
    data.email=!isEmpty(data.email) ? data.email:'';
    data.password=!isEmpty(data.password) ? data.password:'';
    data.password2=!isEmpty(data.password2) ? data.password2:'';
    console.log('curr data for register', data);
    if(Validator.isEmpty(data.name)){
     err.name="Name field is missing";
    }

    if(Validator.isEmpty(data.email)){
     err.email="Email field is missing";
    }else if(!Validator.isEmail(data.email)){
        err.email="Not a valid email id";
    }
     
    if(Validator.isEmpty(data.password)){
        err.password="password can't be empty";
    }
    // else if(!Validator.isAlphanumeric(data.password) && ! Validator.isLength(data.password,{min:4, max:100})){
    //     err.password="password should be Alphanumeric";
    // }
    
    if(Validator.isEmpty(data.password2)){
        err.password2="password2 can't be empty";
    }
    // else if(Validator.isAlphanumeric(data.password2)){
    //     err.password2="password should be Alphanumeric";
    // }

    // if(Validator.equals(data.password,data.password2)){
    //  err.password2="password must match";
    // }
    console.log('err obj-->',err);
     
    return{
        err,
        isValid: isEmpty(err),
    };
};
