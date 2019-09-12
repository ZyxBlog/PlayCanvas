const Koa = require('koa')
const Statics = require('koa-static')
const Views = require('koa-views')
const Router = require('koa-router')
const path = require('path')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')

const app = new Koa()
const router = new Router()

const port = 1234;
const baseUrl = path.resolve(__dirname, '../')

app.use(historyApiFallback({ 
    whiteList: ['/index', '/ready'], 
    verbose: true
}))

app.use(Statics(baseUrl + '/dist'))

app.use(Views(baseUrl + '/dist/views', {
    extension: 'ejs'
}))

app.use(router.routes())

app.listen(port, () => {
    console.log(`the server is running at port: ${port}`)
})

router.get('/ready', async (ctx, next) => {
    ctx.body = 'hello'
})

router.get('/index', async (ctx, next) => {
    await ctx.render('index')
})
