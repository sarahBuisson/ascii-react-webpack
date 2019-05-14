
import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import Router from 'koa-router';
import axios from 'axios';
import * as service from '../domain/service'


import request from 'request'

 let app = new koa();

app.use(bodyparser());

 var publicRouter = new Router();              //Instantiate the router
/*

publicRouter.get('/', (ctx, next) => {
    ctx.body = "Root Path";
    next();
});
*/

publicRouter.get('/api/hello',  (ctx, next) => {
    ctx.body = "Hello World";
});



publicRouter.get('/api/mowers',  (ctx, next) => {

    console.log("mowers")
    ctx.body = service.listMowers();
    next();
});

publicRouter.put('/api/mower',  ( ctx, next) => {
    console.log(ctx.request)
    let mower = ctx.request.body;
    service.createMower(mower.mark,mower.color,mower.year);
});



app.use(async (ctx, next) => {
    console.log("request received");
    ctx.state.requestId = Math.ceil(Math.random()*1000)
    ctx.status=200
    next()
});





app.use(publicRouter.routes());

app.use(publicRouter.allowedMethods());
import cors from '@koa/cors'// TODO : to delete before prodd
app.use(cors());// TODO : to delete before prodd

export default {app, publicRouter}

