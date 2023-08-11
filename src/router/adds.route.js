const Router = require('koa-router')

const router  = new Router({prefix:'/address'})

const {auth} = require('../middleware/auth.middleware')
const {validator} = require('../middleware/addr.middleware')

router.post('/', auth,validator({
    consignee:'string',
    phone:{ type :'string', format: /^1\d{10}$/ },
    address:"string",
}),
 (ctx)=>{
    ctx.body ='添加成功'
})

module.exports = router