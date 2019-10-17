const Validator= require('validator');
const isEmpty= require('is-empty');

module.exports = function validateRegisterInput(data){
    var err={};

    data.name= !isEmpty(data.name) ? data.name:'';
    data.email=!isEmpty(data.email) ? data.email:'';
    data.password=!isEmpty(data.password) ? data.password:'';
    data.password2=!isEmpty(data.password2) ? data.password2:'';

    if(Validator.isEmpty(data.name)){
     err.name="Name field is required";
    }

    if(Validator.isEmpty(data.email)){
     err.email="Email field is required";
    }else if(!Validator.isEmail(data.email)){
        err.email="Not a valid email id";
    }
     
    if(Validator.isEmpty(data.password)){
        err.password="password can't be empty";
    } else if(!Validator.isAlphanumeric(data.password) && ! Validator.isLength(data.password,{min:4, max:100})){
        err.password="password should be Alphanumeric";
    }
    
    if(Validator.isEmpty(data.password2)){
        err.password2="password can't be empty";
    } else if(Validator.isAlphanumeric(data.password2)){
        err.password2="password should be Alphanumeric";
    }

    if(Validator.equals(password,password2)){
     err.password2="password must match";
    }

    return{
        err,
        isValid: isEmpty(err),
    };
};
