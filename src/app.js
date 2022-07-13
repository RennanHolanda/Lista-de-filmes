const express = require('express');
const path = require('path');


const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

const { Movie } = require('./database/models');

async function getMovies() {
  const movies = await Movie.findAll();
  console.log(movies);
}
getMovies();

app.listen('3000', () => console.log('Servidor rodando na porta 3000'));
