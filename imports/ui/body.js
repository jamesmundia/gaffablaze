import { Template } from 'meteor/templating';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Players } from '../api/players.js';

import { Schemas } from '../api/players.js';

import './body.html';

Template.body.helpers({
 	players() {
 		return Players.find({});
 	}
});
