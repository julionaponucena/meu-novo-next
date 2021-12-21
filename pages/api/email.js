const nodemailer = require('nodemailer')

function SendEmail (req,res){
   
    let transporte = nodemailer.createTransport({
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
    }).then(response => {res.send(response)}).catch((erro =>{res.send(erro)}))
    
}
export default SendEmail