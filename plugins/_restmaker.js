let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .flaming4 BOTCAHX'
  m.reply('_Proses..._')
  let res = `https://botcahx-rest-api.up.railway.app/api/photooxy/carved-wood?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `© BOTCAHX`, m, false)
}
handler.help = ['flaming7'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming7)$/i

module.exports = handler
