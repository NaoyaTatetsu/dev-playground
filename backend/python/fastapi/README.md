## fastapi

### Environment
- docker v20.10.22

### image build
```
docker-compose up --build --no-cache
```

### Run server
```
docker-compose up (-d)
```

### Swagger URI
```
http://0.0.0.0:8000/docs
```

### Run test
```
docker exec -it <container ID> /bin/bash -c "pytest tests/"
```