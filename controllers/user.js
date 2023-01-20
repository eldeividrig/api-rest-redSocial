// Acciones de prueba
const pruebaUser = (req, res) => {
    return res.status(200).send({
        message: "Mensaje enviadp desde: controllers/user.js"
    });
}

// Registro de usuarios
const register = (req, res) => {
    // Recoger datos de la peticion

    // Comprobar que me llegan bien (+ validacio)

    // Control de usuarios duplicados

    // Cifrar la contraseña

    // Guardar usuario en la Bbdd



    return res.status(200).json({
        message: "Accion de registro de usuarios"
    })
}

// Exportar acciones
module.exports = {
    pruebaUser,
    register

}