// Importing the package
const mongoose = require("mongoose");

// Creating a function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1); // Exit the process if connection fails
  }
};

// Exporting the function
module.exports = connectDB;
