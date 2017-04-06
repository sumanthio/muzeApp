import sidebar from '../sidebar.html';
import TracksList from  './tracks-list.html';
import Track from  './track.html';

class TracksConfig {
    static initRoute($stateProvider) {
        'ngInject';
        //Get the ROUTES from UI ROUTER PROPERLY....!!
        $stateProvider
            .state('index', {
                abstract: true,
                templateUrl: sidebar
            })
            .state('index.tracks', {
                url: '/tracks/:page',
                templateUrl: TracksList,
                controller: 'TrackController as tracks'
            })
            .state('index.trackInfo', {
                url: '/tracks/:page/:trackId',
                templateUrl: Track,
                controller: 'TrackController as track'
            })

    }

}

export default TracksConfig.initRoute;