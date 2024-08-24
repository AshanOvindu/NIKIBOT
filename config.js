const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~KJ8yWS4R#5aR0m-aJ9xv_-niq79DdEawN82cnF9jgshedgzP6IiM"
MONGODB: process.env.MONGODB || "mongodb+srv://vihangadesilva0527:niki0220@cluster0.gkwuvqk.mongodb.net/",
};
