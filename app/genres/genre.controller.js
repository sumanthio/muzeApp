class GenreController {
  constructor($state, $stateParams, GenreService, $mdDialog, $mdToast) {
    'ngInject';
    this.state = $state;
    this.pageNumber = $stateParams.page;
    this.genreId = $stateParams.genreId;
    this.mdDialog = $mdDialog;
    this.mdToast = $mdToast;
    this.genreService = GenreService;
    this.genreList = [];
    this.detailedInfo = {};
  };

  getGenreList() {
    let vm = this;
    vm.genreService.getGenreList(vm.pageNumber).then((response) => {
      vm.genreList = response.results;
      //this has to be be empty while going towards the last page
      let maxPageNumb = Math.ceil(response.count / 20);
      vm.paginationArray = vm.pageNumber == maxPageNumb ? [] : Array.from({ length: maxPageNumb }, (v, k) => k + 1);
    }, () => { })
  }

  getCurrentGenre() {
    let vm = this;
    vm.genreService.getGenreData(vm.genreId).then((response) => {
      vm.detailedInfo = response;
    }, () => { })
  }

  addNewGenre(ev) {
    let vm = this;
    vm.mdDialog.show({
      controller: ["$scope", '$mdDialog', ($scope, $mdDialog) => {
        $scope.genre = { name: '' };
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
          vm.mdToast.show(
            vm.mdToast.simple()
              .textContent('Genre created')
              .position('top right')
              .hideDelay(1000)
          );
          vm.state.reload();
        }, () => { });
      }, function () {
        //toast something here
      });
  }

  editGenre(genre, ev) {
    let vm = this;
    vm.mdDialog.show({
      controller: ["scope", "genreObject", '$mdDialog', (scope, genreObject, $mdDialog) => {
        scope.genre = genreObject;
        scope.hide = function () {
          $mdDialog.hide();
        };

        scope.cancel = function () {
          $mdDialog.cancel();
        };

        scope.update = function (genre) {
          $mdDialog.hide(genre);
        };
      }],
      templateUrl: 'app/genres/edit-genre-dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      scope: 'isolate',
      clickOutsideToClose: true,
      resolve: {
        genreObject: () => {
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
          vm.mdToast.show(
            vm.mdToast.simple()
              .textContent('Genre updated')
              .position('top right')
              .hideDelay(1000)
          );
          vm.state.reload();
        }, () => { });
      }, function () {
         vm.mdToast.show(
            vm.mdToast.simple()
              .textContent('Something wrong')
              .position('bottom right')
              .hideDelay(1000)
          );
      });
  }


}

export default GenreController;