# Adding commands
- Create command files inside the [`src/commands`](src/commands) directory. Check the example command [`ping.js`](src/commands/ping.js) for reference
- Make sure the export object name matches the command name in the `SlashCommandBuilder.setName()`
- You can even export multiple commands from a single file. Reference example is in [`multiple.js`](src/commands/multiple.js)
- **Then, edit the [`commands/index.js`](src/commands/index.js) file to re export everything from your created files**. Use the syntax `export * from './<filename>.js'` for each file. Replace `<filename>` with the name of the files you created.
- In the registering step, when you register the commands, only commands that are exported from this [`commands/index.js`](src/commands/index.js) file will be registered and if a previous command is not exported from there, it will be unregistered/deleted.

# Add environemnt variables for development
- Create a file named `.env` in the root of the project.
- put these variables in that file
```
TOKEN=<bot token>
CLIENT_ID=<application or bot client id>
GUILD_ID=<required if you wanna register commands for a guild>
```

# Globally register commands
```sh
npm run register

# or

yarn register
```
This will add any commands exported from the [`commands/index.js`](src/commands/index.js) file and/or remove any commands that are not exported.

# Register commands for a guild
```sh
npm run guildregister

# or

yarn guildregister
```
This will add any commands exported from the [`commands/index.js`](src/commands/index.js) file and/or remove any commands that are not exported.
The effect is only on the particular server, id of which is available as the `GUILD_ID` environment variable.

# Start the bot in development mode
```sh
npm run dev

# or

yarn dev
```
# Deploy in heroku (Method 1)
- Install the heroku cli tool: Check this page for instructions https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli
- Login to the heroku cli using your Heroku account: Use the command `heroku login` 
- Create a Heroku app or add the remote url of an existing Heroku app to the project
  - To create use this command: `heroku create <app_name>`. Replace `<app_name>` with a name of your choice.
  - Or to add the remote url of an existing app: `heroku git:remote -a <existing_heroku_app_name>`
- Add and commit your changes for files: `git add .` and `git commit -m "Commit message"`
- Push to heroku remote repository: `git push heroku main`

# Deploy in heroku (Method 2)
- Use Heroku Github integration to deploy