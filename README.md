# Kafka AWS NodeJS

- Got to console and create EC2 Instance with 2GB (t2.small)
- Security Group should allow traffic from `2181` and `9092` ports

### Go to Server
- Install java
```bash 
    sudo apt update
    sudo apt install openjdk-11-jre-headless
```
- Make directory and download Kafka
```bash
    mkdir Downloads
    curl https://downloads.apache.org/kafka/3.3.1/kafka_2.12-3.3.1.tgz -o Downloads/kafka.tgz
    
    mkdir kafka
    cd kafka
    tar -xvzf ~/Downloads/kafka.tgz --strip 1
```

### Start
- Start Zookeeper
```bash
    bin/zookeeper-server-start.sh config/zookeeper.properties
```
- Start Kafka Broker
- Before start make changes in `config/server.properties`
```bash
    nano config/server.properties
```
- `advertised.listeners` is what clients will use to connect to the brokers. For remote connection use only PUBLIC_IP
```bash
  advertised.listeners=PLAINTEXT://PUBLIC_IP:9092 (advertised.listeners=PLAINTEXT://18.192.211.150:9092)
```
```bash
    bin/kafka-server-start.sh config/server.properties
```
