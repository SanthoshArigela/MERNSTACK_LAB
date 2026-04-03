const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => {
    console.log("MongoDB Connected");
    runCRUD(); // ✅ Call function AFTER connection
  })
  .catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

// Model
const Student = mongoose.model('Student', studentSchema);

// CRUD Operations
async function runCRUD() {
  try {
    // CREATE
    const student = new Student({
      name: "Santhosh",
      age: 20,
      course: "AIML"
    });

    await student.save();
    console.log("Data Inserted");

    // READ
    const data = await Student.find();
    console.log("All Students:", data);

    // UPDATE
    await Student.updateOne(
      { name: "Santhosh" },
      { age: 21 }
    );
    console.log("Data Updated");

    // DELETE
    await Student.deleteOne({ name: "Santhosh" });
    console.log("Data Deleted");

    // Close connection (optional but good practice)
    mongoose.connection.close();

  } catch (error) {
    console.log("Error:", error);
  }
}