import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';

import '../teams/teams.js'

Meteor.subscribe('players');

Template.addPlayer.helpers ({
  addPlayerToPlayers () {
    return Players;
  }
});

/*Template.teamPage.helpers ({
  players: () => {
    return Players.find({});
  }
});
*/
