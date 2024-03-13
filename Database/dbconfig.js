import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDb = async() => {
    
    try {
        // console.log(process.env.MONGODBCONNECTIONSTRING);
      const mongoURL = process.env.MONGODBCONNECTIONSTRING;
      const connection = await mongoose.connect(mongoURL);

      console.log("connected in mongoDB");
      return connection;
    } catch (error) {
        console.error("connection eror",error);
    }
   

}

export default connectDb;