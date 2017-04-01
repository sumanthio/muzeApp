class TrackController {
  constructor($state, $stateParams, $mdDialog, TrackService) {
    'ngInject';
    this.state = $state;
    this.pageNumber = $stateParams.page;
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
    //get track data and populate 'tracksList'
  }

  editTrack(track, ev) {
    let vm = this;
    vm.mdDialog.show({
      controller: ["$scope", "track", '$mdDialog', ($scope, track, $mdDialog) => {
        $scope.track = track;
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
      templateUrl: require('./edit-track-dialog.html'),
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
        this.trackService.updateTrack(updateTrackData).then(() => {
          //toast something here
          //and reload the view
         }, () => { });
      }, function () {
        //toast something here
      });
  }
}

export default TrackController;