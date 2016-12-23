import { Meteor } from 'meteor/meteor';

import '../imports/api/players.js';

import { Players } from '../imports/api/players.js';

Meteor.startup(() => {
  // code to run on server at startup

  //Checking if schema works
  //Players.insert ({name: "Gack Back", position: "CB"}, (error, result) => {
  //	console.log(error)
  //});
});
