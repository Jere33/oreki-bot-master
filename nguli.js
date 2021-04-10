let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, 'Selamat Anda Mendapatkan\n2000 XP!', m)
    conn.reply(m.chat, 'Hatii2 tulangmu patah XD', m)
}
handler.help = ['nguli']
handler.tags = ['exp']
handler.command = /^nguli/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.exp = 2000

module.exports = handler
