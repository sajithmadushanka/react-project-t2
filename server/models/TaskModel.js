mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    _title : {type : String, required : true, trim: true},
    _subTitle : {type : String, required : true, trim: true},
    _date: {type : String, required : true},
    _state: {type : Boolean, required : true},
    _owner: {type : String, required : true, trim:true},
})

module.exports = mongoose.model('task', TaskSchema);
