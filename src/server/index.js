import koa from './infrastructure/koa'


console.log("hello server")
koa.app.listen(3000, function () {
    console.log('Server running on https://localhost:3000')
});
