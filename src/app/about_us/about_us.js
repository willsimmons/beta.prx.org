angular.module('prx.aboutus', ['ui.router'])
.config(function ($stateProvider) {
  $stateProvider.state('aboutUs', {
    abstract: true,
    title: 'About Us',
  })
  .state('aboutUs.team', {
    url: 'about-us/team',
    title: 'Team',
    views: {
      '@': {
        templateUrl: 'about_us/team.html'
      }
    }
  });
});
