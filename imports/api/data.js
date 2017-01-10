import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Teams = new Mongo.Collection('teams');
export const Players = new Mongo.Collection('players');
export const Games = new Mongo.Collection('games');

const Schemas = {};

Schemas.Team = new SimpleSchema({
  /*figure out how to attach Coach User ID to all teams created by that coach:  */
  coach: {type: String,
    autoValue: function() {
            return Meteor.userId();
            },
        autoform: {type: "hidden"} },

  teamId: {type: String,
		regEx: SimpleSchema.RegEx.Id,
    autoValue: function() {
            return Random.id();
        },
      autoform: {type: "hidden"} },
	teamname: {type: String, label: "Team Name", max: 30},
	clubname: {type: String, label: "Club Name", max: 30},
	ageyear: {type: Number, label: "Team Birth Year"},
	players: {type: Mongo.Collection.Players, optional: true}
});

Schemas.Player = new SimpleSchema({
playerId: {type: String,
		regEx: SimpleSchema.RegEx.Id,
		        autoValue: function() {
				        return Random.id();
				        },
		             autoform: {type: "hidden"} },
teamId: {type: String,
            autoform: {
              value: function() {
               return FlowRouter.getParam('teamId');
                    },
                type: 'hidden',
              }
          },
	name: {type: String, label: "Name", max: 30},
/*
return age year of team and attach it to all added players
	age: {type: Number,
        autoValue: function () {
          return this.Teams.ageyear.findOne();
        },
        autoform: {type: "hidden"}
      },
*/
	position: {type: String, label: "Position", max: 13},
	rosternumber: {type: Number, label: "Roster Number"}
});

Schemas.Game = new SimpleSchema({
  opponent: {
             type: String,
             label: "Opponent",
             max: 30
           },
  date:    {
            type: Date,
            label: "Date of Match"
            },
  location: {
             type: String,
             label: "Match Location",
             allowedValues: ['Home', 'Away', 'Neutral'],
                  autoform: {
                    afFieldInput: {
                        firstOption: 'Home'
                      }
            }
          },
  result: {
            type: String,
            label: "Result",
            allowedValues: ['Win', 'Loss', 'Draw', 'Cancelled'],
            optional: true
          },
   teamscore: {
            type: Number,
            label: "Team Score",
            optional: true
              },
    opposcore: {
            type: Number,
            label: "Opponent Score",
            optional: true
          },
    coach: {
            type: String,
              autoValue: function() {
                return Meteor.userId();
                    },
              autoform: {
                type: "hidden"
              }
            },
            /*
    teamId: {
            type: String,
              autoform: {
                value: function() {
                 return FlowRouter.getParam('teamId');
                      },
                  type: "hidden",
                    }
                  } */
});

Teams.attachSchema(Schemas.Team);
Players.attachSchema(Schemas.Player);
Games.attachSchema(Schemas.Game);
