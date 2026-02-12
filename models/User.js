import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    _id:{type:String,required:true},
    name:{type:String,required:true},
      email:{type:String,required:true,unique:true},
      imageUrl:{type:String,required:true},
      cartItmes:{type:String,default:{}}





},{minimize:false})

const User = mongoose.models.User ||mongoose.model('user',UserSchema)


export default User