class TrackService {

    constructor($resource) {
        'ngInject';
        this.resource = $resource;
        //Its ngResource here
        //observe the webpack's endpoint config
    }

    getTracksList() {
        return this.tracks.getList().then(function (response) {
            return response;
        });
    }

    createNewTrack(data) {
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

    updateTrack(trackData) {
        //tracks/id
        return this.tracks.getList().then(function (response) {
            return response;
        });
    }

}

export default TrackService