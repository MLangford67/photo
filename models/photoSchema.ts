import * as mongoose from 'mongoose';
import Database from '../db'
// export interface IPhoto extends mongoose.Document {
//   title: string;
//   description: string;
//
// }

let photoSchema = new mongoose.Schema({
  title:String,

  description:String,

  url:String
})

export default mongoose.model('Photo', photoSchema);
