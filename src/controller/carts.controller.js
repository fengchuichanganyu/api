const {createdOrUpdate} = require('../service/carts.service')

class CartController{
    async add(ctx){
       const user_id = ctx.state.user.id
       const goods_id = ctx.request.body.goods_id
    //    console.log(user_id,goods_id)
    const res =  await createdOrUpdate(user_id,goods_id)
    ctx.body = {
        code:'0',
        message:'添加到购物车成功',
        result:res,
    }


    }
}

module.exports = new CartController