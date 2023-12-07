const TaskModel = require("../models/TaskModel");

// save task 
const saveTask = (req, res)=>{

    if(Object.keys(req.body).length !== 0){
        tempTask = new TaskModel({
            ...req.body,
            _owner : req.userId,
            _state : false
        })
        tempTask.save().then(()=>{
            res.status(200).send('taks saved');
        }).catch((e)=>console.log("save error", e))
    }else res.send('body required')
   
}
//get task
const getTasks = (req, res)=>{
    TaskModel.find({_owner : req.userId}).then(result=>{
        if(!result) res.send('task not found')
        res.send(result);
    }).catch(()=>res.send('task retireve error'))
} 

//update
const updateTask = (req, res)=>{
    console.log(req.params._id);

    TaskModel.findByIdAndUpdate(req.params._id, req.body, {new: true}).then(result=>{
        if(!result) res.send('task not found')
        else {res.status(200).json({message : 'updated', user : result})}

    }).catch(()=>res.send('task update error'))
} 


// delete ----------------------------------------
const deleteTask = (req, res)=>{
    TaskModel.findByIdAndDelete(req.params._id).then(result=>{
        if(!result) res.send('task not found')
        res.send('deleted!');
    }).catch(()=>res.send('task delete error'))
} 
module.exports = {saveTask, getTasks, updateTask, deleteTask}