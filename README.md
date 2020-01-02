# kafka-connect-poc
Proof of concepto using Kafka Connect

# Run

To start the services, run the following commands:

```
docker login
docker build -t . rabbitmq-connector
docker compose up
```


# Useful commands

## Register a connector

```
curl -i -X POST -H "Accept:application/json" -H  "Content-Type:application/json" http://localhost:8083/connectors/ -d @connector-config.json
```

## Remove a connector

```
curl -X DELETE http://localhost:8083/connectors/connector_name
```

# Disclaimer
I'm using confluent enterprise modules, but they are not for free. I'll replace them using different open-source solutions, but first I want to make sure that this is working fine with the official modules and then I will figure out what components we should use here.