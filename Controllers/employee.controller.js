import Employee from "../Models/employee.schema.js";
// import Node from "../Models/notesModels.js";
// import multer from "multer";
// import path from "path";
// import fs from "fs"

export const createEmployee = async (req,res) => {
    try {

        const employee = new Employee (req.body)
        await employee.save()
        res.status(200).json(employee)
        
    } catch (error) {
        res.status(500).json({ error: "create employee failed" });
    }
}

export const getAllEmployee = async (req, res) => {
    try {
        const employee = await Employee.find()
        res.status(200).json(employee)

    } catch (error) {
        res.status(500).json({ error: "can not get employee" });
        
  }
}

export const getEmployeeById = async (req, res) => {
    try {
        const empId = req.params.id
        const employee = await Employee.findById(empId)
      res.status(200).json(employee)
        

    } catch (error) {
           
        res.status(500).json({ error: "Employee not found" });

  }
}

export const updateEmployeeById = async (req, res) => {
    try {
        const empId = req.params.id
  
        const { FirstName, Lastname, Email, Position } = req.body

        const result = await Employee.updateOne({ _id: empId }, { FirstName, Lastname, Email, Position })
        console.log(result);
        if (result.matchedcount === 0) {
           return res.status(400).json({ error: "employee id not found" })
        }
        const updateEmp = await Employee.findById(empId)
        res.status(200).json({message:"Update Sucess fully",updateEmp})
         
    } catch (error) {

        res.status(500).json({ error: "Employee not found" });
        
  }
}

export const deleteEmployeeById = async (req, res) => {
    try {
        const empId = req.params.id
        
        const result = await Employee.deleteOne({ _id: empId })
        if (!result.deletedcount === 0) {
            return res.status(404).json({error:"employee id not found"})
        }
         res.status(200).json({message:"employee deleted sucessfully"})
    } catch (error) {

     res.status(500).json({ error: " Error in deleted " });     
    }
    
}   

// const uploadFolder = './uploads';
// if (!fs.existsSync(uploadFolder)) {
//   fs.mkdirSync(uploadFolder);
// }

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "-" + path.extname(file.originalname)
//     );
//   },
// });


// const upload = multer({ storage: storage });

// export const createNode = (upload.single("file"),(req, res) => {
  
//     console.log(req.file);

//    try {
//      const newPost = new Node({
//       //  title: req.body.title,
//       //  description: req.body.description,
//        image: req.file,
//      });
//      newPost.save();
//      res.status(201).json(newPost);
//    } catch (error) {
//      console.error(error);
//      res.status(500).json({ error: "Server error" });
//    }
//  });


// const imageConfig = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null,"/uploads")
//   },
//   filename: (req, file, callback) => {
//      callback(null,`image-${Date.now()}.${file.originalname}`)
//    }
// })

// const upload = multer({
//   storage:imageConfig
// })

// export const createNode = (upload.single("photo"), (req, res) => {
//   const { filename } = req.file;

//   const userData = new users({
//       image:filename,
//   })
//   userData.save();
//   res.status(201).json(newPost);
// })