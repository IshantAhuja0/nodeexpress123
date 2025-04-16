# nodeexpress123
//file structure of our whole backend 

1. in database.js file we have connected through our database stored in mongodb which can be localhost or at mongodb atlas and then exported that connection.  URL of server -> students folder.

2. in student.js file we have impored database through which we got connetion and further conneted the collection or table like in first file we go to main folder of db . studets folder -> student collection . we also wrote function of get,post,put and delete in this file.

3. for organization of code we write url and all these funtions in index.js file an exported it.

4. finally in app.js file we imported some folders and file for proper functioning like cors and express and then we hosted or posted our server. we used that routes that are defined in student.js and organized in index.js

URL of server(connect to first folder) -> students folder -> student folder

OR 

URL of server(cluster mongodb atls) -> sample_mflix folder -> student folder