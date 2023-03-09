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
      console.error(err)
    }

    // send to next endpoint
    return req;
  },
  signToken: function ({ username, email, _id, name, idToken }) {
    let payload;
    if (username && email && _id) {
      payload = { username, email, _id };
    } else if (name, email) {
      payload = { name, email };

    } else {
      // throw new Error('Invalid payload');
      payload = {}
    }
    const options = { expiresIn: expiration, algorithm: 'HS512' }; // update algorithm to HS512
    return jwt.sign({ data: payload }, secret, options);
  },

};