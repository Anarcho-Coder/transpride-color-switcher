//Separate auth from git upload with gitignore
const {
    BOT_NAME,
    TMI_OAUTH
} = require("./auth.js");

//Pull channels from seperate file
const {CHANNELS} = require("./channels.js");

// add reference to the TMI library
const TMI = require('tmi.js');
//use yargs to pass in color schemes on run
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
// Bot Name and Password;
const TMI_OPTIONS = {
    connection: {
        reconnect: true
    },
    identity: {
        username: BOT_NAME,
        password: TMI_OAUTH
    },
    channels : CHANNELS
}

let userArg;

//Make user color scheme case insensitive

if (argv.scheme == undefined) {
        userArg = false
}
	else {
		userArg = argv.scheme.toLowerCase();
}

let pog = 0;
let consoleColor1;
let consoleColor2;
let specialMsg;

//Check for arg can be used like "node index.js --scheme="rainbow" " default is trans gigachad
if (userArg == new String("rainbow").valueOf()) {
        colors = ["#ff0000","#ff9c00","#eeff00","#1eff00","#00beff"]; // Rainbow
		consoleColor1 = "\x1b[91m%s\x1b[0m"
                consoleColor2 = "\x1b[95m%s\x1b[0m"
		specialMsg = "Gayge <3";
}
        else if (userArg == new String("grey").valueOf()) {
                colors = ["#ffffff","#d9d9d9","#b0b0b0","#878787","#575757"]; //Greyname Pride
		consoleColor1 = ("\x1b[90m%s\x1b[0m");
                consoleColor2 = ("\x1b[90m%s\x1b[0m");
		specialMsg = "I LOOOOOOOVE GREEEY NAMES!! GREEEEEEEEEY!";
}
        else if (userArg == new String("ukraine").valueOf()) {
                colors = ["#005BBB","#FFD500"]; //ukraine bebela
		consoleColor1 = ("\x1b[93m%s\x1b[0m");
                consoleColor2 = ("\x1b[94m%s\x1b[0m");
		specialMsg = "Slava Ukraini <3";
}
        else if (userArg == new String("sa").valueOf()) {
                colors = ["#007749","#000000","#FFFFFF","#FFB81C","#E03C31","#o01489"]; //SouthAfricanPride
		consoleColor1 = ("\x1b[32m%s\x1b[0m");
                consoleColor2 = ("\x1b[91m%s\x1b[0m");
                specialMsg = "Fackin lekker innit m8! <3"
}
        else if (userArg == new String("kkona").valueOf()) {
                colors = ["#bf0a30","#ffffff","#002868"]; //KKona
                consoleColor1 = ("\x1b[91m%s\x1b[0m");
		consoleColor2 = ("\x1b[94m%s\x1b[0m");
		specialMsg = "Hell yea, bruther! <3";
}
	else if (argv.scheme == new String("turkey").valueOf()) {
                colors = ["#E30A17","#FFFFFF"] //Turkish
		consoleColor1 = ("\x1b[91m%s\x1b[0m");
		consoleColor2 = ("\x1b[37m%s\x1b[0m");
		specialMsg = "Turk var mi? <3";
}
//--PLACE ANY COLORS YOU WANT HERE USING THE FORMAT BELOW--
	//else if (userArg == new String("YOUR_COLOR_SCHEME_NAME").valueOf()) {
		//colors = [YOUR_COLORS_HERE];
//}
//--MAKE SURE TO REMOVE THE FORWARD SLASHES ON THE CODE, NOT THESE COMMENTS--
        
	else {
                colors = ["#5BCEFA","#F5A9B8","#FFFFFF","#F5A9B8","#5BCEFA"]; // Trans Pride
		pog = 1;
}

if (pog == 0) {
	console.log(consoleColor1,"Using " + userArg + " color scheme...");
        console.log(consoleColor2,specialMsg);
}
	else {
		console.log("\x1b[36m%s\x1b[0m","Enjoy!!");
                console.log("\x1b[95m%s\x1b[0m","<3");
}

let current = 0;

// Connect bot to channels and get client instance
const client = new TMI.client(TMI_OPTIONS);
client.on('connected', onConnectedHandler);
client.connect().catch(err => console.log(err));

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
    console.log('Successfully Connected to', addr, ':', port);
}

client.on('message', onMessageHandler);

function timeoutMessage(target, msg, timeout, delayInterval) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        client.say(target, msg)
    }, start + delay * delayInterval);
}

function onMessageHandler(target, tags, message, self) {

    if (tags.username === BOT_NAME) {
        current++;
        if (current >= colors.length) {
            current = 0;
        }

        client.color(colors[current]);
    }
}
