import { Meteor } from 'meteor/meteor';

import { Games } from '../imports/api/data';
import { Players } from '../imports/api/data';
import { Teams } from '../imports/api/data';
import { Sessions } from '../imports/api/data';
import { IndyGameEvals } from '../imports/api/data';
import { Schemas } from '../imports/api/data';

import { check } from 'meteor/check';

Meteor.methods({
  submitGame(addGame) {
    if (!this.userId) {
      throw new Meteor.Error('500', 'Must be logged in to add new games.');
    }
    Games.insert(addGame);
  },
  submitPlayer(addPlayer) {
    if (!this.userId) {
      throw new Meteor.Error('500', 'Must be logged in to add new players.');
    }
    // console.log('Player added');
    Players.insert(addPlayer);
  },
  submitTeam(addTeam) {
    if (!this.userId) {
      throw new Meteor.Error('500', 'Must be logged in to add new teams.');
    }
    Teams.insert(addTeam);
  },
  addSessionMethod(addSession) {
    if (!this.userId) {
      throw new Meteor.Error('500', 'Must be logged in to add new sessions.');
    }
    Sessions.insert(addSession);
  },
  updateGameMethod: function (modifier, _id) {
     check (modifier, Schemas.Game);
    if (!this.userId) {
      throw new Meteor.Error('500', 'Must be logged in to evaluate games.');
    }

    Games.update(_id, modifier);
  },
  submitPlayerNoteMethod(modifier, _id) {
    check (modifier, Schemas.playerNotesSchema);
    if(!this.userId) {
      throw new Meteor.Error('500', 'Must be logged in to evaluate players.');
    }
    Players.update(_id, modifier);
  }
});
