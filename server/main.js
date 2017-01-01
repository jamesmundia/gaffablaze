import { Meteor } from 'meteor/meteor';

import '../imports/api/players.js';

import { Teams } from '../imports/api/players.js';
import { Players } from '../imports/api/players.js';
import { Schemas } from '../imports/api/players.js';

Meteor.publish('teams', function teamsPublication (){
    return Teams.find();
});

Meteor.publish('players', function playersPublication (){
  return Players.find();
});

Meteor.startup(() => {
  // code to run on server at startup

  //Checking if schema works
  //Players.insert ({name: "Gack Back", position: "CB"}, (error, result) => {
  //	console.log(error)
  //});
});
