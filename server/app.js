import path from 'path';
import app from './config/express';
import routes from './routes/index.route';
import * as errorHandler from './middlewares/errorHandler';
import joiErrorHandler from './middlewares/joiErrorHandler';
import requestLogger from './middlewares/requestLogger';
import chokidar from 'chokidar';
require('dotenv').config();

import { connect as connectToDB } from './config/database';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger';

// enable webpack hot module replacement in development mode
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack/webpack.config.dev';
import telegramBot from './config/telegram_bot';

import { checkAccessAndProvideUserID } from './middlewares/auth/route_verifiers';
import authRoutes from './routes/auth.route';
import Transaction from './models/transaction.model';
import { deviceDetector } from './middlewares/auth/device_detector';
import { getDeviceInfo } from './utils/auth/aux_functions/get_device_info';

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath })
  );
  app.use(webpackHotMiddleware(compiler));

  const watcher = chokidar.watch('./server');

  watcher.on('ready', function () {
    watcher.on('all', function () {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function (id) {
        if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
      });
    });
  });

  // Do "hot-reloading" of react stuff on the server
  // Throw away the cached client modules and let them be re-required next time
  compiler.plugin('done', function () {
    console.log('Clearing /client/ module cache from server');
    Object.keys(require.cache).forEach(function (id) {
      if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
    });
  });
}

connectToDB();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(requestLogger);

app.use('/api', routes);

// Landing page
app.get('*', (req, res) => {
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

export default app;
