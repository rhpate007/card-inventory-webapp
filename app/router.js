import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('magic-the-gathering');
  this.route('pokemon');
  this.route('yugioh');
  this.route('login');
  this.route('user', function() {
    this.route('new');
  });
});

export default Router;
