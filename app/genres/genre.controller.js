class GenreController{
    constructor($state) {
    'ngInject';
    this.state = $state;
    this.data = [
      { "id": 1, "title": "Genre One" },
      { "id": 3, "title": "Genre Teo" }
    ];
  };
}

export default GenreController;