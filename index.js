Separate auth from git upload with gitignore
import {BOT_NAME,TMI_OAUTH} from "./auth";
// add reference to the TMI library
const TMI = require('tmi.js');
// Bot Name and Password;
const TMI_OPTIONS = {
	connection:{
		reconnect: true
	}, 
	identity: {
		username: BOT_NAME,
		password: TMI_OAUTH
	},
	channels: [
		"SlowQueer",
		"HasanAbi",
		"AzureMako",
		"JoanAtoms",
		"ThoughtSlime",
		"MafiaJinx",
        "Keffals"
	]
}

//let colors = ["#ff0000","#ff9c00","#eeff00","#1eff00","#00beff"]; // Rainbow
let colors = ["#5BCEFA","#F5A9B8","#FFFFFF","#F5A9B8","#5BCEFA"]; // Trans Pride
let current = 0;

// Connect bot to channels and get client instance
const client = new TMI.client(TMI_OPTIONS);
client.on('connected', onConnectedHandler);
client.connect().catch(err => console.log(err));

// Called every time the bot connects to Twtich chat
function onConnectedHandler (addr, port) {
	console.log('Successfully Connected to', addr, ':', port);
}

client.on('message', onMessageHandler);
function timeoutMessage(target, msg, timeout, delayInterval){
	clearTimeout(timeout);
	timeout = setTimeout(() => {client.say(target, msg)}, start + delay * delayInterval);
}

function onMessageHandler(target, tags, message, self){

	if(tags.username === BOT_NAME){
		current++;
		if(current >= colors.length){
			current = 0;
		}

		client.color(colors[current]);
	}
}
