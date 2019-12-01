# Event-Sourcing Implementation for MicroServices

- An experiment with NodeJS and Apache Kafka
- You can use the docker-compose bundled instead of downloading and installing everything manually ;)
- docker-compose up --build -d

## Tech

- [NodeJS](https://nodejs.org/en/download/)
- [Kafka](https://kafka.apache.org/downloads)
- [MongoDB](https://www.mongodb.com/download-center/community)

## Starting Kafka

```bash

#!/bin/bash
zookeeper-server-start.sh config/zookeeper.properties
kafka-server-start.sh config/server.properties

```

## Starting Producer

```bash

#!/bin/bash
cd node-kafka-producer/
npm i
node server.js

```

## Starting Consumer

```bash

#!/bin/bash
cd node-kafka-consumer/
npm i
node server.js

```
