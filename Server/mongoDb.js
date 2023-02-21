const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ZILLION', {
    useNewUrlParser: true
})

const Product = mongoose.model('Product', {
    productName: String,
    productDiscription: String,
    productprice: Number,
    Discount: Number,
    GST: Number
})

const ProductVerification = mongoose.model('ProductVerification', {
    productName: String,
    productDiscription: String,
    productprice: Number,
    Discount: Number,
    GST: Number
})

const ProductApprove = mongoose.model('ProductApprove', {
    productName: String,
    productDiscription: String,
    productprice: Number,
    Discount: Number,
    GST: Number
})

const Admin=mongoose.model('Admin',{
    UserId:String,
    password:String
})

const UserAdmin=mongoose.model('UserAdmin',{
    UserId:String,
    password:String
})

module.exports = { Product, ProductVerification,Admin,UserAdmin,ProductApprove }