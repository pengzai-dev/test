const express = require("express")
const app = express()
const formidable = require("formidable")
const path = require("path")
var multer  = require('multer')
var upload = multer({ dest: 'public/upload/' })
console.log(path.join(__dirname,"public/upload/images"));
app.post("/upload",(request,response) => {
	const form = formidable({
       multiples: true,
       uploadDir: path.join(__dirname,"public/upload/images"),
       keepExtensions: true
   })
   form.parse(request, (err, fields, files) => {
       let res = fields
       // 说明上传了图片
       
    //    if(Object.keys(files).length > 0) {
        
    //        const basename = path.basename(files.path)
    //        console.log(basename);
    //        const originUrl = request.headers.host
    //        const file_url = `${originUrl}/upload/images/${basename}`
    //        const fileObj = {
    //            avatar_url:file_url
    //        }
    //        res = {...res, ...fileObj}
    //    }
       response.send(res)
   })
})
app.use(express.static(path.join(__dirname,"public")))
app.listen(4700,() => {
	console.log("http://localhost:4700/upload/ 服务启动")
})