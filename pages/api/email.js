const nodemailer = require('nodemailer')

async function SendEmail (request,response){
    const {nome,email,descricao} = request.body

    const transporte = nodemailer.createTransport({
        service:'gmail',
        port:587,
        auth:{
            user:process.env.USERMAIL,
            pass:process.env.PASSMAIL
        }
    })

    
    await transporte.sendMail({
        from:email,
        to:process.env.RECEIVERS,
        subject:`Mensagem de ${nome} do Restauramente`,
        text:descricao
    })
    

    response.status(200).send()
}
export default SendEmail