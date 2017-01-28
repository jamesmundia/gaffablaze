import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';

import '../teams/teams.js'

Template.singlePlayerPage.onCreated(function () {
  var self = this;
	self.autorun(function () {
		var playerId = FlowRouter.getParam('playerId');
    var teamId = FlowRouter.getParam('teamId');
		self.subscribe('singlePlayer', playerId, teamId);
  })
});

Template.addPlayer.helpers ({
  addPlayerToPlayers () {
    return Players;
  }
});

Template.teamPage.helpers ({
  addPlayerToPlayers () {
    return Players;
  }
});

Template.singlePlayerPage.helpers({
  teams: ()=> {
    var teamId = FlowRouter.getParam('teamId');
    return Teams.findOne({teamId: teamId});
      },
  players: ()=> {
    var playerId = FlowRouter.getParam('playerId');
    return Players.findOne({playerId: playerId});
      },
  games: ()=> {
    //only show games with this teamId, use for now instead of template level subs
    var teamId = FlowRouter.getParam('teamId');
    return Games.find({teamId: teamId});
      }
});

/*Template.teamPage.helpers ({
  players: () => {
    return Players.find({});
  }
});
*/
