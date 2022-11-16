const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    //check for session cookie
    const cookie = req.cookies && req.cookies[process.env.COOKIE_NAME];
    if (!cookie) throw new Error('You must be signed in to continue');
    //verify its contents using jsonwebtoken
    //assign the payload to req.user
    const user = jwt.verify(cookie, process.env.JWT_SECRET);
    req.user = user;

    next();
  } catch (err) {
    err.status = 401;
    next(err);
  }

  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */
};

//hope this push works
