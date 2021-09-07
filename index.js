const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('The Project is Online')
});

app.listen(3000, () => {
  console.log('server started');
});


const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", () =>{
console.log(`${client.user.username} is Online `)
client.user.setActivity(`Brodcast Bot By ZombieX`, {type:"PLAYING"})
})

client.on("message", message =>{
if(message.content.startsWith("")) {
if(message.author.bot) return; 
const args = message.content.split(" ").slice(" ").join(" ")
if (!message.member.hasPermission('ADMINISTRATOR')) return message.delete();
if(message.channel.id !== process.env.ch ) return;
let c = 0;      message.guild.members.cache.some(member => {if (!member.user.bot) member.send(`${args}\n${member}`).then(c++).catch(err => console.log(''))});
message.delete()
const embed = new Discord.MessageEmbed()
.setTitle("Done Send Brodcast")
.setColor("BLUE")
.setThumbnail(message.author.avatarURL())
.addField("● Message", `\`\`\`${args}\`\`\``, true)
.addField("● To", `**${c}**`, true)
.setTimestamp()
.setFooter("Developer: DNA | ZombieX#0001")
message.channel.send(embed).then(m =>{
setTimeout(function(){
m.delete()
}, 8000)
})
}
})

client.login(process.env.token).catch(() =>  {
  console.log("Invalid Token")
})
