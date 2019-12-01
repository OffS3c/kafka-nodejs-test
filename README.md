# Event-Sourcing Implementation for MicroServices

- An experiment with NodeJS and Apache Kafka

## Jump Start with Docker and Docker Compose

- You can use the docker-compose bundled instead of downloading and installing everything manually 😉

```bash

#!/bin/bash
docker-compose up --build -d

```

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
cd producer/
npm i
node server.js

```

## Starting Consumer

```bash

#!/bin/bash
cd consumer/
npm i
node server.js

```
