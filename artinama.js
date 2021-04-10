//by jereganz
//by rendycraft047
let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://mnazria.herokuapp.com/api/arti?nama=${text}`).then ((res) => {
	 	let hasil = `Arti Namamu adalah\n\n${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['artinama']
handler.tags = ['random']
handler.command = /^(artinama)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler