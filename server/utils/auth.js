const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '24h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.log(err)
      console.log('Invalid token');
    }

    // send to next endpoint
    return req;
  },
  signToken: function ({ username, email, _id, name }) {
    let payload;
    if (username && email && _id) {
      payload = { username, email, _id };
    } else if (idToken) {
      payload = { name, email };
    } else {
      throw new Error('Invalid payload');
    }
    const options = { expiresIn: expiration, algorithm: 'HS256' };
    return jwt.sign({ data: payload }, secret, options);
  },
};