var createError = require('http-errors');
var express = require('express');
var path = require('path');

var userRouter = require('./routes/user');

var app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use('/', userRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development

  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  // res.status(err.status || 500);
  const status = err.status || 500;
  res.status(status).json({ isSuccess: false, message: err });

  // res.render('error');
});

module.exports = app;
