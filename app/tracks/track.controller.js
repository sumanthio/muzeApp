class TrackController {
  constructor($state, $stateParams, $mdDialog, TrackService) {
    'ngInject';
    this.state = $state;
    this.pageNumber = $stateParams.page;
    this.trackId = $stateParams.trackId;
    this.mdDialog = $mdDialog;
    this.trackService = TrackService;
    this.tracksList = [
      {
        "id": 38,
        "title": "Hey Jude",
        "rating": "4.9",
        "genres": [
          {
            "id": 5,
            "name": "ramesh"
          }
        ]
      },
      {
        "id": 39,
        "title": "hello adele",
        "rating": "4.0",
        "genres": [
          {
            "id": 4,
            "name": "bollywood"
          },
          {
            "id": 8,
            "name": "metakai"
          }
        ]
      },
    ];
    this.detailedInfo = this.tracksList[1]
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
      //get track data and populate 'tracksList'
      //and figure out the pagination as well
    }, () => { })
  }

  searchTrack(key) {
    let vm = this;
    if (key.length == 0) {
      vm.getTrackList()
    }
    else {
      return vm.trackService.searchTrackData(key).then(function(response){
        return response.results;
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
        this.trackService.createNewTrack(newTrack).then(() => {
          //toast something here
          vm.state.reload();
        }, () => { });
      }, function () {
        //toast something here
      });
  }

  editTrack(track, ev) {
    let vm = this;
    vm.mdDialog.show({
      controller: ["$scope", "track", '$mdDialog', ($scope, track, $mdDialog) => {
        $scope.track = track;

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

        $scope.update = function (track) {
          $mdDialog.hide(track);
        };
      }],
      templateUrl: 'app/tracks/edit-track-dialog.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      resolve: {
        track: () => {
          return track;
        }
      },
      openFrom: {
        top: -50
      },
      closeTo: {
        left: 1500
      }
    })
      .then((updatedTrackData) => {
        this.trackService.updateTrack(updatedTrackData).then(() => {
          //toast something here
          vm.state.reload();
        }, () => { });
      }, function () {
        //toast something here
      });
  }
}

export default TrackController;