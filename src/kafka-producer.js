'use strict';

const { Kafka, Partitioners } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'kafka',
    brokers: ['3.68.96.45:9092'], // Your Public IP
});

(async () => {
    try {
        const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

        await producer.connect();

        await producer.send({
            topic: 'test',
            messages: [
                { key: 'Anna', value: 'hello world', partition: 1, timestamp: true },
                { key: 'Andrii', value: 'hey hey!', partition: 0, timestamp: true }
            ],
        });

        await producer.disconnect();
    } catch (err) {
        console.log(err);
    } finally {
        process.exit(0);
    }
})();
