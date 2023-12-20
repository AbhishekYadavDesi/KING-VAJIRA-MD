const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94710903687'
global.devs = '94710903687';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Abhi 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'excel' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false :"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUNrb1k2Z1plMDZTcjNUUE0yRktoYzJSMTJVYVNka0tzaTRUUG5zdG4yaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHFhSE5iRTVOR1Vkd2FTeWdqRmIzNDVnNlhhQk1oa0ZZYTY5b3ZRdm94UT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSXpMMk1NemJIYWk5cVVtaGRGODRIZHBKZzF4MEJQY1dKc0lMQlI1QjFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJONFFlV2tibHFOU3RUQzV1Ti9YWW8rdDlCeE43QlhXR3pDUnJlRHJmZ1ZvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKYVluSHJzRUc3L3V0RFR5am4yMTVaZ2VhQ2s1di9aZDIrTFh5Qm5wRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdVN0w1Qlo2djJTd2xFeHVHNU1PbkwzNHFnRjg5R0tqcXZjbm40OXJhRlE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrWlBBTG9RRWgvTk5JNTFDNW1MMExTSFhmeXBxb25oVnkxaXVmZ3N1MHdsejRIWXVKQUZzcmZmbXViQnFxNGJzRjBEeXpESXNESkZmR1lkcURscFNoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjkzLCJhZHZTZWNyZXRLZXkiOiJ6ZGRuNGROVHF1Q3ZlTEhiTVNpQ2dDbDdDdjkzRHlyMzNoT2pmekhvdVBjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3aVdzSVh6clNkbWxuNXpiOTUzLXlBIiwicGhvbmVJZCI6ImM4ZTE0NmQ4LWNhN2EtNGJkMy05YjJhLTdjNmUxMDU3ZTMyMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSmtaQ1ZEczIyc1Z5YWx4cER3dk9xeDVBbTQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FN0dGdjVyQkY3Y1lYcDlWT2QxQW1jckVkND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xMcHh0WURFT3FGaTZ3R0dBUT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWVhtOE1mbkFRREp1R1ZhMVpwLzY5R1huaVpqbUZXakpFODA1RUtPQWdTOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSU52emRvQitnT0RXZXJGbXd5Z2hQRVBPS0VsN0NQZ2FVczJta3QxdXJOQ2ZyWENtTXJBRGI5MjhKbmRIRjdTb0xNaVRkUDhaZXUyMHZuYkNOOStRQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlNJSlFEd3h2TzluMVZaVDZXUVVrK1pibUVqbVRCM01wQ2tuRDRYVE81dmtvbkpUR25JRzBhSEhaUkVCdzAvMVd0T2VIelBlNStaV0dmcUVkcEFub2hRPT0ifSwibWUiOnsiaWQiOiIxNTcxMzIxNjIzMDo5QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE1NzEzMjE2MjMwOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0Y1dkRINXdFQXliaGxXdFdhZit2Umw1NG1ZNWhWb3lSUE5PUkNqZ0lFdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMzA2ODM5OH0=",
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  afk:  process.env.AFK ||true,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
