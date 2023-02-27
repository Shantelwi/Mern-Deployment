const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minLength: [3, 'Name must be more than 3 characters'],
        maxLength: [45, 'Name cannot be more than 45 characters']
    },
    type: {
        type: String,
        required: [
            true,
            "Type is required"
        ],
        minLength: [ 3, 'Type must be more than 3 characters' ],
        maxLength: [17, 'Type cannot be more than 17 characters']
    },
    description: {
        type: String,
        required: [
            true,
            "Description is required"
        ],
        minLength: [3, 'Description must be more than 3 characters'],
        maxLength: [100, 'Description cannot be more than 100 characters']
    },
    skills: {
        type: String
    }
}, {timestamps: true});
module.exports = mongoose.model('Pets', PetSchema);