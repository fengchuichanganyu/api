const {createdOrUpdate,
    findCarts,
    updateCarts,
    removeCarts,
    selectOrUnSelectAllCarts,
} = require('../service/carts.service')

const {cartFormatError,} = require('../constant/err.type')

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

    async findAll(ctx){
      
        const {pageNum = 1 ,pageSize = 10} = ctx.request.query
        const res = await findCarts(pageNum ,pageSize)
     
        ctx.body  ={
            code:'0',
            message:'获取购物车列表成功',
            result:res,
        }
    }

    async update(ctx){
        const {id} = ctx.request.params
        const {number ,selected} = ctx.request.body
        if( number === undefined && selected === undefined){
            cartFormatError.message = 'number和selected不能同时为空'
            return ctx.app.emit('error',cartFormatError,ctx)
        }
        const res = await updateCarts({id,number,selected})
        console.log(res)
        if(res=='id不存在'){
            ctx.body = {
                code:'0',
                message:'更新购物车失败',
                result:res,
            }
        }else{
            ctx.body = {
                code:'0',
                message:'更新购物车成功',
                result:res,
            }
        }
        
    }

    async remove(ctx){
        const {ids} = ctx.request.body

        const res = await removeCarts(ids)
        if(res ==0){
            ctx.body = {
                code:'0',
                message:'购物车中无此商品',
                result:res,
            }  
        }else{
            ctx.body = {
                code:'0',
                message:'删除商品成功',
                result:res,
            }
        }    
    }

    async selectOrUnSelectAll(ctx){
        const user_id = ctx.state.user.id
        const {opt} = ctx.request.body
        console.log(opt)
        const res = await selectOrUnSelectAllCarts(user_id,opt)
        // console.log(res)
        ctx.body = {
            code:0,
            message:'商品全部更改为选中或不选中',
            result:res,
        }

    }
}

module.exports = new CartController