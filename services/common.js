const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  // TODO : this is temporary token for testing without cookie
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGVjMTg3MzhlYWM3MzBlMjk3ZTU3NiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2NDM3MzgzfQ.hurYwh6h2VC9gsyrXM8TBaiin_rWupwS-2et785JzzU"
  return token;
};
