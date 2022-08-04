import * as express from 'express';
import * as bodyParser from 'body-parser';
import {Routes} from './routes/route';

class App {
    public app : express.Application;
    public routePrv: Routes = new Routes();
    public constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    } 
    private config() : void {
        this.app.use(function(req, res, next) : void {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        })
        this.app.use(bodyParser.json({limit : '50mb'}));
        this.app.use(bodyParser.urlencoded({limit : '50mb', extended : false}));
        // Return exception with valid json response if not handled inside the method
        process.on('unhandledRejection', function (err): void {
            console.log('unhandledRejection', err);
        });
        process.on('uncaughtException', function (err): void {
            console.log('uncaughtException', err);
        });
    }
}

export default new App().app;