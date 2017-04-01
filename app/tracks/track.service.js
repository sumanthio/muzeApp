class TrackService {

    constructor($resource) {
        'ngInject';
        this.trackListResource = $resource('http://104.197.128.152:8000/v1/tracks');
        this.trackResource = $resource('/v1/tracks/:trackId');
        //observe the webpack's endpoint config
    }

    getTrackList(pageNum) {
        //Not needed for the first get
        let paginatedParam = pageNum == 1 ? {} : { page: pageNum };
        return this.trackListResource.get(paginatedParam).$promise;
    }

    searchTrackData(key) {
        //tracks/id
        return this.trackListResource.get({ title: key }).$promise;
    }

    createNewTrack(trackData) {
        return this.trackListResource.save({}, trackData).$promise;
    }
    
    getTrackData(id) {
        //tracks/id
        return this.trackResource.get({ trackId: id }).$promise;
    }

    updateTrack(trackData) {
        //tracks/id
        return this.trackResource.save({ trackId: trackData.id }, trackData).$promise;
    }

}

export default TrackService