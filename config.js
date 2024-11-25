const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  |SUHAIL_22_33_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDgxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU1LFxuICAgICAgICA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDczLFxuICAgICAgICA5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc5LFxuICAgICAgICA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgODksXG4gICAgICAgIDExNixcbiAgICAgICAgMTI0LFxuICAgICAgICA1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODksXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0LFxuICAgICAgICA0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MixcbiAgICAgICAgMjM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3VDlFM2VDNlJNYjM0M0NYZGxwV21PZWRIM1hDWG5ia09DNXRtZVdIc1lZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAzOTI0NTc0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkI3Qjc1MjFFOEI1NUFCNkRCOTlEQjU2Q0RBQzlEQTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyNTczOTg4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImthdTVTYXQ4VERhLWpjczQ5ejJfcHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjNkNGUzYzItM2YxYS00MWVmLThlZTMtYzMyMWJmOWY4YTVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDQyLFxuICAgICAgMTY1LFxuICAgICAgMjQ4LFxuICAgICAgMTY1LFxuICAgICAgMTU4LFxuICAgICAgMTYwLFxuICAgICAgMjI2LFxuICAgICAgMTcxLFxuICAgICAgMTQzLFxuICAgICAgMjM1LFxuICAgICAgNjQsXG4gICAgICA3NyxcbiAgICAgIDE2OCxcbiAgICAgIDUsXG4gICAgICAxNTYsXG4gICAgICAyNDEsXG4gICAgICAxODgsXG4gICAgICAzMCxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICAyNTQsXG4gICAgICAyMzgsXG4gICAgICAxNTIsXG4gICAgICAxNDYsXG4gICAgICAxNjksXG4gICAgICAyMTIsXG4gICAgICA0NSxcbiAgICAgIDEyMSxcbiAgICAgIDExOSxcbiAgICAgIDIwMixcbiAgICAgIDEzMixcbiAgICAgIDE3MCxcbiAgICAgIDE2NyxcbiAgICAgIDEwNixcbiAgICAgIDE1OSxcbiAgICAgIDM3LFxuICAgICAgNjMsXG4gICAgICAyMTcsXG4gICAgICA4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1QzdYRUFFN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDM5MjQ1NzQyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYxMjIxMDE3NTIyMjYxOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwic2hvYWlibG9ob3JpXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEtMM1BJSEVKcjJrN29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWMVhNemUzMGFUdzcxbmVkNTdydEg2Q3dURkVzakRqcE1SMUovLzNSYVIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNxOUM3TVp1ZFdUenloeGY4N3ljOXVqYmUxaFhaOWk3L2RyVWJlU08yV1pqblJyc213VWZ3S29wVXVSNldFdGltMTNSOGJGVk1jbUVLVlp4RnE2ckN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImE3NEJ6SzVhYi9yYmU1a0tmczRTa1RnUGRtU0VpSjlMOGJ0SlJwUWxDMk9WOGNBbm54QWJ6VWpJalp3WXJqcm9SVnJEVVF3L1Z5RFJ0QzRyK3JVc2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAzOTI0NTc0MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI1NzM5ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIWjhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhaOC5qc29uIjogIntcImtleURhdGFcIjpcIlNRUDR6N3dCOFNRbXZ5aVIxU2FaaGtoakdVMHZtRW9CUW5yYjZvamQrT1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjExOTYzMjMwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyNTczOTg1Nzc0XCJ9Igp9 ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
