class BooksConfig {
    static initRoute($stateProvider) {
        'ngInject';

        //Get the ROUTES from UI ROUTER PROPERLY....!!
        $stateProvider
            .state('tracks', {
                url: '/tracks',
                templateUrl: 'app/tracks/tracks-list.html',
                controller: 'TrackController as tracks'
            })
            .state('single', {
                url: '/tracks/:id',
                templateUrl: 'app/tracks/track.html',
                controller: 'TrackController as track'
            })

    }

}

export default BooksConfig.initRoute;