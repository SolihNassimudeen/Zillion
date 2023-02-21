const mongodb = require('./mongoDb')

const productlist = () => {
    return mongodb.Product.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    productlist: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: false
                }
            }
        })
}

const productverificationlist = () => {
    return mongodb.ProductVerification.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    productverificationlist: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: false
                }
            }
        })
}

const productApproveRequestlist = () => {
    return mongodb.ProductApprove.find({})
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true,
                    productApproveRequestlist: result
                }
            } else {
                return {
                    statusCode: 400,
                    status: false
                }
            }
        })
}

const productAccess = (id) => {
    return mongodb.ProductVerification.findOne({ "_id": id })
        .then(result => {
            if (result) {
                const newProduct = new mongodb.Product({
                    "productName": result.productName,
                    "productDiscription": result.productDiscription,
                    "productprice": result.productprice,
                    "Discount": result.Discount,
                    "GST": result.GST
                })
                newProduct.save()
                return mongodb.ProductVerification.deleteOne({ "_id": id })
                    .then(result => {
                        return {
                            statusCode: 200,
                            status: true,
                        }
                    })
            }
        })
}

const productReject = (id) => {
    return mongodb.ProductVerification.deleteOne({ "_id": id })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true
                }
            }
        })
}

const productApprove = (id) => {
    return mongodb.ProductApprove.findOne({ "_id": id })
        .then(result => {
            if (result) {
                const newProduct = new mongodb.ProductVerification({
                    "productName": result.productName,
                    "productDiscription": result.productDiscription,
                    "productprice": result.productprice,
                    "Discount": result.Discount,
                    "GST": result.GST
                })
                newProduct.save()
                return mongodb.ProductApprove.deleteOne({ "_id": id })
                    .then(result => {
                        return {
                            statusCode: 200,
                            status: true,
                            message: 'success'
                        }
                    })
            }
        })
}

const productAdminreject = (id) => {
    return mongodb.ProductApprove.deleteOne({ "_id": id })
        .then(result => {
            if (result) {
                return {
                    statusCode: 200,
                    status: true
                }
            }
        })
}

const AddProduct = (productName, productDiscription, productprice, Discount, GST) => {
    return mongodb.ProductApprove.findOne({ productName })
        .then(result => {
            if (result) {
                return {
                    statusCode: 400,
                    status: false,
                    message: 'product already added'
                }
            } else {
                const newProduct = new mongodb.ProductApprove({
                    "productName": productName,
                    "productDiscription": productDiscription,
                    "productprice": productprice,
                    "Discount": Discount,
                    "GST": GST
                })
                newProduct.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: 'Product Send Approval request'
                }
            }
        })
}

module.exports = { productlist, productverificationlist, productAccess, productReject, productApproveRequestlist, productApprove, productAdminreject, AddProduct }