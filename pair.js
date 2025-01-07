const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Arima_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function ARIMA_BOT_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Arima_Tech = Arima_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Arima_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Arima_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Arima_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Arima_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Arima_Tech.sendMessage(Pair_Code_By_Arima_Tech.user.id, { text: '' + b64data });

               let ARIMA_MD_TEXT = `
*_Pair Code Connected by ARIMA*
*_Made With 🌹🌡️_*
______________________________________
╔════◇
║ *『 AMAZING YOU'VE CHOSEN ARIMA BOT 』*
║ _Tu as fini la première étape du déploiement de ton bot WhatsApp ._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Owner:* https://wa.me/2250565647764_
║❒ *Repo:* _github.com/Lordhades-qp/ARIMA-BOT_
║❒ *WaGroup:* _https://chat.whatsapp.com/LcD3Ei4yWuCK6DXSBcDXLk
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VatUVBSHrDZcV6K0DH0I
║❒ *Plugins:* _github.com/Lordhades-qp/ARIMA-BOT 
╚════════════════════════╝
_____________________________________

_n'oublie pas de fork mon repos dans son kpaitou 🤭_`
 await Pair_Code_by_Arima_Tech.sendMessage(Pair_Code_By_Arima_Tech.user.id,{text:ARIMA_BOT_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Arima_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    ARIMA_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await ARIMA_PAIR_CODE()
});
module.exports = router
