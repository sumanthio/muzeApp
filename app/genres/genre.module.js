import GenreConfig from './genre.config';
import GenreController from './genre.controller';

import GenreService from './genre.service';

let genreModule = angular.module('muzeApp.genres', [])

genreModule.config(GenreConfig);
genreModule.controller('GenreController', GenreController);
genreModule.service('GenreService', GenreService);

export default genreModule = genreModule.name;