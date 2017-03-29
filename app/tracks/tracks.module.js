import TracksConfig from './tracks.config';
import TrackController from './track.controller';

let tracksModule = angular.module('tracksApp.tracks', [])

tracksModule.config(TracksConfig);
tracksModule.controller('TrackController', TrackController);

export default tracksModule = tracksModule.name;