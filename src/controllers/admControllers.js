const User = require('../models/user')

const login = async (req, res) => {

    try {
        const locals = {
            title: 'Admin',
            description: 'A personal blog using nodejs and mongodb to share my latest projects'
        };
        
        return res.status(200).render('admin/index', {locals, extraCSS: 'adminPage'});
    } catch (error) {
        console.log(`Erro: ${error}`);
    }

};

const searchLogin = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
};

module.exports = {
    login,
    searchLogin
};