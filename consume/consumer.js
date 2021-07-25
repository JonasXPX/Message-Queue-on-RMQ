const rqlib = require('amqplib')
const config = require('../config')

consumer()

async function consumer () {
    const connection = await rqlib.connect(config.RABBIT_HOST)
    console.log(`Connected to ${config.RABBIT_HOST}`)

    const channel = await connection.createChannel()

    await channel.assertQueue(config.QUEUE_NAME)


    channel.consume(config.QUEUE_NAME, (msg) => {
        console.log(`received message: ${msg.content.toString()}`)
        channel.ack(msg)
    })

}