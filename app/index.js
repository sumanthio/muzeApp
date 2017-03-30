import 'angular';
import 'angular-animate/angular-animate.js';
import 'angular-sanitize/angular-sanitize.js';
import 'restangular';

//use ngResouse
//use ngMaterial

import angularUIRouter from 'angular-ui-router';

import TracksModule from './tracks/tracks.module';
import GenresModule from './genres/genre.module';


let muzeApp = angular.module('muzeApp', [
  angularUIRouter,
  'restangular',
  'ngAnimate',
  'ngSanitize',
  TracksModule,
  GenresModule
]);

muzeApp.config(['$urlRouterProvider', '$locationProvider',($urlRouterProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/");
}]);