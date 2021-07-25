const config = require('../config')
const MessageSender = require('./messageSender')
const { connect } = require('amqplib')

const createConnectionAndSendQueue = async () => {
    const connection = await connect(config.RABBIT_HOST)

    const channel = await connection.createChannel()
    channel.assertQueue(config.QUEUE_NAME)
    
    
    const sender = new MessageSender(channel)


    sender.sendAObject({
        name: 'hello world'
    })
}


createConnectionAndSendQueue()