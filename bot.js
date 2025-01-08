const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot's token
const token = '7646684044:AAHD9Iy_N6TPQb_TEL17WN5eJYN1idWd_AQ'; // Insert your bot token here

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

console.log('Bot is running...');

// Handle the /start command
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hello! I'm your simple bot. How can I help you?");
});

// Echo any other messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Check if the message is not a command
    if (!msg.text.startsWith('/')) {
        bot.sendMessage(chatId, "You said: " + msg.text);
    }
});
