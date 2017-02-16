import * as express from 'express';
import * as mongoose from 'mongoose';
import * as mongodb from 'mongodb';
import Photo from '../models/photoSchema';



let router = express.Router();

router.post('/', (req, res) => {


let photo:any = new Photo();
photo.title = req.body.url.title;
photo.description = req.body.url.description;
photo.url = req.body.url.url;
photo.save(function(err, newPhoto){
  if(err){
    console.log(err)
  }else{
    res.end();
  }

})
});
router.get('/', (req, res) => {
    Photo.find({}, (err, photos) => {
        if(err) {
        console.log(err)
        } else {
            res.json(photos)
        }

    })
})




export default router;
