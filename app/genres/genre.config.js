class GenreConfig {
    static initRoute($stateProvider) {
        'ngInject';

        $stateProvider
            .state('genres', {
                url: '/genres/:page',
                templateUrl: 'app/genres/genre-list.html',
                controller: 'GenreController as genres'
            })
            .state('singleGenre', {
                url: '/genres/:page/:genreId',
                templateUrl: 'app/genres/genre.html',
                controller: 'GenreController as genre'
            })

    }

}

export default GenreConfig.initRoute;