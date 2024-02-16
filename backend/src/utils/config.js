const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const Uri =
      process.env.MONGO_URI || "mongodb://mongoadmin:secret@mongodb:27017/";
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
