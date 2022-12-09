'use strict';

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'kafka',
    brokers: ['3.68.96.45:9092'], // Your Public IP
});

(async () => {
    try {
        const admin = kafka.admin();

        await admin.connect();

        await admin.createTopics({
            topics: [{
                topic: 'test',
                numPartitions: 2,
            }],
        });

        console.log(await admin.listTopics());

        await admin.disconnect();
    } catch (err) {
        console.log(err);
    }
})();
