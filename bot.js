const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot's token from BotFather
const token = '7646684044:AAHD9Iy_N6TPQb_TEL17WN5eJYN1idWd_AQ';

// Create the bot with 'polling' method
const bot = new TelegramBot(token, { polling: true });

console.log('Bot is running...');

// When the bot receives the /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hello! I am your Telegram bot. Send me a message!");
});

// When the bot receives any message (except commands like /start)
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Send back the message text that the user sent
  if (msg.text && !msg.text.startsWith('/')) {
    bot.sendMessage(chatId, "You said: " + msg.text);
  }
});
