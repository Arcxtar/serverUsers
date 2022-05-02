const User = require("../models/User");



exports.crearUsuario = async (req, res) =>{
    try {
        let user;
        //Creando el usuario
        user = new User(req.body);
        
        await user.save();
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuarios = async (req, res) =>{
    try {

        const users = await User.find();
        res.json(users)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarUsuario = async (req, res) =>{
    try {

        const { user, nombre, apellido, tipo } = req.body;
        let usuario = await User.findById(req.params.id);  

        if(!usuario){
            res.status(404).json({msg: 'No existe ese usuario'})
        }

        usuario.user = user;
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.tipo = tipo;

        usuario = await User.findOneAndUpdate({_id: req.params.id }, usuario, {new: true})
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuario = async (req, res) =>{
    try {

        let usuario = await User.findById(req.params.id);  

        if(!usuario){
            res.status(404).json({msg: 'No existe ese usuario'})
        }

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.borrarUsuario = async (req, res) =>{
    try {

        let usuario = await User.findById(req.params.id);  

        if(!usuario){
            res.status(404).json({msg: 'No existe ese usuario'})
        }
        await User.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Producto eliminado con éxito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
