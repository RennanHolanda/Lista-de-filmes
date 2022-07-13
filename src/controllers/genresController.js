const genresController = {
    list: (req, res) => {
        res.render('genresList', {  title: 'Genres' });
    },
    detail: (req, res) => {
        res.send('genresDetail ' + req.params.id);
    }


};

module.exports = genresController;