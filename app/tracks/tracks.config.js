class TracksConfig {
    static initRoute($stateProvider) {
        'ngInject';
        //Get the ROUTES from UI ROUTER PROPERLY....!!
        $stateProvider
            .state('index', {
                abstract: true,
                templateUrl: 'app/tracks/sidebar.html',
            })
            .state('index.tracks', {
                url: '/tracks/:page',
                templateUrl: 'app/tracks/tracks-list.html',
                controller: 'TrackController as tracks'
            })
            .state('index.trackInfo', {
                url: '/tracks/:page/:trackId',
                templateUrl: 'app/tracks/track.html',
                controller: 'TrackController as track'
            })

    }

}

export default TracksConfig.initRoute;