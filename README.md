Consume and visualize Steam data from you and your friends - see who comes out on top!

### Notes:

 - Developed in 7.3.0; has not been tested in other versions.
 - If for some reason you're actually running this in a distributed environment :) then make sure indexes.conf (or its contents) are on your indexers.
   - This is IMPORTANT! You don't want your SHs lounging around with a useless index, and you want your IDXs to have the steam index, or this'll all be for naught. :(
 - To get a Steam API Key, go here (https://steamcommunity.com/dev) (or, more specifically, here: https://steamcommunity.com/dev/apikey).
   - Steam API Documentation: https://developer.valvesoftware.com/wiki/Steam_Web_API.
 - This app will accept Steam Usernames in a comma-delimited format - do not use spaces or any other delimiters in the App Setup page.
   - You can use User Persona (Xxx_cool_screenName_xxX) or Steam ID (78909876543212345).
 - After setup, change the cron schedule for the scripted input, if you want to see data right away.
   - At some point, I need to add a block in setup.xml to let you edit the cron right then and there.
 - Achievement Names are returned this way from the API; I know it's not very friendly - c'est la vie. :/
 - There's probably some way to get a "who's played the most in the last X time period" with a Time Range Picker and using earliest()/latest(), but I didn't feel like digging that hard.

### To-Do:

 - Add an "Ingestion Interval" block to setup.xml which will let the user set a cron schedule for getGamesAndAchieves.py
  - Right now, it throws Ye Olde "Cannot find item for POST" Error

### Support:

 - https://github.com/splSM/Splunk_App_for_Steam/issues
 - splunk.consultant@outlook.com
