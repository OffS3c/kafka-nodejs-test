const kafka = require('kafka-node');

const client = new kafka.KafkaClient({
  kafkaHost: 'kafka:9092',
});
const admin = new kafka.Admin(client);

const topics = [{
  topic: 'feed-service',
  partitions: 1,
  replicationFactor: 1
}];

admin.createTopics(topics, (err, res) => {
  if (err) console.log('error in creating topics', err);
  console.log('Topics created / already created');
  process.exit(0);
});
