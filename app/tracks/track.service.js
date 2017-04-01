class TrackService {

    constructor($resource) {
        'ngInject';
        this.trackListResource = $resource('/v1/tracks');
        this.trackResource = $resource('/v1/tracks/:trackId');
        //observe the webpack's endpoint config
    }

    getTrackList(pageNum) {
        //Not needed for the first get
        let paginatedParam = pageNum == 1 ? {} : { page: pageNum };
        return this.trackListResource.get(paginatedParam).$promise;
    }

    getTrackData(id) {
        //tracks/id
        return this.trackResource.get({trackId:id}).$promise;
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


    updateTrack(trackData) {
        //tracks/id
        return this.tracks.getList().then(function (response) {
            return response;
        });
    }

}

export default TrackService