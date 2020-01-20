# Setup Docker env

    Don't forget to initialize the Docker environment using `eval $(docker-machine env yolo)` in each terminal.

# Sart Back (including API, BD and minio Cloud)

    go to matcha folder and: `docker-compose up`

# Start Seed and hydrate DB:

    `docker-compose exec  api npx ts-node -r dotenv/config seed/seed.ts`

# start front:

    Go to matcha folder
    if the image is not build: `docker build -t front .`
    then: `docker run -it --name front -p 3000:3000 front`