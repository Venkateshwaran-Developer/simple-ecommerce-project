const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');


exports.postOrders=async(req,res,next)=>{

   
    const cartItem = req.body;
    const price = Number(cartItem.reduce((acc,item)=>(acc+item.product.price*item.quantity),0)).toFixed(2);
    const status = 'pending';
    const order = await orderModel.create({cartItem,price,status});

    cartItem.forEach(async(item) => {
        const product = await productModel.findById(item.product._id);
        product.stock = product.stock -item.qty;
        await product.save();
        
    });
    res.json(
        {
            success:true,
            order
        }
    )
}