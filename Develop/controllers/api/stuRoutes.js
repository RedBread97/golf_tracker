const router = require('express').Router();
const Student = require('../../models/students');

// GET all students
router.get('/', async (req, res) => {

    try {
        const studentData = await Student.findAll({});
        // console.log(studentData);
        const plainStuData = studentData.map(stu => stu.get({plain:true}))
        res.render('homepage', { students: plainStuData })
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {
    try {
        const studentData = await Student.create({
            studentname: req.body.s_name,
            email: req.body.s_email
        });
        res.status(200).json(studentData);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;
