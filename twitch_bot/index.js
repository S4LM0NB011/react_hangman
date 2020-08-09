const tmi = require('tmi.js');

require('dotenv').config();

const prefix = "!"

const opts = {
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN
    },
    channels: [
        process.env.CHANNEL_NAME
    ]
}

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();

function onMessageHandler (target, context, msg, self) {
    if (msg.startsWith(prefix + "hangman")) {
        client.say("Wrong.")
    }
}

function onConnectedHandler(addr, port) {
    console.log("Connected to " + addr, ":" + port);
}