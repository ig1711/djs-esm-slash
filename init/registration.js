import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import * as commands from '../src/commands';
import envMissingErr from '../utils/env_missing_err';

if (!process.env.TOKEN) envMissingErr('TOKEN');
if (!process.env.CLIENT_ID) envMissingErr('CLIENT_ID');

const rest = new REST({ version: 10 }).setToken(process.env.TOKEN);

const commandsJson = Object.values(commands).map(command => command.data.toJSON());

await rest
  .put(
    Routes.applicationCommands(process.env.CLIENT_ID),
    { body: commandsJson }
  )
  .catch(console.log);
