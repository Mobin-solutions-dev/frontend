const sendinblue = require('../../api/sendinblue')


export default function handler(req, res) {
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
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'application/json')
    // res.end(JSON.stringify({ name: 'John Doe' }))
}