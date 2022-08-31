import { SlashCommandBuilder, CommandInteraction } from 'discord.js';

export const userinfo = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('View user info'),

  /**
  * @param {CommandInteraction} interaction
  */
  handle: function(interaction) {
    interaction.reply({ content: `Your username is ${interaction.user.username}` });
  },
};

export const avatar = {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('View your avatar'),

  /**
  * @param {CommandInteraction} interaction
  */
  handle: function(interaction) {
    interaction.reply({ content: interaction.user.avatarURL({ size: 4096, extension: 'png' }) });
  },
};
