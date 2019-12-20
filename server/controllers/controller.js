const Student = require('../models/student');
const Subject = require('../models/subject');

const usuarioCtrl = {};


// router.get('/', UsuCtrl.getSubjects);
// router.get('/allstudents', UsuCtrl.getAllStudents);
// router.post('/student', UsuCtrl.createStudent);
// router.post('/subject', UsuCtrl.createSubject);
// router.get('/', UsuCtrl.getSubjects);
// router.get('/subject/:name', UsuCtrl.getSubject);
// router.get('/student/:name', UsuCtrl.getStudent);
// router.put('/:id', UsuCtrl.añadirStudent);
// router.get('/carrera/:name',UsuCtrl.carreraStudent);
// router.get('/metercarrera/:name',UsuCtrl.anadirCarrera);

usuarioCtrl.getAllStudents =  async (req, res) => {

    const listaStudents= await Student.find();
    res.json(listaStudents);
 }

 usuarioCtrl.getSubjects =  async (req, res) => {

    const listaSubjects= await Subject.find();
    res.json(listaSubjects);
 }

 usuarioCtrl.createStudent = async (req, res) => {

    const student = new Student({

        name: req.body.name,
        adress: req.body.adress,
        phones: req.body.phones,
        studies: req.body.studies

    });
      await student.save();
    res.json({

        status: "200"
    });
};


usuarioCtrl.createSubject = async (req, res) => {

    const subject = new Subject({

        name: req.body.name,
        students: ''

    });
      await subject.save();
    res.json({

        status: "200"
    });
};


usuarioCtrl.getStudent = async(req, res)=>{
    console.log(req.params);
    try{
        const student = await Student.findOne({name: req.params.name});
       res.json(student);
    }
    catch
     {res.json({status: '404'});}
   };
   
   usuarioCtrl.getSubject = async(req, res)=>{
       console.log(req.params);
       try{
           const subject = await Subject.findOne({name: req.params.name});
          res.json(subject);
       }
       catch
        {res.json({status: '404'});}
      };

      usuarioCtrl.carreraStudent = async (req, res) => {
        try{
          const listaStudens =  await Student.find({studies: req.params.name});
            res.json(listaStudens);
        }
        catch{
            res.json({status: '404'});
        }
      };

      usuarioCtrl.deleteSubject = async (req, res) => {
        try{
            const subject = await Subject.findOneAndDelete({name: req.params.name});
            res.json({status: '200'});
          
        }
        catch{
            res.json({status: '404'});
        }
      };
    
      usuarioCtrl.anadirCarrera =  async (req, res) => {
        try{   
            console.log(req.params);
        const cambioDeLista = {
            studies: req.body.studies // liststudents + ";" + 
    
        };
        await Student.findOneAndUpdate({name: req.params.name}, {$addToSet: cambioDeLista}, {new: true});
        res.json({status: '200'});
    }
    catch{
        res.json({status: '404'});
    }
    };

    
      usuarioCtrl.añadirStudent =  async (req, res) => {
        try{
       
       
        const cambioDeLista = {
            students: req.body.name // liststudents + ";" + 
    
        };
        await Subject.findOneAndUpdate({name: req.params.name}, {$addToSet: cambioDeLista}, {new: true});
        res.json({status: '200'});
    }
    catch{
        res.json({status: '404'});
    }
    };




module.exports = usuarioCtrl; 
