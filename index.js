const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require('cors');
const app = express();
app.use(cors());


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// default options
app.use(fileUpload());

app.post("/upload", function(req, res) {
  //if (isEmpty(req.files)) return res.status(400).send("No files were uploaded. <a href='http://nlbavwtls22/ixs/test.html'>Back</a></div>");
   const {category='', module='', date} = req.body;
    console.log('file', req.body, req.files, category, module);
  // The name of the input field (i.e. "uploadFile") is used to retrieve the uploaded file
  let uploadFile = req.files.file;
  
  const fname = `${date}.${category}.${module}.${uploadFile.name}`;
  console.log(fname);
  // Use the mv() method to place the file somewhere on your server
  uploadFile.mv(`d://Documents/Knowledge/${fname}`, function(err) {
    if (err) return res.status(500).send(err);

    res.send(`<div>The File ${fname} was uploaded! <a href='http://nlbavwtls22/ixs/test.html'>Back</a></div>`);
    
  });
});
app.post("/uploaddocument", function(req, res) {
  //if (isEmpty(req.files)) return res.status(400).send("No files were uploaded. <a href='http://nlbavwtls22/ixs/test.html'>Back</a></div>");
  const { release=''} = req.body;
    console.log('file', req.body);
  // The name of the input field (i.e. "uploadFile") is used to retrieve the uploaded file
  let uploadFile = req.files.file;
  
  const fname = `${release}.${uploadFile.name}`;
  console.log(fname);
  // Use the mv() method to place the file somewhere on your server
  uploadFile.mv(`d://Documents/SupportCards/Knowledge/${fname}`, function(err) {
    if (err) return res.status(500).send(err);

    res.send(`<div>The File ${fname} was uploaded! <a href='http://nlbavwtls22/ixs/test.html'>Back</a></div>`);
    
  });
});
app.listen(3333, () => console.log("Listening"));
