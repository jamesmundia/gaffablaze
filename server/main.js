import { Meteor } from 'meteor/meteor';

import '../imports/api/collections.js';

import { Teams } from '../imports/api/collections.js';
import { Players } from '../imports/api/collections.js';

Meteor.startup(() => {
  // code to run on server at startup

  //Checking if schema works
  //Players.insert ({name: "Gack Back", position: "CB"}, (error, result) => {
  //	console.log(error)
  //});
});
