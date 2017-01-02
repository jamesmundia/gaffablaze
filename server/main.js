import { Meteor } from 'meteor/meteor';

import '../imports/api/data.js';

import { Teams } from '../imports/api/data.js';
import { Players } from '../imports/api/data.js';
import { Schemas } from '../imports/api/data.js';

Meteor.publish('teams', function teamsPublication (){
    return Teams.find({coach: this.userId});
});

//single Team subscription for performance
Meteor.publish('singleTeam', function(id){
  check(id, String);
  return Teams.find({_id: id});
});

Meteor.publish('players', function(){
  return Players.find();
});

Meteor.startup(() => {

});
