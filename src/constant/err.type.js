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
        message:'密码不匹配',
        result:'',
      },
      tokenExpiredError:{
        code:'10101',
        message:'token已过期',
        result:'',
      },
      invalidToken:{
        code:'10102',
        message:'无效的token',
        result:'',
      },
      changePasswordError:{
        code:'10007',
        message:'修改密码错误',
        result:'',
      },
      hasNotAdminPermission:{
        code:'10103',
        message:'没有管理员权限',
        result:''
      },
      fileUploadError:{
        code:'10201',
        message:'商品图片上传失败',
        result:'',
      },
      unSupportedFileType:{
        code:'10202',
        message:'不支持的文件格式',
        result:'',
      },
      goodsFormatError:{
        code:'10203',
        message:'商品参数格式错误',
        result:'',
      },
      publishGoodsError:{
        code:'10204',
        message:'发布商品失败',
        result:'',
      },
      invalidGoodsId:{
        code:'10205',
        message:'无效的商品id',
        result:''
      },
      cartFormatError:{
        code:'10301',
        message:'购物车数据格式错误',
        result:'',
      },
      addrFormatError:{
        code:'10301',
        message:'地址数据格式错误',
        result:'',
      },

}