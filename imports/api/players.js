import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Players = new Mongo.Collection('players');

const Schemas = {};

Schemas.Player = new SimpleSchema({
	name: {type: String, label: "Name", max: 20},
	position: {type: String, label: "Position", max: 3},
	rosternumber: {type: Number, label: "Roster #"},
	gamerating: {type: Number, label: "Game Rating", optional: true}
});

Players.attachSchema(Schemas.Player);
