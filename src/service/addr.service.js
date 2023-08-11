const Address = require('../model/addr.model')

class AddrService{
    async createAddr(addr){
       return await Address.create(addr)
    }

    async findAllAddr(user_id){
        return await Address.findAll({
            attributes:['id','consignee','address','is_default'],
            where:{user_id}
        })
    }

    async updateAddr(id,addr){
        return await Address.update(addr, { where: { id } } )
    }

    async removeAddr(id){
        console.log(id)
        return await Address.destroy({where:{ id } })
    }

    async setDefaultAddr(id,user_id){
        await Address.update(
            {is_default:0},
            {
                where:{
                    user_id,
                },
            }
        )
       return await Address.update(
            {is_default:1},
            {
                where:{
                    id,
                },
            }
        )
    }
}

module.exports = new AddrService()