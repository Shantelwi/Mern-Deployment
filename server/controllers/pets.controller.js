const Pet = require('../models/pets.models'); 
module.exports.index = (request, response) => {
    response.json({
        message: "Adopt! Don't Shop!"
    });
}

module.exports.createPet = (request, response) => {
    const {name,type,description,skills} = request.body;
    Pet.create({
        name: name,
        type: type,
        description: description,
        skills: skills
    })
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPets = (request, response) => {
    Pet.find({})
    .then(pets => {
        console.log(pets);
        response.json(pets);
    })
    .catch(err => {
        console.log(err)
        response.json(err)
    })
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id: request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.json(err));
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id},request.body, {new: true, runValidators: true})
        .then(updatePet  => response.json(updatePet))
        .catch(err => response.status(err));
}

module.exports.adoptPet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}