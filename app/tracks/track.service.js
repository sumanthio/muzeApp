class TracksService {

    constructor(Restangular) {
        'ngInject';
        this.tracks = Restangular.all('tracks');
        //Its ngResource here
        //observe the webpack's endpoint config
    }

    gettracksList() {
        return this.tracks.getList().then(function (response) {
            return response;
        });
    }

    addTracks(data) {
        //tracks/id POST change
        //         {
        //     "id": 1,
        //     "title": "animals",
        //     "rating": 4.5,
        //     "genres": [
        //         1
        //     ]
        // }

        return this.tracks.getList().then(function (response) {
            return response;
        });
    }

    getTracksData(id) {
        //tracks/id
        return this.tracks.getList().then(function (response) {
            return response;
        });
    }

    updateTrackData(id) {
        //tracks/id
        return this.tracks.getList().then(function (response) {
            return response;
        });
    }

}

export default TracksService