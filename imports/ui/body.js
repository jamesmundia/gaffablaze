import { Template } from 'meteor/templating';

import { Players } from '../api/players.js';

import './body.html';
 
Template.body.helpers({
 	players() {
 		return Players.find({});
 	},
});