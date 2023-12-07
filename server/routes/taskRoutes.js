const taskController = require('../controllers/taskController');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

router.post('/post',auth, taskController.saveTask); 
router.get('/getAll',auth, taskController.getTasks); 
router.patch('/update/:_id', auth, taskController.updateTask); 
router.delete('/delete/:_id',auth, taskController.deleteTask);

module.exports = router;
