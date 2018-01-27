# Getting started

Clone the repo:

    git clone git@github.com:adrianolek/keen.git
    cd keen

## Running with Docker Compose

You will need [Docker CE](https://docs.docker.com/install/) (17.06.0 or newer)
and [Docker Compose](https://docs.docker.com/compose/install/) (1.17.0 or newer).

Run:

    docker-compose run --rm node yarn install
    docker-compose up

The application is now running on [http://localhost:3000](http://localhost:3000).