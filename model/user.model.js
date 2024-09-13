import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      unique: true,
    },
    intereses_gatos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'gatos', // Asegúrate de que el nombre coincide con el modelo de gatos
      }
    ]
  },
  {
    timestamps: true,
    collection: "usuarios", // Especifica el nombre de la colección aquí
  }
);

const User = mongoose.model('User', userSchema);

export default User;
