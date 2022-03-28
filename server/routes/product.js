const express = require('express');
const router = express.Router();
const multer  = require('multer');


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

module.exports = router;
