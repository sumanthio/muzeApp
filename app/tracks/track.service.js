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
        return this.trackResource.get({ trackId: id }).$promise;
    }

    createNewTrack(trackData) {
        return this.trackListResource.save({}, trackData).$promise;
    }


    updateTrack(trackData) {
        //tracks/id
        return this.trackResource.save({trackId:trackData.id}, trackData).$promise;
    }

}

export default TrackService