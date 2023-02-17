const nodemailer = require('nodemailer')
const mailgun = require('mailgun-js')

async function SendEmail (request,response){
    const {nome,email,descricao} =request.body;
    const domain =process.env.EMAIL_DOMAIN
    const mg = mailgun({apiKey:process.env.API_EMAIL_KEY,domain:process.env.EMAIL_DOMAIN})
    console.log(process.env.EMAIL_DOMAIN)
    const data = {
        from:`Júlio <${email}>`,
        to: `${process.env.EMAILS_RECEIVERS}`,
        subject:`email do Restauramente de ${nome}`,
        text:'email de teste',
      //  message:descricao,
    };

const emailResponse = await mg.messages().send(data,(error,body) =>{
        console.log(error)
        console.log(`body :${body}`)
    })
    console.log(`emailResponse: ${emailResponse}`)
    response.status(200).send()

    /*let transporte = nodemailer.createTransport({
        host:'smtp.office365.com',
        port:587,
        auth:{
            user:process.env.USERMAIL,
            pass:process.env.PASSMAIL
        }
    })
    transporte.sendMail({
        from:`"como criar" <${process.env.USERMAIL}>`,
        from:process.env.USERMAIL,
        replyTo:process.env.USERMAIL,
        subject:'Contato atravez do site!',
        text:`<b>"teste"</b><br/>"teste"`,
        html:'<b>Olá!</b>'
    }).then(response => {res.send(response)}).catch((erro =>{res.send(erro)}))*/
    
}
export default SendEmail