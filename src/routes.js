import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send('Projeto inicialmente funcionando');
});

export default routes;
