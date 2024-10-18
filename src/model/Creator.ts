import mongoose, {Schema, Document} from "mongoose";

export interface Creator{
    walletId:string,
    name:string,
    bio:string,
    supporters:number,
    tips:number,
    messages:string
}

const CreatorSchema:Schema<Creator> = new Schema({
    walletId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    },
    supporters:{
        type:Number,
        default:0
    },
    tips:{
        type:Number
    },
    messages:{
        type:String
    }
})

const CreatorModel=(mongoose.models.Creator as mongoose.Model<Creator>||mongoose.model<Creator>("Creator",CreatorSchema))