//rutas para user
const express = require('express');
const router = express.Router();
const userController = require('../controllers/usuarioController');
//api/usuarios
router.post('/', userController.crearUsuario);
router.get('/', userController.obtenerUsuarios);
router.put('/:id', userController.actualizarUsuario);
router.get('/:id', userController.obtenerUsuario);
router.delete('/:id', userController.borrarUsuario);


module.exports = router;