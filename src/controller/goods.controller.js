const path = require('path')

const {fileUploadError,unSupportedFileType} = require('../constant/err.type')

class GoodsController{
    async upload(ctx,next){
        // console.log(ctx.request.files.file)
        const {file} = ctx.request.files

        const fileTypes = ['image/jpg','image/png']
        // console.log(file)
        if(file){
            if(!fileTypes.includes(file.type)){
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
}

module.exports = new GoodsController