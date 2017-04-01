import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-resource';

import 'angular-material/angular-material.css';

import angularUIRouter from 'angular-ui-router';

import TracksModule from './tracks/tracks.module';
import GenresModule from './genres/genre.module';

import 'pace-progress/themes/white/pace-theme-minimal.css';
require('imports-loader?define=>false!pace-progress');

import './styles/style.css';

let muzeApp = angular.module('muzeApp', [
  angularUIRouter,
  'ngAnimate',
  'ngMaterial',
  'ngResource',
  TracksModule,
  GenresModule
]);

muzeApp.config(['$urlRouterProvider', '$locationProvider',($urlRouterProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/");
}]);