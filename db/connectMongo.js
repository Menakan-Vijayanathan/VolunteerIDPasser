import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName:"VolunteerDB"
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // Handle the error appropriately, you might want to throw it or exit the application
    process.exit(1);
  }
};

export default connectMongo;
