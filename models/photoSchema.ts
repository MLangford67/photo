import * as mongoose from 'mongoose';

export interface IPhoto extends mongoose.Document {
  title: string;
  discription: string;

}

let photoSchema = new mongoose.Schema({
  title:{
    type:String,
    required: true,
    minlength: 2,
  },
  discription:{
    type:String,
    require: true
  }
})

export default mongoose.model<IPhoto>('Photo', photoSchema);
