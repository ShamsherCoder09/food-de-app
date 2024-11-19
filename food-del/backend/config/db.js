import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://mohdshamsher365:Mohd09@cluster0.4ij82.mongodb.net/food-del-app')
    .then(()=>console.log("DB Connected"))
    .catch((error)=>{
        console.log(error, "Error connection in mongodb")
    })
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.