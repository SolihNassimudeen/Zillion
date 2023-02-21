const express=require('express')
const app=express()
const cors=require('cors')
const product=require('./product')
const admin=require('./Admin')


app.use(cors({
    origin:'http://localhost:4200'
}))
app.use(express.json())


app.get('/productlist',(req,res)=>{
    product.productlist()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.get('/productverificationlist',(req,res)=>{
    product.productverificationlist()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/productAccess',(req,res)=>{
    product.productAccess(req.body.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.delete('/productReject/:id',(req,res)=>{
    product.productReject(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/AddAdmin',(req,res)=>{
    admin.AddAdmin(req.body.UserId,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/AddUserAdmin',(req,res)=>{
    admin.AddUserAdmin(req.body.UserId,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/Adminlogin',(req,res)=>{
    admin.Adminlogin(req.body.UserId,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/UserAdminlogin',(req,res)=>{
    admin.UserAdminlogin(req.body.UserId,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/productApproveRequestlist',(req,res)=>{
    product.productApproveRequestlist()
    .then(result=>{
        if(result){
            res.status(result.statusCode).json(result)
        }
    })
})

app.post('/productApprove',(req,res)=>{
    product.productApprove(req.body.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.delete('/productAdminreject/:id',(req,res)=>{
    product.productAdminreject(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/AddProduct',(req,res)=>{
    product.AddProduct(req.body.productName,req.body.productDiscription,req.body.productprice,req.body.Discount,req.body.GST)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.listen(3000,()=>{
    console.log("Server listening port 3000")
})
