const User = require('../model/user.model')

class UserService{
    async createUser(user_name,password){
        //插入数据
        // User.create({
        //     user_name:user_name ,
        //     password:password
        // })

     const res = await User.create({user_name,password}) 
    //  console.log(res)
    return res.dataValues
  }
}
module.exports = new UserService