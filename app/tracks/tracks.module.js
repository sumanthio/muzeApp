import TracksConfig from './tracks.config';
import TrackController from './track.controller';
import TrackService from './track.service';

let tracksModule = angular.module('muzeApp.tracks', [])

tracksModule.config(TracksConfig);
tracksModule.controller('TrackController', TrackController);

tracksModule.service('TrackService', TrackService);

export default tracksModule = tracksModule.name;