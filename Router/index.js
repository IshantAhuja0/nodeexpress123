const express=require('express')
const stlist=require('../data')
const st=require('../controller/student')
const ste=require('../controller/employee')
const router=express.Router()

 /**
 * @swagger
 * /getdata:
 *   get:
 *     summary: get student data
 *     description: Returns a JSON response with a status code.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 */

 router.get('/getdata',(req,res)=>{
  res.send({
    status:200
  })
})


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