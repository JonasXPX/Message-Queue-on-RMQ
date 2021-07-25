const config = require('../config')

class MessageSender {
    constructor (channel) {
        this.channel = channel

    }

    async sendAObject (object) {
        await this.channel
            .sendToQueue(
                config.QUEUE_NAME,
                // eslint-disable-next-line no-undef
                Buffer.from(JSON.stringify(object))
            )
    }
}

module.exports = MessageSender
