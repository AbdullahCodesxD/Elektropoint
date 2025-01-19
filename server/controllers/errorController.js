function handleMongooseErrors(err, res) {
  res.status(400).json({
    message: err.message,
    stack: err.stack,
  });
}
function handleOtherErrors(err, res) {
  res.status(400).json({
    message: err.message,
    stack: err.stack,
  });
}
module.exports = function (err, req, res, next) {
  if (err.message.includes("E11000")) {
    return handleMongooseErrors(err, res);
  }
  handleOtherErrors(err, res);
};
