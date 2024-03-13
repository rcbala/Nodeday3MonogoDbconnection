import mongoose from "mongoose";

const empSchema = mongoose.Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Position: String
});

const Employee = mongoose.model("Employee", empSchema);

export default Employee;
