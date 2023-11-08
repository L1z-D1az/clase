import { Application } from 'express';
import userNetwork from './user';
import Routes from '../utils/constants/routes.json';


function routes(server: Application) {
                  server.use(Routes.user, userNetwork);  
}
export default routes;