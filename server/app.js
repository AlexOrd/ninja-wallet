import path from 'path';
import app from './config/express';
import routes from './routes/index.route';
import swagger from './config/swagger';
import * as errorHandler from './middlewares/errorHandler';
import joiErrorHandler from './middlewares/joiErrorHandler';
import requestLogger from './middlewares/requestLogger';
require('dotenv').config();

import { connect } from './config/database';
import User from './models/user.model';

// enable webpack hot module replacement in development mode
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack/webpack.config.dev';
import {checkAccessAndProvideUserID} from './middlewares/auth/route_verifiers';
import authRoutes from './routes/auth.route'
import Transaction from './models/transaction.model';
import { deviceDetector } from './middlewares/auth/device_detector';
import { getDeviceInfo } from './utils/auth/aux_functions/get_device_info';



if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath })
  );
  app.use(webpackHotMiddleware(compiler));
}

connect();

// Swagger API documentation
app.get('/swagger.json', (req, res) => {
  res.json(swagger);
});

app.get('/swagger', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/swagger/index.html'));
});

// app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(requestLogger);
// Router
app.get('/getAll', async (req, response) => {
  const res = await User.find({}).populate('avatarId').exec();
  const res2 = await Transaction.find({})
    .populate('userId')
    .populate('cardId')
    .populate('transactionCategory')
    .exec();
  response.json({ res, res2 });
});

app.get('/test', deviceDetector, (req, res) => {
  console.log('INFO', getDeviceInfo(req))
  res.send('hello world')
})
app.use('/app', routes);

// app.use('/api', routes);

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

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});

// app.listen(3000, app.get('host'), () => {
//   console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
// });

export default app;
