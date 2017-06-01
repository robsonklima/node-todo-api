const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPass = '$2a$10$lJZ0sy9ONaFS5DdpBZl9P.Go/PnU9LpdMH6lyyLEx8BbJspy9FcGe';

bcrypt.compare(password, hashedPass, (err, res) => {
  console.log(res);
})


// var data = {
//   id: 10
// };
//
//
//
// var token = jwt.sign(data, 'secret');
// console.log(token);
//
// var decode = jwt.verify(token, 'secret')
// console.log(decode);

//jwt.verify;

// var message = 'robsonklima';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data: data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Dont trust!');
// }
