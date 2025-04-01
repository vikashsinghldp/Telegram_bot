
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
const express = require('express')
const app = express()
const port = 3000

//button
const mainMenu = Markup.inlineKeyboard([
    [Markup.button.callback("🛒 E-commerce Website", "ecommerce")],
    [Markup.button.callback("🔗 Blockchain Software", "blockchain")],
    [Markup.button.callback("📊 CRM Software", "crm")],
    [Markup.button.callback("📞 Contact Us", "contact")]
]);

// Welcome message with buttons
bot.start((ctx) => {
    ctx.reply("👋 *Welcome to CodeForSale!*\n\n🚀 *Get Powerful Software Solutions at the Best Prices!*\n\nClick a button below to explore our services:", 
        { parse_mode: "Markdown", ...mainMenu });
});

// Handle button clicks
bot.action("ecommerce", (ctx) => {
    ctx.reply("🛒 *E-commerce Website* – Just *₹9,999*! 🚀\nFast, secure, and SEO-optimized. Message us to get started!", { parse_mode: "Markdown" });
});

bot.action("blockchain", (ctx) => {
    ctx.reply("🔗 *Blockchain Software* – Only *₹49,999*! \nSecure and scalable solutions for Web3 projects. Contact us now!", { parse_mode: "Markdown" });
});

bot.action("crm", (ctx) => {
    ctx.reply("📊 *CRM Software* – Get it for *₹24,999*! \nManage leads, automate tasks, and grow your business. Let’s build your CRM today!", { parse_mode: "Markdown" });
});

bot.action("contact", (ctx) => {
    ctx.reply("📞 *Contact Us*\nMessage us for inquiries:\n📩 *Email:* support@codeforsale.com\n📞 *Phone:* +91 6204529785", { parse_mode: "Markdown" });
});

bot.on('text', (ctx) => {
    const userMessage = ctx.message.text.toLowerCase();

    if (userMessage.includes("ecommerce") || userMessage.includes("website")) {
        ctx.reply("🛒 *E-commerce Website* – Just *₹9,999*! 🚀\nFast, secure, and SEO-optimized. Message us to get started!", { parse_mode: "Markdown" });
    } 
    else if (userMessage.includes("blockchain")) {
        ctx.reply("🔗 *Blockchain Software* – Only *₹49,999*! \nSecure and scalable solutions for Web3 projects. Contact us now!", { parse_mode: "Markdown" });
    } 
    else if (userMessage.includes("crm")) {
        ctx.reply("📊 *CRM Software* – Get it for *₹24,999*! \nManage leads, automate tasks, and grow your business. Let’s build your CRM today!", { parse_mode: "Markdown" });
    } 
    else if (userMessage.includes("software") || userMessage.includes("services")) {
        ctx.reply("🚀 We offer various software solutions tailored to your needs!\n💻 E-commerce - ₹9,999\n🔗 Blockchain - ₹49,999\n📊 CRM - ₹24,999\nContact us for custom software solutions!", { parse_mode: "Markdown" });
    } 
    else {
        ctx.reply("👋 *Welcome to CodeForSale!*\nWe offer powerful software solutions at the best prices. Type keywords like *Type keywords like *services you offer, Industries you work with, Custom software, Training after launch,Tech stack,Project timeline* to learn more!* to learn more!", { parse_mode: "Markdown" });
    }
});
// Auto reply to any text message
bot.on('text', (ctx) => {
    const userMessage = ctx.message.text;
    
    // Define responses
    const responses = {
        "hello": "Hi , how can I help you",
        "how are you": "I'm just a bot, but I'm doing great! 😊",
        "bye": "Goodbye! Have a great day!",
        "services you offer":"Custom software, web/mobile apps, SaaS, API integration, UI/UX design, and maintenance.", "contact support": "call +91 6204529785","Industries you work with": "Healthcare, finance, e-commerce, logistics, education, and more.", "Custom software": "Yes! Built from scratch for your needs.", "Project timeline": "Basic apps: 3–6 days. Complex systems: 6+ days", "Data security": "Encryption, secure coding, audits, GDPR/HIPAA compliance.", "Tech stack": "React, Node.js, Python, .NET, AWS, Docker, AI/ML tools.", "Scalable software":"Built to scale with cloud services and modular design.", "Project management":"Agile/Scrum with Jira/Trello. Weekly updates.", "Post-launch support":"Yes! Maintenance, updates, troubleshooting packages.", "Training after launch": "Full training + docs provided."
        
    };

    // Check if a predefined response exists
    const reply = responses[userMessage.toLowerCase()] || "Type keywords like *services you offer, Industries you work with, Custom software, Training after launch,Tech stack,Project timeline* to learn more!";
    ctx.reply(reply);
});

// Start the bot
bot.launch();



// Export the Express API
module.exports = app
console.log("🤖 Bot is running...");

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
