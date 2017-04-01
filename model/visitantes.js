var visitanteSchema = new mongoose.Schema({
  nombre: String
});

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
var Visitante = mongoose.model('Visitante', visitanteSchema);

module.exports = Visitante;
