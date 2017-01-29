import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Teams } from '../../imports/api/data.js';
import { Players } from '../../imports/api/data.js';
import { Schemas } from '../../imports/api/data.js';

Template.seasonEval.helpers({
  playerEvalSchema: function () {
    return Players;
  },
  thisPlayer: function () {
    var playerId = FlowRouter.getParam('playerId');
    return Players.findOne({ playerId: playerId });
  },
});
