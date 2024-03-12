const mongoose = require("mongoose");

const connectDatabase = () => {
  try {
    mongoose.connect(process.env.DB_URL, {
      
    }).then((data) => {
      console.log(`mongodb connected with server: ${data.connection.host}`);
    });
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

module.exports = connectDatabase;
