'use strict';

/**
 * @ngdoc function
 * @name Teem.service:logo
 * @description
 * # logo service
 * It provides several logo common functions to be used by several controllers
 */

angular.module('Teem')
  .factory('Logo', [
    '$location',
    function($location) {

    const LogoTypes = ['aubergine', 'blue', 'teal', 'yellow'];

    class Logo {
      defaultLogo () {
        var type = this.id.slice(-1).charCodeAt(0) % LogoTypes.length;

        return '/images/' + this.type + '_' + LogoTypes[type] + '.svg';
      }

      defaultLogoUrl () {
        // using location.host instead of $location.host because
        // it gives port information when needed

        return $location.protocol() + '://' +  location.host  + this.defaultLogo();
      }

      logo () {
        return this.image && this.image.url || this.defaultLogo();
      }

      logoUrl () {
        return this.image && this.image.url || this.defaultLogoUrl();
      }
    }

    return Logo;
  }]);
