//by khoirul
let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.toxic)}”`, m)
}
handler.help = ['toxic']
handler.tags = ['quotes']
handler.command = /^(toxic)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.toxic = [
  "Kontol",
  "Memek",
  "Babi",
  "Ajg",
  "Bngst",
  "Kntl",
  "Kontol",
  "Mmk",
  "Pepek",
  "Pantek",
  "Ngewe yu",
  "Bacot lu gay",
  "Rizky gay",
  "Mahmud ganteng",
  "Mahmud gans",
  "Jelek lo kontol",
  "Lo jelek",
  "Kamu jelek, aku gasuka.",
  "Kamu jelek, pantes galaku",
  "Memek kmu pasti lobeh",
  "Kontol kamu pasti kecil",
  "Toxic mulu, astaghfirullah",
  "Ya Allah 100x",
  "Astaghfirullah",
  "Ngewe",
  "BO",
  "Ngentot",
  "Ngewe",
  "Henceut",
  "Baok",
  "Over badword",
  "Lahh ngatur!!",
  "Mek",
  "Mahmud ganteng valid no kecot",
  "Amel cans gaada obat",
  "Napa gaseneng bos?",
  "Iri bilang bos",
  "Iri bilang kontol",
]