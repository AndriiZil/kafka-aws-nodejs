'use strict';

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'kafka',
    brokers: ['3.68.96.45:9092'], // Your Public IP
});

(async () => {
    const consumer = kafka.consumer({ groupId: 'my-group' });

    await consumer.connect();

    await consumer.subscribe({ topics: ['test'] });

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log({
                key: message.key.toString(),
                value: message.value.toString(),
                headers: message.headers,
            })
        },
    });
})();
