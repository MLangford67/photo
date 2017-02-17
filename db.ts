const connectionString:string = 'mongodb://Mlangford67:Carnifex6@ds159208.mlab.com:59208/piranhaspiderdb';

import * as mongodb from 'mongodb';
console.log('success');
export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
        this.db = db;
    }).catch((err) => {
        console.error(err);

    });
  }
}
