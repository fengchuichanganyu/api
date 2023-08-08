const Goods = require('../model//goods.model')

const {invalidGoodsId} = require('../constant/err.type')

const validator = async (ctx,next)=>{
    try{
        ctx.verifyParams({
            goods_id:'number'
        })
    }catch(err){
        console.error(err)
       
        invalidGoodsId.result = err
        return ctx.app.emit('error',invalidGoodsId,ctx)
    }
    await next()
}

 const goods_validator =  async (ctx,next)=>{
    const whereOpt = ctx.request.body.goods_id
    // console.log(whereOpt)
    const res = await Goods.findOne({       
        where:{id:whereOpt},      
      })
    console.log(res)
    if(!res){   
        return ctx.app.emit('error',invalidGoodsId,ctx)
    }
    await next()

}
module.exports = {
    validator,
    goods_validator,
}