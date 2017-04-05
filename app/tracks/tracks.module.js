import TracksConfig from './tracks.config';
import TrackController from './track.controller';
import TrackService from './track.service';
import TrackDirective from './track.directive';
let tracksModule = angular.module('muzeApp.tracks', [])

tracksModule.config(TracksConfig);
tracksModule.controller('TrackController', TrackController);

tracksModule.service('TrackService', TrackService);

tracksModule.directive('track', ()=> new TrackDirective());



export default tracksModule = tracksModule.name;