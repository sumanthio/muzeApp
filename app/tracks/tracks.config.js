class BooksConfig {
    static initRoute($stateProvider) {
        'ngInject';

        //Get the ROUTES from UI ROUTER PROPERLY....!!
        $stateProvider
            .state('tracks', {
                url: '/tracks/:page',
                //default
                templateUrl: 'app/tracks/tracks-list.html',
                controller: 'TrackController as tracks'
            })
            .state('single', {
                url: '/tracks/:page/:trackId',
                templateUrl: 'app/tracks/track.html',
                controller: 'TrackController as track'
            })

    }

}

export default BooksConfig.initRoute;