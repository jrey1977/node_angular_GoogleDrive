const { Schema, model } = require("mongoose");

const EtiquetaSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});

EtiquetaSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model("Etiqueta", EtiquetaSchema);
