import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Teams = new Mongo.Collection('teams');
export const Players = new Mongo.Collection('players');

const Schemas = {};

Schemas.Team = new SimpleSchema({
  //figure out a way to define coach id (should just be userId, no? but getting errors)
  //coachId: {type: String,
    //label: "CoachId",
    //autoValue: function() {
      //      return this.userId
        //},
      //autoform: {type: "hidden"} },
	teamname: {type: String, label: "Team Name", max: 30},
	clubname: {type: String, label: "Club Name", max: 30},
	ageyear: {type: Number, label: "Team Birth Year"},
	players: {type: Mongo.Collection.Players, optional: true}
});

Schemas.Player = new SimpleSchema({
	//playerId: {type: String, label: "PlayerId", autoValue: function() {
    //        return this.userId
      //  }, autoform: {type: "hidden"} },
	// generate a player id here with random??
	//playerId: {type: String, label: "PlayerId", autovalue: }

	name: {type: String, label: "Name", max: 30},
	// return age year of team and attach it to all added players
	//ageyear: {function () {return Mongo.Collection.Team.ageyear} },

	position: {type: String, label: "Position", max: 13},
	rosternumber: {type: Number, label: "Roster Number"}
});

Teams.attachSchema(Schemas.Team);
Players.attachSchema(Schemas.Player);
