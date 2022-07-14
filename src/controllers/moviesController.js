const { Movie, Genre } = require('../database/models')

const movieController = {
    list: async (req, res) => {
        const movies = await Movie.findAll();
        return res.render('moviesList', { movies });
    },
    new: (req, res) => {
        res.render('newestMovie', { title: 'Newest Movie' });
    },
    recommended: async (req, res) => {
        const movies = await Movie.findAll({ onder: [['rating', 'DESC']], limit: 5 });
        res.render('recommendedMovie', { movies });
    },

    add: async (req, res) => {
        const genres = await Genre.findAll();
        res.render('moviesadd', { genres });
    },
    create: async (req, res) => {
        const { title, rating, awards, releaseDate, length, genreId } = req.body;
        await Movie.create({ title, rating, awards, releaseDate, length, genreId });
        return res.redirect('/movies');

    },

    edit: async (req, res) => {
        const { id } = req.params;
        const movie = await Movie.findOne({ where: { id } });
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        const genres = await Genre.findAll();
        return res.render('moviesEdit', { movie, genres });
    },

    detail: (req, res) => {
        const { id } = req.params;
        const movie = Movie.findByPk(id);
        return res.send('moviesDetail ' + { movie });
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { title, rating, awards, releaseDate, length, genreId } = req.body;
        await Movie.update({
            title,
            rating,
            awards,
            releaseDate,
            length,
            genreId
        }, { where: { id } });
        return res.redirect('/movies');
    },
    delete: async (req, res) => {
        const { id } = req.params;
       const movie = await Movie.findBOne({ where: { id } });
       return res.render('moviesDelete', { movie });
    },
    destroy: async (req, res) => {
        const { id } = req.params;
        await Movie.destroy({ where: { id } });
        return res.redirect('/movies');
    }
};

module.exports = movieController;