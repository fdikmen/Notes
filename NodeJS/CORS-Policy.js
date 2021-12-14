// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*'); //LINE 5

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


/*-------------------You can change line 5 as follows.-------------------------------------*/
//ALLOW ALL ORIGIN
res.setHeader('Access-Control-Allow-Origin', '*');

//ALLOW SPECIFIC ORIGIN
res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');

//ALLOW MULTIPLE ORIGINS
const allowedOrigins = ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://127.0.0.1:5000', 'http://localhost:5000'];
const origin = req.headers.origin;
if (allowedOrigins.includes(origin)) {res.setHeader('Access-Control-Allow-Origin', origin);  }
