const path = require('path')

const {fileUploadError,unSupportedFileType,publishGoodsError,invalidGoodsId} = require('../constant/err.type')

const {createGoods,updateGoods,removeGoods,restoreGoods} = require('../service/goods.service')

class GoodsController{
    async upload(ctx,next){
        // console.log(ctx.request.files.file)
        const {file} = ctx.request.files

        const fileTypes = ['image/jpeg','image/png']
        // console.log(file)
        if(file){
            if(!fileTypes.includes(file.mimetype)){
                return ctx.app.emit('error',unSupportedFileType,ctx)
            }
            ctx.body = {
                code:0,
                message:'商品图片上传成功',
                result:{
                    goods_img:path.basename(file.filepath),
                },
            }

        }else {
            return ctx.app.emit('error',fileUploadError,ctx)
        }
    }

    async create(ctx){
        //直接调用service的createGoods方法
      try{
        const {createdAt,updatedAt,...res} = await createGoods(ctx.request.body)
        ctx.body = {
            code:0,
            message:'发布商品成功',
            result:res,
        }

      } catch(err){
        console.error(err)
        return ctx.app.emit('error',publishGoodsError,ctx)
      }
    }

    async update(ctx){
        try{
           const res =  await updateGoods(ctx.params.id,ctx.request.body)
            
           if(res){
            ctx.body = {
                code:'0',
                message:'修改商品信息成功',
                result:'',
            }
           }else {
            return ctx.app.emit('error',invalidGoodsId,ctx)
           }

        }catch(err){
            console.error(err)
        }
    }

    async remove(ctx){
       const res =  await removeGoods(ctx.params.id)

       if(res){
        ctx.body = {
            code:'0',
            message:'下架商品成功',
            result:'',
        }
          }else{
            return ctx.app.emit('error',invalidGoodsId,ctx)
          }
        
    }

    async restore(ctx){
       const res =  await restoreGoods(ctx.params.id)
       if(res){
        ctx.body = {
            code:'0',
            message:'上架商品成功',
            result:'',
        }
          }else{
            return ctx.app.emit('error',invalidGoodsId,ctx)
          }
    }
}

module.exports = new GoodsController()