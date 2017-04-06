class GenreConfig {
    static initRoute($stateProvider) {
        'ngInject';

        $stateProvider
        .state('genres', {
                abstract: true,
                templateUrl: 'app/sidebar.html',
            })
            .state('genres.list', {
                url: '/genres/:page',
                templateUrl: 'app/genres/genre-list.html',
                controller: 'GenreController as genres'
            })
            .state('genres.detail', {
                url: '/genres/:page/:genreId',
                templateUrl: 'app/genres/genre.html',
                controller: 'GenreController as genre'
            })
    }
}

export default GenreConfig.initRoute;