import { Template } from 'meteor/templating';

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Teams } from '../imports/api/collections.js';
import { Players } from '../imports/api/collections.js';

import { Schemas } from '../api/collections.js';

import './body.html';

Template.body.helpers({
 	players() {
 		return Players.find({});
 	}
});
