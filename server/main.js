//SERVER CODE
import { Meteor } from 'meteor/meteor';

import '../imports/api/data.js';
// import '../client/players/players.js';

import { Teams } from '../imports/api/data.js';
import { Players } from '../imports/api/data.js';
import { Schemas } from '../imports/api/data.js';

Meteor.publish('teams', function (){
    return Teams.find();
});

//single Team subscription for performance
/*
Meteor.publish('singleTeam', function(teamId){
  check(teamId, String);
  return Teams.find({teamId: teamId});
});
*/

Meteor.publish('players', function(){
  return Players.find();
});

Meteor.startup(() => {

});
