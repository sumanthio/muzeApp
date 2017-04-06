class TrackController {
  constructor($state, $stateParams, $mdDialog, TrackService, $mdToast) {
    'ngInject';
    this.state = $state;
    this.pageNumber = $stateParams.page;
    this.trackId = $stateParams.trackId;
    this.mdDialog = $mdDialog;
    this.mdToast = $mdToast;
    this.trackService = TrackService;
    this.tracksList = [];
    this.detailedInfo = {};
  };

  getTrackList() {
    let vm = this;
    vm.trackService.getTrackList(vm.pageNumber).then((response) => {
      vm.tracksList = response.results;
      //this has to be be empty while going towards the last page
      let maxPageNumb = Math.ceil(response.count / 20);
      vm.paginationArray = vm.pageNumber == maxPageNumb ? [] : Array.from({ length: maxPageNumb }, (v, k) => k + 1);
    }, () => { })
  }

  getCurrentTrack() {
    let vm = this;
    vm.trackService.getTrackData(vm.trackId).then((response) => {
      vm.detailedInfo = response;
    }, () => { })
  }

  searchTrack(key) {
    let vm = this;
    if (key.length == 0) {
      vm.getTrackList()
    }
    else {
      vm.trackService.searchTrackData(key).then(function (response) {
        vm.tracksList = response.results;
        let maxPageNumb = Math.ceil(response.count / 20);
        vm.paginationArray = vm.pageNumber == maxPageNumb ? [] : Array.from({ length: maxPageNumb }, (v, k) => k + 1);
      })
    }
  }


  addNewTrack(ev) {
    let vm = this;
    vm.mdDialog.show({
      controller: ["$scope", '$mdDialog', ($scope, $mdDialog) => {
        $scope.track = { title: '', rating: '', genres: [] };

        $scope.newGenre = function (genre) {
          return {
            name: genre
          };
        };
        $scope.hide = function () {
          $mdDialog.hide();
        };

        $scope.cancel = function () {
          $mdDialog.cancel();
        };

        $scope.createTrack = function (track) {
          $mdDialog.hide(track);
        };
      }],
      templateUrl: 'app/tracks/add-track-dialog.html',
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
      .then((newTrack) => {
        //passing random as we can't have all the genres at a single go
        newTrack.genres = [Math.floor(Math.random() * 800), Math.floor(Math.random() * 500)];
        this.trackService.createNewTrack(newTrack).then(() => {
          vm.mdToast.show(
            vm.mdToast.simple()
              .textContent('Track added')
              .position('top right')
              .hideDelay(1000)
          );
          vm.state.reload();
        }, () => { });
      }, function () {
        //toast something here
      });
  }

  editTrack(ev, track) {
    let vm = this;
    vm.mdDialog.show({
      locals: {
        trackData: track
      },
      controller: ["$scope", "trackData", '$mdDialog', ($scope, trackData, $mdDialog) => {
        $scope.trackData = trackData;
        console.log(trackData, "in modal;s")

        $scope.newGenre = function (genre) {
          return {
            name: genre
          };
        };

        $scope.hide = function () {
          $mdDialog.hide();
        };

        $scope.cancel = function () {
          $mdDialog.cancel();
          vm.state.reload();
        };

        $scope.update = function (track) {
          $mdDialog.hide(track);
        };
      }],
      templateUrl: 'app/tracks/edit-track-dialog.html',
      parent: angular.element(document.body),
      preserveScope: true,
      targetEvent: ev,
      clickOutsideToClose: true,
      openFrom: {
        top: -50
      },
      closeTo: {
        left: 1500
      }
    })
      .then((updatedTrackData) => {
        updatedTrackData.genres = [Math.floor(Math.random() * 800), Math.floor(Math.random() * 500)];
        this.trackService.updateTrack(updatedTrackData).then(() => {
          vm.mdToast.show(
            vm.mdToast.simple()
              .textContent('Track updated')
              .position('top right')
              .hideDelay(1000)
          );
          vm.state.reload();
        }, () => { });
      }, function () {
        //toast something here
      });
  }
}

export default TrackController;