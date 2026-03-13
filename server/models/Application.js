const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({

jobId:{
type: mongoose.Schema.Types.ObjectId,
ref:"Job"
},

name:String,
email:String,
resume:String,

status:{
type:String,
default:"Applied"
}

});

module.exports = mongoose.model("Application",ApplicationSchema);