const Validator= require('validator');
const isEmpty= require('is-empty');

module.exports = function validateLoginInput(data){
    const err= {};
    data.email=isEmpty(data.email) ? data.email :'';
    data.password = isEmpty(data.password) ? data.password : '';

    if(Validator.isEmpty(data.email)){
        err.email="email is required";
    } else if (Validator.isEmail(data.email)){
        err.email="should be a valid email";
    }

    if(Validator.isEmpty(data.password)){
        err.password="password is required";
    }
    return {
        err,
        isValid: isEmpty(err),
    }

};