import mongoose from "mongoose";
let MONGODB_URI='mongodb+srv://anuragMishra:anuragkapassword@cluster0.9dd2oru.mongodb.net/';

export default async function connect(){
 await mongoose.connect(MONGODB_URI)
 console.log('db connected')
}