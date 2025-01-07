const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('0029VahusSh0QeaoFzHJCk2x')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Arima_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function ARIMA_BOT_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Arima_Tech = Arima_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Arima_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Arima_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Wasi_Tech.sendMessage(Qr_Code_By_Arima_Tech.user.id, { text: '' + b64data });
	
				   let ARIMA_BOT_TEXT = `
*_Session Connected By ARIMA*
*_Made With 🌹_*
______________________________________
╔════◇
║ *『 VOUS AVEZ CHOISI ARIMA BOT  』*
║ _Tu as fini la première étape du déploiement de ton bot WhatsApp._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Owner:* https://wa.me/2250565647864_
║❒ *Repo:* _github.com/Lordhades-qp/ARIMA-BOT_
║❒ *WaGroup:* _https://chat.whatsapp.com/LcD3Ei4yWuCK6DXSBcDXLk
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VatUVBSHrDZcV6K0DH0I
║❒ *Plugins:* _github.com/Lordhades-qp/ARIMA-BOT 
╚════════════════════════╝
_____________________________________
	
_n'oublie pas de donner une étoile 🌟 à mon repos_`
	 await Qr_Code_By_Arima_Tech.sendMessage(Qr_Code_By_Arima_Tech.user.id,{text:ARIMA_BOT_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Arima_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					ARIMA_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await ARIMA_MD_QR_CODE()
});
module.exports = router
