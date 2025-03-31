const express=require('express')
const stlist=require('../data')
const st=require('../controller/student')
const ste=require('../controller/employee')
const router=express.Router()

router.get('/',st.getStudent)
router.get('/getstudent',st.getStudent)
router.post('/insertstudent',st.postStudent)
router.delete('/deletestudent',st.deleteStudent)
router.put('/updatestudent',st.updateStudent)

router.get('/getemployee',ste.getEmployee)
router.post('/insertemployee',ste.postEmployee)
router.delete('/deleteemployee',ste.deleteEmployee)
router.put('/updateemployee',ste.updateEmployee)

module.exports=router