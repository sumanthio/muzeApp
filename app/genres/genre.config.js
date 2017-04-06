import sidebar from '../sidebar.html';
import GenreList from  './genre-list.html';
import Genre from  './genre.html';

class GenreConfig {
    static initRoute($stateProvider) {
        'ngInject';

        $stateProvider
        .state('genres', {
                abstract: true,
                templateUrl: sidebar,
            })
            .state('genres.list', {
                url: '/genres/:page',
                templateUrl: GenreList,
                controller: 'GenreController as genres'
            })
            .state('genres.detail', {
                url: '/genres/:page/:genreId',
                templateUrl : Genre,
                controller: 'GenreController as genre'
            })
    }
}

export default GenreConfig.initRoute;