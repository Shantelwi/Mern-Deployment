const PetController = require('../controllers/pets.controller');  
module.exports = (app) => {
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api', PetController.index);
    app.post('/api/pets', PetController.createPet);
    app.get('/api/pets/:id', PetController.getPet);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.adoptPet);
}