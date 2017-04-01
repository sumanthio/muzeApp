class GenreController{
    constructor($stateParams, GenreService, $mdDialog) {
    'ngInject';
    this.pageNumber = $stateParams.page;
    this.genreId = $stateParams.genreId;
    this.mdDialog = $mdDialog;
    this.genreService = GenreService;
    this.genreList = [
      { "id": 1, "name": "Genre One" },
      { "id": 3, "name": "Genre Teo" }
    ];
    this.detailedInfo = this.genreList[1];
  };

  getGenreList(){
    let vm = this;
    vm.genreService.getGenreList(vm.pageNumber).then((response) => {
      vm.genreList = response.results;
    }, () => { })
  }

 getCurrentGenre() {
    let vm = this;
    vm.genreService.getGenreData(vm.genreId).then((response) => {
      //and figure out the pagination as well
    }, () => { })
  }
  addNewGenre(ev) {
    let vm = this;
    vm.mdDialog.show({
      controller: ["$scope", '$mdDialog', ($scope, $mdDialog) => {
        $scope.genre = { name: ''};
        $scope.hide = function () {
          $mdDialog.hide();
        };

        $scope.cancel = function () {
          $mdDialog.cancel();
        };

        $scope.createGenre = function (genre) {
          $mdDialog.hide(genre);
        };
      }],
      templateUrl: 'app/genres/add-genre-dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      openFrom: {
        top: -50
      },
      closeTo: {
        left: 1500
      }
    })
      .then((newGenre) => {
        this.genreService.createNewGenre(newGenre).then(() => {
          //toast something here
          //and reload the view
        }, () => { });
      }, function () {
        //toast something here
      });
  }
  
  editGenre(genre, ev) {
    let vm = this;
    vm.mdDialog.show({
      controller: ["$scope", "genre", '$mdDialog', ($scope, genre, $mdDialog) => {
        $scope.genre = genre;
        $scope.hide = function () {
          $mdDialog.hide();
        };

        $scope.cancel = function () {
          $mdDialog.cancel();
        };

        $scope.update = function (genre) {
          $mdDialog.hide(genre);
        };
      }],
      templateUrl: 'app/genres/edit-genre-dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      resolve: {
        genre: () => {
          return genre;
        }
      },
      openFrom: {
        top: -50
      },
      closeTo: {
        left: 1500
      }
    })
      .then((updatedGenreData) => {
        this.genreService.updateGenre(updatedGenreData).then(() => {
          //toast something here
          //and reload the view
        }, () => { });
      }, function () {
        //toast something here
      });
  }


}

export default GenreController;