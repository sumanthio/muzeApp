import GenreConfig from './genre.config';
import GenreController from './genre.controller';

let genreModule = angular.module('muzeApp.genres', [])

genreModule.config(GenreConfig);
genreModule.controller('GenreController', GenreController);

export default genreModule = genreModule.name;