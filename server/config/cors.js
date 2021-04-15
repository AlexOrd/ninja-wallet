export const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    exposedHeaders: ['Access-Token', 'Refresh-Token'],
  
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };