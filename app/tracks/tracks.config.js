class BooksConfig {
    static initRoute($stateProvider) {
        'ngInject';

        //Get the ROUTES from UI ROUTER PROPERLY....!!
        $stateProvider
            .state('tracks', {
                url: '/tracks/:page',
                name: 'Tracks List',
                templateUrl: 'app/tracks/tracks-list.html',
                controller: 'TrackController as tracks'
            })
            .state('track-info', {
                url: '/tracks/:page/:trackId',
                name: 'Track Detail',
                templateUrl: 'app/tracks/track.html',
                controller: 'TrackController as track'
            })

    }

}

export default BooksConfig.initRoute;