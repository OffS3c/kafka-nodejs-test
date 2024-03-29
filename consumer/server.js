const kafka = require('kafka-node');
const util = require('util');
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const app = express();

const postModel = require('./postModel');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

try {
  console.log("kafka consumer is booting up");
  const Consumer = kafka.Consumer;
  const client = new kafka.KafkaClient({
    kafkaHost: 'kafka:9092',
  });
  
  let consumer = new Consumer(
    client,
    [{
      topic: 'feed-service',
      partition: 0
    }], {
      autoCommit: true,
      fetchMaxWaitMs: 1000,
      fetchMaxBytes: 1024 * 1024,
      encoding: 'utf8',
      fromOffset: false
    }
  );
  consumer.on('message', async function (message) {
    const consumerdata = JSON.parse(message.value);

    console.log("===>", consumerdata);

    if (consumerdata.type === 'DELETE_USER_POST') {
      console.log(typeof (consumerdata.data));

      const deleteStatus = await postModel.deletePosts(consumerdata.data);
      console.log("deleteStatus", deleteStatus);
      console.log("Post Deleted Successfully");
    }
  });
  consumer.on('error', function (err) {
    console.log('error', err);
  });
} catch (e) {
  console.log(e);
}

mongoose.connect('mongodb://mongodb:27017/node_consumer', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }).then((err, res) => {
    console.log("mongodb is connected successfully");
    require('./routes')(app);
  })
  .catch(err => {
    console.log("Error => ", err);
  });

app.listen(4567, () => {
  console.log("Consumer is listening to port 4567");
});
