const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="sri lanka.colombo"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94771946691" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94771286812";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_21_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDc5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDYzLFxuICAgICAgICAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxLFxuICAgICAgICAxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU2Y5aEVXTTRnTU8veGFuajF1Q29WMFVjQmZEVW9NcGo0UmNBZENRSGN6MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3MTI4NjgxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDdGNzQ0NDY0QjkxNTE0Q0NDOEVENkE1QjAwNTkwMDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODk0ODY5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImo2dUhFakZxU2dldFlJd2RDVFpTV1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjM3NmY1NTYtNDVjNy00OWYxLThlZGUtY2UwMzNiYjgyNzk2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDI4LFxuICAgICAgMTI3LFxuICAgICAgMTA3LFxuICAgICAgMjUxLFxuICAgICAgMTM1LFxuICAgICAgNDMsXG4gICAgICAyNDEsXG4gICAgICA5OSxcbiAgICAgIDQ2LFxuICAgICAgNTEsXG4gICAgICA0LFxuICAgICAgMjE4LFxuICAgICAgMjQxLFxuICAgICAgNDEsXG4gICAgICA5MSxcbiAgICAgIDEzNyxcbiAgICAgIDg5LFxuICAgICAgMTI1LFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDEyOCxcbiAgICAgIDk4LFxuICAgICAgMTM1LFxuICAgICAgMjExLFxuICAgICAgNjAsXG4gICAgICAxNzEsXG4gICAgICA2LFxuICAgICAgMjQsXG4gICAgICAxMjUsXG4gICAgICAxMzksXG4gICAgICAxNzgsXG4gICAgICAxODIsXG4gICAgICA0MyxcbiAgICAgIDI0OSxcbiAgICAgIDIwMCxcbiAgICAgIDE2OCxcbiAgICAgIDEyMyxcbiAgICAgIDExMSxcbiAgICAgIDgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxLUzdXNEFIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3MTI4NjgxMjoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1NDY4NjA4OTcwOTk0OjIzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlByYWJoYXRoIERoYXJtYXNlbmFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdkY3YXNHRUl1THk3UUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNMYnJrdnlJV1ZETlJ6OHJrZ3BiWGhmdGNhbDgvYkhEdktoMWZVQ1hhR0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiam1ZODdhVGdHSlE1bUNOSGpGZTdkSEM3Y2hvTHdyMGh0Vk1xcEw4ZllTK0NxNERQNFh5ODhJbzJNdk9OMVRmRUJhM1RDQ0JzUGpxYkF3Zk1rT3Z5Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSWo0OE13ZVY2cFBNM3QyMnBoa29WSnFtc1A0S3NKSHNyVXpnQ3lEWVhtSVhLcnROVVZ5N21yUzBzZ2Q4MkpLMy93TG1abnh0QURwNGJRTHJBU0I1alE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzEyODY4MTI6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4OTQ4NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNMHJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU0wci5qc29uIjogIntcImtleURhdGFcIjpcIldMb3pxam04MlhObHFDT0d6aGpvU2VyYnlmNlNJakkvelFnRmJCL05Ec0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcwMjU4NTAxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "vinuwa MD",
  ownername:process.env.OWNER_NAME|| "Vinuwa Lk",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
