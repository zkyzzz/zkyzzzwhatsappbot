const { create, Client } = require('@open-wa/wa-automate')
const { color } = require('./utils')
const options = require('./utils/options')
const msgHandler = require('./handler/message')

const start = (client = new Client()) => {
    console.log('[DEV]', color('KryPtoN', 'yellow'))
    console.log('[CLIENT] CLIENT Started!')

    // Force it to keep the current session
    client.onStateChanged((state) => {
        console.log('[Client State]', state)
        if (state === 'CONFLICT') client.forceRefocus()
    })

    // listening on message
    client.onMessage((message) => {
        client.getAmountOfLoadedMessages() // Cut message Cache if cache more than 1K
            .then((msg) => {
                if (msg >= 500) {
                    console.log('[CLIENT]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    client.cutMsgCache()
                }
            })
        // Message Handler
        msgHandler(client, message)
    })

    // listen group invitation
    client.onAddedToGroup(({ groupMetadata: { id }, contact: { name } }) =>
        client.getGroupMembersId(id)
            .then((ids) => {
                console.log('[CLIENT]', color(`Invited to Group. [ ${name} : ${ids.length}]`, 'yellow'))
                // White list
                const gPremiList = process.env.G_PREMI_LIST
                const isgPremiList = gPremiList.includes(id)
                // conditions if the group members are less than 25 then the bot will leave the group
                if (ids.length <= 40) {
                    client.sendText(id, `Hello anggota group *${name}*, terima kasih telah mengundang bot ini, untuk meliha bot menu kirim *!menu*`)
                } else if (isgPremiList) {
                    client.sendText(id, `Hello anggota group premium *${name}*, terima kasih telah mengundang bot ini dan berlangganan, untuk meliha bot menu kirim *!menu*, dan kirim *!premium* untuk menu fitur premium`)
                } else {
                    client.sendText(id, 'Maaf, untuk member lebih dari 40 hanya untuk member premium, info lebih lengkap https://chat.whatsapp.com/DAWsRFyVOyyEGZRZfLdzVP. Bye~').then(() => client.leaveGroup(id))
                }
            }))

    client.onRemovedFromGroup((data) => {
         console.log(data)
    })

    // listen paricipant event on group (wellcome message)
    client.onGlobalParicipantsChanged((event) => {
        if (event.action === 'add') {
            var blackList = process.env.BLACK_LIST
            if (blackList.includes(event.who)) {
                client.sendTextWithMentions(event.chat, `@${event.who.replace('@c.us', '')} User spammer detected, saya akan mengekick nya`)
                .then(() => client.removeParticipant(event.chat, event.who))
            } else {
                client.sendTextWithMentions(event.chat, `Hallo, Selamat datang di grup @${event.who.replace('@c.us', '')} \n\nSelamat bersenang-senang semua✨`)
            }
        }
        if (event.action === 'remove') return client.sendTextWithMentions(event.chat, `Selamat jalan user @${event.who.replace('@c.us', '')}`)
    })

    client.onIncomingCall((callData) => {
         client.contactBlock(callData.peerJid)
    })
}

create('Imperial', options(true, start))
    .then((client) => start(client))
    .catch((err) => new Error(err))
