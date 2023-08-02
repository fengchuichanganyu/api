module.exports = {
    userFormateError:{
        code:'10001',
        message:'用户名或者密码为空',
        result:'',
    },
    userAlreadyExisted:{
        code:'10002',
        message:'用户名已经存在',
        result:'',
    },
    userRegisterError: {
        code: '10003',
        message: '用户注册失败',
        result: '',
      },
      userDoesNotExist:{
        code:'10004',
        message:'用户名不存在',
        result:'',
      },
      userLoginError:{
        code:'10005',
        message:'用户登陆失败',
        result:'',

      },
      invalidPassword:{
        code:'10006',
        message:'无效密码',
        result:'',
      },
      tokenExpiredError:{
        code:'10101',
        message:'token已过期',
        result:'',
      },
      invalidToken:{
        code:'10102',
        messagae:'无效的token',
        result:'',
      }

}