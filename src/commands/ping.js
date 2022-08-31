import { SlashCommandBuilder, CommandInteraction } from 'discord.js';

export const ping = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping!'),

  /**
  * @param {CommandInteraction} interaction
  */
  handle: function(interaction) {
    interaction.reply({ content: 'Pong!' });
  },
};
