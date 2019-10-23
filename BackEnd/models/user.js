const mongoose= require('mongoose');
const UserSchema= mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true,
 },
 email:{
    type:String,
    required:true,
 },
//  date:{
//     type:Date,
//     required:true,
//  }
});
module.exports = User = mongoose.model('users',UserSchema);