const fs = require('fs')

try
{
	MONKE_OS.runProcess('working_directory_process')
}
catch(error)
{
	if(error.name != "AlreadyExistsException")
	{
		console.log(error.name, error.message)
	}
}

let content = fs.readFileSync(ROOT_PATH + '/proc/working_directory')
content = content.toString()

content = JSON.parse(content)

console.log(content.content)
