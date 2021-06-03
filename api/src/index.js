import server from './app';

server.listen(process.env.PORT || 3001, () => {
  console.log(`API listening at ${process.env.PORT || 3001}`); // eslint-disable-line no-console
});

