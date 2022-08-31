import { Client } from 'discord.js';
import * as commands from './commands';
import envMissingErr from '../utils/env_missing_err';

if (!process.env.TOKEN) envMissingErr('TOKEN');

const client = new Client({ intents: [] });

client.once('ready', () => {
  console.log('Ready...');
});

client.on('interactionCreate', async interaction => {
  if (interaction.isCommand) {
    const command = commands[interaction.commandName];
    await command.handle(interaction);
  }
});

client.login(process.env.TOKEN);
