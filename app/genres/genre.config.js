class GenreConfig {
    static initRoute($stateProvider) {
        'ngInject';

        $stateProvider
        .state('genres', {
                abstract: true,
                templateUrl: require('../sidebar.html'),
            })
            .state('genres.list', {
                url: '/genres/:page',
                templateUrl: require('./genre-list.html'),
                controller: 'GenreController as genres'
            })
            .state('genres.detail', {
                url: '/genres/:page/:genreId',
                templateUrl : require('./genre.html'),
                controller: 'GenreController as genre'
            })
    }
}

export default GenreConfig.initRoute;