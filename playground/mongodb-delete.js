const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Edson Nunes'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Users').deleteOne({name: ''}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('592395637572d418e8a28f56')
  // }).then((result) => {
  //   console.log(result);
  // });

  //db.close();
});
