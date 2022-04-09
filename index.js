//Separate auth from git upload with gitignore
const {
    BOT_NAME,
    TMI_OAUTH
} = require("./auth.js");
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
    channels: [
        "SlowQueer",
        "HasanAbi",
        "AzureMako",
        "JoanAtoms",
        "ThoughtSlime",
        "MafiaJinx",
        "Keffals",
        "adi_dev",
        "hasansecurityguard",
        "grfnn",
        "dbutters"
    ]
}

//Check for arg can be used like "node index.js --scheme="rainbow" " default is trans gigachad
if (argv.scheme == new String("rainbow").valueOf()) {
        colors = ["#ff0000","#ff9c00","#eeff00","#1eff00","#00beff"]; // Rainbow
}
        else if (argv.scheme == new String("grey").valueOf()) {
                colors = ["#ffffff","#d9d9d9","#b0b0b0","#878787","#575757"]; //Greyname Pride
}
        else if (argv.scheme == new String("ukraine").valueOf()) {
                colors = ["#005BBB","#FFD500"]; //ukraine bebela
}
        else if (argv.scheme == new String("sa").valueOf()) {
                colors = ["#007749","#000000","#FFFFFF","#FFB81C","#E03C31","#001489"]; //SouthAfricanPride
}
        else if (argv.scheme == new String("kkona").valueOf()) {
                colors = ["#bf0a30","#ffffff","#002868"]; //KKona
}       else {
                colors = ["#5BCEFA","#F5A9B8","#FFFFFF","#F5A9B8","#5BCEFA"]; // Trans Pride
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
