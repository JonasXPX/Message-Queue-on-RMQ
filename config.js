const RABBIT_HOST = process.env.RABBIT_HOST || 'amqp://localhost'
const QUEUE_NAME = process.env.RABBIT_QUEUE || 'internal-queue'

module.exports = {
    RABBIT_HOST,
    QUEUE_NAME
}