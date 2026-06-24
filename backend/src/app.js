const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json()); //middleware for reading raw data


const upload = multer({storage: multer.memoryStorage()}) //middleware for reading form-data(files, text)... (npm i multer)


app.post("/create-post", upload.single("image"), async (req, res) =>{
    console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.prompt
    })

    return res.status(201).json({
        message: "post created successfully",
        post
    })

    console.log(result);

})

app.get("/posts", async (req,res) =>{

    const posts = await postModel.find()

    res.status(200).json({
        message: "posts fetched Successfully",
        posts
    })
})

app.delete("/posts/:id", async (req, res) => {
    const { id } = req.params;

    await postModel.findByIdAndDelete(id);

    res.status(200).json({
        message: "Post deleted successfully"
    });
});

module.exports = app;