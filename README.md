# Node TS Sample App
Copy the .env.sample to .env

## Environment variables that should be defined before start
* `PORT` -> port on which to run APIs (should be same as exposed in container)
* `DB_HOST` -> database host
* `DB_DATABASE` -> database name
* `DB_USERNAME` -> database username
* `DB_PASSWORD` -> database password
* `SERVER_URL`  -> server url

## Database migration steps
* `cd /project-root;`
* `npx sequelize-cli db:migrate;`

## Commands for Backend to run node.js on local and on production
For developer mode use following commands
* `npm install`
* `npm start`
