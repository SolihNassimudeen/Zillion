const mongodb = require('./mongoDb')

const AddAdmin = (UserId, password) => {
    return mongodb.Admin.findOne({ UserId })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Admin already registered'
                }
            } else {
                const newAdmin = new mongodb.Admin({
                    "UserId": UserId,
                    "password": password
                })
                newAdmin.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: "Success"
                }
            }
        })
}

const AddUserAdmin = (UserId, password) => {
    return mongodb.UserAdmin.findOne({ UserId })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'Admin already registered'
                }
            } else {
                const newAdmin = new mongodb.UserAdmin({
                    "UserId": UserId,
                    "password": password
                })
                newAdmin.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: "Success"
                }
            }
        })
}

const Adminlogin=(UserId,password)=>{
    return mongodb.Admin.findOne({UserId,password})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                message:'success'
            }
        }else{
            return{
                statusCode:400,
                status:false,
                message:'fail'
            }
        }
    })
}

const UserAdminlogin=(UserId,password)=>{
    return mongodb.UserAdmin.findOne({UserId,password})
    .then(result=>{
        if(result){
            return{
                statusCode:200,
                status:true,
                message:'success'
            }
        }else{
            return{
                statusCode:400,
                status:false,
                message:'fail'
            }
        }
    })
}

module.exports = { AddAdmin, AddUserAdmin,Adminlogin,UserAdminlogin }