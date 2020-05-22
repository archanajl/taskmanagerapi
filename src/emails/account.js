const sgMail = require('@sendgrid/mail');
const sendgridapikey = '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'

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


//sgMail.send(msg)

const sendWelcomeMail = async (email,name) => {
    try{
        const msg = {
            to: email,
            from: 'archanajl@gmail.com',
            subject: 'Welcome',
            text: 'Dear ${name}, Happy to have you with us!!'
            }
        await sgMail.send(msg);
}catch(e){
    console.log(e)
}
}

const sendCancelMail = async (email,name) => {
    try{
        const msg = {
            to: email,
            from: 'archanajl@gmail.com',
            subject: 'Welcome',
            text: 'Dear ${name}, Sorry to hear you leave!! Please let us know the reason.'
            }
        await sgMail.send(msg);
}catch(e){
    console.log(e)
}
}

module.exports = {
    sendWelcomeMail,
    sendCancelMail
}
