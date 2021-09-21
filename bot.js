if(require('./config.json').token == 'Enter your token'){
  console.log('Put your token in ./config.json to run the bot properly!')

}else{
  try {
    
const client = new (require("discord.js")).Client();
client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity('perdon alexa 😔 ')
}).on("message", async message => {

  if (message.content !== undefined && message.author.bot === false) {
    if (message.content.split(' ').includes('alexa') && message.content.split(' ').includes('perdon')){
      await message.reply('Perdón alexa :pensive:')
    }
  };
}).login(require("./config.json").token)




  } catch (error) {
    console.log(`Bot error: ${error}`)
  }
}
