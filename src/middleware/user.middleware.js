const {getUserInfo} = require('../service/user.service')

const {userAlreadyExisted,userFormateError}  = require('../constant/err.type')

const userValidator =async (ctx,next ) =>{

const { user_name,password} = ctx.request.body

     //合法性
     if(!user_name ||!password){
        console.error('用户名或者密码为空',ctx.request.body)
        ctx.app.emit('error',userFormateError,ctx)
        return 
    }
await next()
}

const verifyUser = async (ctx,next) =>{
    const { user_name} = ctx.request.body

    //合理性
    if(  await getUserInfo({user_name})){
        console.error('用户名已经存在',ctx.request.body)
        ctx.app.emit('error',userAlreadyExisted,ctx)
        return
        } 
        await next()
    }
   




module.exports = {
    userValidator,
    verifyUser
}