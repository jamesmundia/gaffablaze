import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Teams = new Mongo.Collection('teams');
export const Players = new Mongo.Collection('players');
export const Games = new Mongo.Collection('games');

const Schemas = {};

SimpleSchema.debug = true;

Schemas.Team = new SimpleSchema({
/*
figure out how to attach Coach User ID to all teams created by that coach:  */
  coach: {
    type: String,
    autoValue: function () {
      return Meteor.userId();
    },
        autoform: {
          type: "hidden"
        }
        },
  teamId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function() {
      return Random.id();
        },
    denyUpdate: true,
    autoform: {
        type: 'hidden'
       }
     },
	teamname: {type: String, label: "Team Name", max: 30},
	clubname: {type: String, label: "Club Name", max: 30},
	ageyear: {type: Number, label: "Team Birth Year"},
	players: {type: Mongo.Collection.Players, optional: true}
});

/*
Schemas.IndyEval = new SimpleSchema({
  gameId: { type: String,
            denyUpdate: true,
            label: "Game ID",
            autoValue: {
                value: function () {
                  var id = FlowRouter.getParam('_id');
                  return Games.findOne({ _id: id });
                }
            }
          },
  indybuildup: {type: Number,
                label: "Build Up Rating",
                optional: true,
                min: 1,
                max: 5
              },
  indydrbuildup: {type: Number,
                label: "Disrupting the Buildup Rating",
                optional: true,
                min: 1,
                max: 5
              },
indyatrans: {type: Number,
              label: "Attacking Transition Rating",
              optional: true,
              min: 1,
              max: 5
            },
indydtrans: {type: Number,
              optional: true,
              label: "Defensive Transitioning Rating",
              min: 1,
              max: 5
            },
indyfinscoreoppos: {type: Number,
              optional: true,
              label: "Finishing Scoring Opportunities Rating",
              min: 1,
              max: 5
            },
indystopscoreoppos: {type: Number,
              optional: true,
              label: "Stopping Scoring Opportunities Rating",
              min: 1,
              max: 5
            },
indygamenotes: { type: String,
              optional: true,
              label: "Individual Game Notes",
              min: 10,
              max: 500
                }
});
*/

Schemas.Player = new SimpleSchema({
  playerId: {type: String,
    regEx: SimpleSchema.RegEx.Id,
		        autoValue: function() {
				        return Random.id();
				        },
		             autoform: { type: "hidden"
             },
             denyUpdate: true,
},
teamId: { type: String,
            autoform: {
              value: function() {
               return FlowRouter.getParam('teamId');
                    },
                type: 'hidden'
            },
  denyUpdate: true,
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
	position: { type: String, label: 'Position', max: 13 },
	rosternumber: { type: Number, label: 'Roster Number' },
  //indyevals: { type: ['IndyEval'] }
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
                    type: 'select'
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
    teamId: { type: String,
                autoform: {
                  value: function() {
                   return FlowRouter.getParam('teamId');
                        },
                    type: 'hidden',
                  },
denyUpdate: true,
                      },
  buildup: { type: Number,
              label: "Buildup Rating",
              min: 1,
              max: 5,
              optional: true
  },
  drbuildup: { type: Number,
              label: "Disrupting the Buildup Rating",
              min: 1,
              max: 5,
              optional: true
  },
  atrans: { type: Number,
              label: "Attacking Transition Rating",
              min: 1,
              max: 5,
              optional: true
  },
  dtrans: { type: Number,
              label: "Defensive Transition Rating",
              min: 1,
              max: 5,
              optional: true
  },
  finscoreopps: { type: Number,
              label: "Finishing Scoring Opportunities Rating",
              min: 1,
              max: 5,
              optional: true
  },
  stopscoreopps: { type: Number,
              label: "Stopping Scoring Opportunities Rating",
              min: 1,
              max: 5,
              optional: true
  },
  gamenotes: {type: [String],
              label: "Game Notes",
              optional: true
            }
});

Teams.attachSchema(Schemas.Team);
Players.attachSchema(Schemas.Player);
//Players.attachSchema(Schemas.IndyEval);
Games.attachSchema(Schemas.Game);
