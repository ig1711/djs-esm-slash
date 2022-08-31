import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import * as commands from '../src/commands';
import envMissingErr from '../utils/env_missing_err';

if (!process.env.TOKEN) envMissingErr('TOKEN');
if (!process.env.CLIENT_ID) envMissingErr('CLIENT_ID');
if (!process.env.GUILD_ID) envMissingErr('GUILD_ID');

const rest = new REST({ version: 10 }).setToken(process.env.TOKEN);

const commandsJson = Object.values(commands).map(command => command.data.toJSON());

await rest
  .put(
    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
    { body: commandsJson }
  )
  .catch(console.log);
