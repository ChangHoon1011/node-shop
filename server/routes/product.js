const express = require('express');
const router = express.Router();
const multer  = require('multer');
const {Product} = require('../models/Product');

//=================================
//             Product
//=================================


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
var upload = multer({ storage: storage }).single("file")


router.post('/image', (req, res, next)=>{
  //res.send('업로드 성공');
  upload(req, res, function (err){
    if(err){
        return req.json({success: false, err});
    }
    return res.json({success:true, filePath:res.req.file.path, filename: res.req.filename});
  })
});

router.post('/', (req, res, next)=>{
  const product = new Product(req.body);
  product.save((err)=>{
    if(err) return res.status(400). json({success: false, err})
    return res.status(200).json({success:true})
  })


});

router.post('/products', (req, res, next)=>{
  // product collection에 들어있는 모든 상품을 가져오기
  Product.find()
   .populate("writer")
   .exec((err, productInfo)=>{
     if(err) return res.status(400).json({success: false, err})
     return res.status(200).json({success:true, productInfo})
   })
});

module.exports = router;
