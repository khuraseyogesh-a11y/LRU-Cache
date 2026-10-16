require("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cacheService=require("./src/services/cacheService");
const productModel=require("./src/Models/ProductSchema");
const port=8080;
const cors=require("cors");
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    credentials: true
}));

app.get("/allNodes",(req,res)=>{
    const allNodes=cacheService.allNodes();
    console.log(allNodes);
    res.status(200).json({
        data:allNodes
    })
})

app.get("/allProducts",async (req,res)=>{
    
        const products=await productModel.find({});
        
        res.status(200).json({
            data:products
        })
})

app.get("/Info",(req,res)=>{
    const cacheInfo=cacheService.getCacheInfo();
    console.log(cacheInfo);
    res.status(200).json({
        data:cacheInfo
    })

})
app.post("/getCache", async (req, res) => {
    try {
        const id = String(req.body.id).trim();

        
        const cacheUser = cacheService.getValue(id);
        //  console.log("cacheUser", cacheUser);
        if (cacheUser !== null && cacheUser !== undefined) {
            return res.status(200).json({
                value: cacheUser,
                source: "cache"
            });
        }

        
        const product = await productModel.findOne({id:id});

        if (!product) {
            return res.status(404).json({
                value: null,
                source: "database",
                message: "Product not found"
            });
        }
        let name=product.name;
        
        
        cacheService.putValue(id, name);

        // 4. Return the product from the database
        return res.status(200).json({
            value: product,
            source: "database"
        });

    } catch (err) {
        console.error("getCache error:", err);

        return res.status(500).json({
            value: null,
            source: null,
            message: err.message
        });
    }
});


app.post("/putCache",(req,res)=>{

    const id=req.body.id;
    const val=req.body.val;
     
    const cacheUser=cacheService.putValue(id,val);
   if(cacheUser){
    res.status(200).json({
        data:`Product added in the Cache`,
    })
   }else{

    res.status(404).json({
        data:"Something went Wrong!",
    })
   } 
})




app.listen(port,()=>{
    console.log("listining to port 8080");
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("db connected");
    })
});


