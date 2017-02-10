import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';

let router = express.Router();

router.post('/', (req, res) => {

  let photo = req.body;
  console.log(photo);
  photo._id = new mongodb.ObjectID(req.body._id);
  database.db.collection('photo').save(req.body).then((newPhoto) => {
    res.json(newPhoto);
  })
});

router.get('/', (req, res) => {
  database.db.collection('photo').find().toArray().then((photo)=>{
    res.json(photo);
  })
});
router.delete('/:id', (req, res) => {
  let photoId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('photo').remove({_id:photoId}).then(()=> {
    res.sendStatus(200);
  });
});

export default router;
