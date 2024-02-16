const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    // Note: This is not the best practice. Since there is sensitive information in the URI, I just put it here for the sake of the project.
    const Uri =
      process.env.MONGO_URI || "mongodb://mongoadmin:secret@mongodb:27017";
    const conn = await mongoose.connect(Uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
