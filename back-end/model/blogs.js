const mongoose = require("mongoose");
const BlogsSchema = mongoose.Schema({
    author: {
        type:String,
        required:true
    },
    text: {
        type:String,
        required:true,
    }
})
module.exports = new mongoose.model("Blogs", BlogsSchema);