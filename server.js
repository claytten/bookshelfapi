const Hapi = require('@hapi/hapi');
// eslint-disable-next-line import/no-extraneous-dependencies
const dotEnv = require('dotenv');
// eslint-disable-next-line import/no-extraneous-dependencies
const Good = require('@hapi/good');

const options = {
  plugin: Good,
  options: {
    reporters: {
      console: [
        {
          module: '@hapi/good-console',
          args: [{ format: 'YYYY-MM-DDTHH:mm:ss.SSS[Z]' }],
        },
        'stdout',
      ],
    },
  },
};

async function start() {
  // Create a server with a host and port
  dotEnv.config();
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Add the route

  if (process.env.NODE_ENV === 'production') {
    options.options.ops = {
      interval: 1000,
    };
  }

  // server register plugin
  await server.register(options);

  await server.start();
  // eslint-disable-next-line no-console
  console.info(`Server running on ${server.info.uri}`);
  return server;
}

start().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
