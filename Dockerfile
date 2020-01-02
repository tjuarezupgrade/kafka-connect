FROM confluentinc/cp-kafka-connect-base:5.3.2
RUN confluent-hub install --no-prompt confluentinc/kafka-connect-rabbitmq:latest