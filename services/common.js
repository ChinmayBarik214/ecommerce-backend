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
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGQxYjkzNjUwMmIwZDRkZDgwNmQ1NiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2MzY5NTA4fQ.c3RnblNsf7D33QzSiW8DHg_X4TWcjBs2tysqnmg7BHM";
  return token;
};
