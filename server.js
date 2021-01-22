const express = require("express");
const next = require("next");
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const sendinblue = require('./api/sendinblue')

app
    .prepare()
    .then(() => {
        const server = express();
        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log("> Ready on http://localhost:3000");
        });

        server.use(bodyParser.json()).post('/api/email', (req, res) => {
            const { message = '', emails = [], senderEmail = "" } = req.body;
            let sendSmtpEmail = {
                to: emails,
                templateId: 21,
                params: {
                    message,
                    senderEmail
                },
            };
            sendinblue(sendSmtpEmail)
            res.send('success');

        });


    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });

