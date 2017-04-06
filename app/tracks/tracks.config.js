class TracksConfig {
    static initRoute($stateProvider) {
        'ngInject';
        //Get the ROUTES from UI ROUTER PROPERLY....!!
        $stateProvider
            .state('index', {
                abstract: true,
                templateUrl: require('../sidebar.html'),
                controller: 'SideBarCtrl as bar'
            })
            .state('index.tracks', {
                url: '/tracks/:page',
                templateUrl: require('./tracks-list.html'),
                controller: 'TrackController as tracks'
            })
            .state('index.trackInfo', {
                url: '/tracks/:page/:trackId',
                templateUrl: require('./track.html'),
                controller: 'TrackController as track'
            })

    }

}

export default TracksConfig.initRoute;