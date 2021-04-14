import path from 'path';
import app from './config/express';
import routes from './routes/index.route';
import swagger from './config/swagger';
import * as errorHandler from './middlewares/errorHandler';
import joiErrorHandler from './middlewares/joiErrorHandler';
import requestLogger from './middlewares/requestLogger';
import cors from 'cors';

import { connect } from './config/database';
import { User } from './models/user.model';
// import authRoutes from './routes/auth.route';
// import emailRoutes from './routes/email.route';

// enable webpack hot module replacement in development mode
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack/webpack.config.dev';
// import { checkAccessAndProvideUserID } from './middlewares/auth/route_verifiers/check_access_and_provide_user_id';
// import swaggerUI from 'swagger-ui-express'
// import YAML from 'js-yaml'
// const swaggerDocument = YAML.load(fs.readFileSync('./docs/auth_api.yaml', 'utf8'));

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath })
  );
  app.use(webpackHotMiddleware(compiler));
}

connect();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  exposedHeaders: ['Access-Token', 'Refresh-Token'],

  preflightContinue: false,
  optionsSuccessStatus: 204,
};
cors(corsOptions);

// Swagger API documentation
app.get('/swagger.json', (req, res) => {
  res.json(swagger);
});

app.get('/swagger', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/swagger/index.html'));
});

// app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(requestLogger);
// app.use('/auth', authRoutes);
// app.use(checkAccessAndProvideUserID);
// app.use('/user-email', emailRoutes);
// Router

app.get('/getAll', (req, res) => {
  User.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// app.use('/api', routes);
app.use('/api', routes);

// Landing page
app.get('*', (req, res) => {
  // res.send('hello world')
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Joi Error Handler Middleware
app.use(joiErrorHandler);

// Error Handler Middleware
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.notFound);
app.use(errorHandler.methodNotAllowed);

app.listen(4000, app.get('host'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});

export default app;
