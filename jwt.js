const jwt = require('jsonwebtoken');
const data = { application: 'cj-production', namespace: 'cj', stage: 'prod' };
const secret = 'medvine';
const option = {
  algorithm: 'HS384',
  expiresIn: '10y'
};
const token = jwt.sign(data, secret, option);
console.log(token);

try {
  const decode = jwt.verify(token, secret)
  console.log(decode)
} catch(err) {
  console.log(err)
}