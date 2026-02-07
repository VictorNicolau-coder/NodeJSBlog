const Post = require('../models/post')

const homepage = async (req, res) => {

    try {
        const locals = {
            title: 'Personal blog',
            description: 'A personal blog using nodejs and mongodb to share my latest projects'
        };

        const perPage = 3;
        const page = req.query.page || 1;

        const data = await Post.aggregate([{ $sort: {created_at: -1}}])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();

        const count = await Post.countDocuments();
        const nextPage = parseInt(page) + 1;
        const hasNextPage = nextPage <= Math.ceil(count / perPage);
        
        return res.status(200).render('index', {
            locals, 
            data,
            current: page,
            nextPage: hasNextPage ? nextPage : null
        });
    } catch (error) {
        console.log(`Erro: ${error}`);
    }

};

const getPostByID = async (req, res) => {
    try {
        const locals = {
            title: 'Personal blog',
            description: 'A personal blog using nodejs and mongodb to share my latest projects'
        }; 
        const id = req.params.id;

        const data = await Post.findById({_id: id});
        return res.status(200).render('post', {
            locals,
            data
        });
    } catch (e) {
        console.log(`Erro: ${e}`);
    }
}

const searchByTerm = async (req, res) => {
    try {
        const locals = {
            title: 'Search',
            description: 'A personal blog using nodejs and mongodb to share my latest projects'
        };

        const term = req.body.searchTerm;
        const searchNoSpecialChar = term.replace(/[^a-zA-Z0-9 ]/g, "");

        const data = await Post.find({
            $or:[
                {title: { $regex: new RegExp(searchNoSpecialChar, 'i') }},
                {body: { $regex: new RegExp(searchNoSpecialChar, 'i') }}
            ] 
        })

        return res.status(200).render("search", {
            locals,
            data 
        });
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

const aboutPage = async (req, res) => {
    try{
        const locals = {
            title: 'About',
            description: 'A personal blog using nodejs and mongodb to share my latest projects'
        };

        return res.status(200).render('about', {locals});
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = {
    homepage,
    getPostByID,
    searchByTerm,
    aboutPage
};