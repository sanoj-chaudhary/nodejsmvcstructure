import  express, { json }  from "express";
import routes from './routes';
import { APP_PORT } from "./config";
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(express.json());
app.use('/api',routes);



app.use(errorHandler);
app.listen(APP_PORT, ()=>console.log('Listening on port '+APP_PORT+'' ));