const Router = require('koa-router')

const { auth} = require('../middleware/auth.middleware')
const {validator,
    goods_validator,
} = require('../middleware/cart.middleware')

const {add ,
    findAll ,
    update,
    remove,
} = require('../controller/carts.controller')

const router  = new Router({ prefix:'/carts'})

router.post('/',auth,validator({goods_id:'number'}),goods_validator,add)

router.get('/',auth,findAll)

router.patch('/:id',auth,validator({
    number:{type:'number',required:false},
    selected:{type:'bool',required:false},    
}),update)

router.delete('/',auth,validator({ids:'array'}),remove)

module.exports = router