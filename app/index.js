import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-resource';

import 'angular-material/angular-material.css';

import angularUIRouter from 'angular-ui-router';

import toaster from 'angularjs-toaster';

import TracksModule from './tracks/tracks.module';
import GenresModule from './genres/genre.module';

import SideBarCtrl from './components/sidebar.controller';

import 'pace-progress/themes/white/pace-theme-minimal.css';
require('imports-loader?define=>false!pace-progress');
import 'font-awesome/css/font-awesome.css';
import './styles/style.css';

let muzeApp = angular.module('muzeApp', [
  angularUIRouter,
  'ngAnimate',
  'ngMaterial',
  'ngResource',
  toaster,
  TracksModule,
  GenresModule
]);

muzeApp.config(['$urlRouterProvider', '$locationProvider', '$httpProvider', ($urlRouterProvider, $locationProvider, $httpProvider) => {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/tracks/1");

  $httpProvider.interceptors.push(function ($q, $injector,) {
    return {
      'request': function (config) {
        return config;
      },

      'requestError': function (rejection) {
                return $q.reject(rejection);
      },

      'response': function (response) {
        return response;
      },

      'responseError': function (rejection) {
        if(rejection.status > 400) {
                    toaster.pop('error', "Error", "Something went wrong");
                }
        return $q.reject(rejection);
      }
    };
  });


}]);

muzeApp.controller('SideBarCtrl', SideBarCtrl);