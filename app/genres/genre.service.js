class GenreService {

    constructor($resource) {
        'ngInject';
        this.genreListResource = $resource('//104.197.128.152:8000/v1/genres');
        this.genreResource = $resource('//104.197.128.152:8000/v1/genres/:genreId');
        //observe the webpack's endpoint config
    }

    getGenreList(pageNum) {
        //Not needed for the first get
        let paginatedParam = pageNum == 1 ? {} : { page: pageNum };
        return this.genreListResource.get(paginatedParam).$promise;
    }

    createNewGenre(genreData) {
        return this.genreListResource.save({}, genreData).$promise;
    }
    
    getGenreData(id) {
        //genres/id
        return this.genreResource.get({ genreId: id }).$promise;
    }

    updateGenre(genreData) {
        //genres/id
        return this.genreResource.save({ genreId: genreData.id }, genreData).$promise;
    }

}

export default GenreService