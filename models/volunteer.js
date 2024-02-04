// Importing the required module
import {model, models, Schema} from 'mongoose';
import {ObjectId} from 'mongodb';

// Creating a new Mongoose schema for the Volunteers collection
const volunteerSchema = new Schema({
  _id: {
    type: ObjectId
  },
  // The name of the volunteer
  name: {
    type: String,
    required: true,
  },
  // NIC no of volunteer
  nic: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

// Creating a model named "Volunteer" from the "volunteerSchema"
const Volunteer = models.Volunteer || model('Volunteer', volunteerSchema);
Volunteer.schema.set('collection', 'volunteers'); //Here's where the collection name is set!

// Exporting the "Volunteer" model to be used in other parts of the application
export default Volunteer;