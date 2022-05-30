# backend-sir-tex
Backend de SIR-Text

### Run Server

```shell
DOCKER_BUILDKIT=0 docker build -t sir-tex:latest -f ./Dockerfile.dev .
# docker network create sir-text-network
# docker run -p 3000:3000 -d --network sir-text-network --name sir-tex sir-tex:latest
docker-compose up
```


### Mongo DB

```shell
docker network create sir-text-network

docker run -p 27017:27017 -d --network sir-text-network --name mongo -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
```
