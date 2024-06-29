import mongoose from "mongoose";

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, );
        console.log("Connected to Database");
    }catch(e){
        console.log("error connecting to Database" + e)
    }
}

export default connect;
