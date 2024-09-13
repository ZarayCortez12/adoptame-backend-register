import Usuario from "../model/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { correo, nombre, apellido, telefono, carts } = req.body;

    // Extraer solo los 'productId' de cada objeto en el arreglo 'carts'
    const productIds = carts.map((item) => item.productId);

    // Buscar si el usuario ya existe por correo
    let usuario = await Usuario.findOne({ correo });

    if (usuario) {
      // Si el usuario ya existe, actualiza el array de intereses_gatos
      const nuevosIntereses = [...new Set([...usuario.intereses_gatos, ...productIds])]; // Combina y elimina duplicados
      usuario.intereses_gatos = nuevosIntereses;

      await usuario.save();
      console.log("Usuario actualizado exitosamente:", usuario);
      res.status(200).json({ message: "Intereses actualizados exitosamente" });
    } else {
      // Si el usuario no existe, crea uno nuevo
      const nuevoUsuario = new Usuario({
        correo,
        nombre,
        apellido,
        telefono,
        intereses_gatos: productIds,
      });

      await nuevoUsuario.save();
      console.log("Usuario guardado exitosamente:", nuevoUsuario);
      res.status(201).json({ message: "Usuario registrado exitosamente" });
    }
  } catch (error) {
    console.error("Error al registrar o actualizar el usuario:", error);
    res.status(500).json({ message: "Error al registrar o actualizar el usuario" });
  }
};
