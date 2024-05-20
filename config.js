const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94712778637" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "942778637";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_32_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICA5MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICA5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTI1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNCxcbiAgICAgICAgMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMHp5VDdTdElyMVhBUXNXTC9SNEM3dERnNVk1blhMU0ZVN29EelRjNmRBTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU2ZNSXF1X3lTQkdRWFhWS1l0TVVzQVwiLFxuICBcInBob25lSWRcIjogXCI5MzVlMmM4NC02OTc3LTQ2M2UtYTg2Yy0wOWE4NTliMzhjMzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI2LFxuICAgICAgNDgsXG4gICAgICAxODMsXG4gICAgICAxNDUsXG4gICAgICAyMzIsXG4gICAgICAzOCxcbiAgICAgIDgzLFxuICAgICAgMzEsXG4gICAgICAxODksXG4gICAgICAxNDYsXG4gICAgICA1MyxcbiAgICAgIDE4MCxcbiAgICAgIDE5LFxuICAgICAgMTIxLFxuICAgICAgNSxcbiAgICAgIDEzOSxcbiAgICAgIDU5LFxuICAgICAgNjUsXG4gICAgICAxNCxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICA0NyxcbiAgICAgIDIxMCxcbiAgICAgIDI0NixcbiAgICAgIDIzMSxcbiAgICAgIDIzNyxcbiAgICAgIDMyLFxuICAgICAgMTAwLFxuICAgICAgMTU4LFxuICAgICAgMjM1LFxuICAgICAgMTIzLFxuICAgICAgNzMsXG4gICAgICAzMyxcbiAgICAgIDYxLFxuICAgICAgMjA4LFxuICAgICAgOTksXG4gICAgICAxMzUsXG4gICAgICAyNTAsXG4gICAgICA2NixcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlIyTFBFSjJEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxMjc3ODYzNzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1SLiBDSEFUSFVSQSBESEFOVVNIS0EgLy8gQ0QhXCIsXG4gICAgXCJsaWRcIjogXCIzNDYyMDEyMTA0NzkxOjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liSjZ2UUJFTExzcXJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiLzAvZVVKSm5DVlZ3SDRFQURNb2k5dHNEWEszeWorRlZINDVoMmFCaG9nND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1TGVPaitiTGtzZFN6Z3o0VjNNeFYwdm52cVEvQllCR3JQK3ZyQUJCVnhlVVlpTlJNdktWZVFBUHNXY2U3c1BwMFNhQ01tUjVGZ1JjTnY2SGx1cEREZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4a1lVcXMyeFlLK2V5cHFXOGZqNCt5bjlCNy8yYVYwZVlMR2svU0ZqbkhwQThDUXB0U2hzeEtBTm1TamNCNkhydHRmc0tBeStLRlQ3eGFsckpTVUNDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxMjc3ODYzNzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjE3MjM0MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "MR DHANU",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "MR CHATHURA DHANUSHKA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "CHATHURA DHANUSHKA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
