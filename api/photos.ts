import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';
import Photo from '../models/photoSchema';



let router = express.Router();

router.post('/', (req, res) => {
console.log(req.body);
  let photo = req.body;
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.url = req.body.url;
  photo._id = new mongodb.ObjectID(req.body._id)
  database.db.collection('photos').save(req.body).then((newPhoto) => {
      res.json(newPhoto);
    }).catch((err)=>{
      console.log(err);
     res.send(err)
   })
});


// router.post('/', (req, res) => {
// console.log(req.body._id);
//   let photo = req.body;
//   photo.title = req.body.url.title;
//   photo.description = req.body.url.description;
//   photo.url = req.body.url.url;
//   photo._id = new mongodb.ObjectID(req.body._id)
//   database.db.collection('photos').save(req.body).then((newPhoto) => {
//       res.json(newPhoto);
//     }).catch((err)=>{
//       console.log(err);
//      res.send(err)
//    })
// });


       // console.log(req.body);
       // let photo:any = new Photo();


//current





// photo.save(function(err, newPhoto){
//   if(err){
//     console.log(err)
//   }else{
//     res.end();
// }

//})



router.get('/', (req, res) => {
  database.db.collection('photos').find().toArray().then((photos)=>{
    res.json(photos);
  })
});







//current



// router.get('/', (req, res) => {
//
//     Photo.find({}, (err, photos) => {
//         if(err) {
//         console.log(err)
//         } else {
//             res.json(photos)
//         }
//
//     })
// })
// router.post('/:id', (req, res) =>{
//   Photo.find({photos: req.params.id},(err, photos) =>{
//     res.sendStatus(200);
//   })
// })


router.delete('/:id', (req, res) => {
  let photoId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('photos').remove({_id:photoId}).then(()=> {
    res.sendStatus(200);
  });
});


export default router;
