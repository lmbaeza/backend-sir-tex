# backend-sir-tex
Backend de SIR-Text

### Mongo DB

```shell
docker network create sir-text-network

docker run -p 27017:27017 -d --network sir-text-network --name mongo -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
```
