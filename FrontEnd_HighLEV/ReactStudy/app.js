let express = require('express');
let fs = require('fs');
let path = require('path');
let multer = require('multer');

let _storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('destination : '+file);
        cb(null, './uploaded_files')
    },
    filename: function (req, file, cb) {
        console.log(file.originalname+"을 저장합니다.");
        cb(null, file.originalname);
    }
});

let upload = multer({storage : _storage});

let app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{

    fs.readFile('index.html','utf8',(err,data)=>{
        if (err) throw err;
        res.send(data);
    });

    res.end();
});

app.post('/upload',upload.single('filepond'),(req,res)=>{
    console.log(req.file);
    res.end();
});

app.listen(3000,()=>{
    console.log("go port 3000");
});






