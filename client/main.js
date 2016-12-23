import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../imports/ui/body.js';

import { Players } from '../imports/api/players.js';

import { Schemas } from '../imports/api/players.js';

Template.addPlayerForm.helpers({
	addPlayerToPlayers () {
		return Players;
	}
});