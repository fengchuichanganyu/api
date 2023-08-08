const Router = require('koa-router')

const { auth} = require('../middleware/auth.middleware')
const {validator,goods_validator} = require('../middleware/cart.middleware')

const {add} = require('../controller/carts.controller')

const router  = new Router({ prefix:'/carts'})

router.post('/',auth,validator,goods_validator,add)

module.exports = router