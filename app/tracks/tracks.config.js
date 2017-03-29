class BooksConfig {
    static initRoute($stateProvider) {
        'ngInject';

        //Get the ROUTES from UI ROUTER PROPERLY....!!
        $stateProvider
            .state('tracks', {
                url: '/tracks',
                templateUrl: 'app/tracks/track-list.html',
                controller: 'TrackController as tracks'
            })
            .state('tracks.single', {
                url: '/:id',
                templateUrl: 'app/tracks/track.html',
                controller: 'TrackController as track'
            })

    }

}

export default BooksConfig.initRoute;