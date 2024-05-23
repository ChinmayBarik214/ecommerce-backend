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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGVlZGNiOGI3NTliODdiMTQxYTY5YyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2NDQ4NzE1fQ.3IkN_B1V1JA-t6E_kGTkfWUJzG4QXKd5mdg4YWW9l6w";
  return token;
};
