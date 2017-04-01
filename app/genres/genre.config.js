class GenreConfig {
    static initRoute($stateProvider) {
        'ngInject';

        $stateProvider
            .state('genres', {
                url: '/genres',
                templateUrl: 'app/genres/genre-list.html',
                controller: 'GenreController as genres'
            })
            .state('genre', {
                url: '/genres/:id',
                templateUrl: 'app/genres/genre.html',
                controller: 'GenreController as genre'
            })

    }

}

export default GenreConfig.initRoute;