# Getting started

Clone the repo:

    git clone git@github.com:adrianolek/keen.git
    cd keen

## Configure

[Keen.io](https://keen.io) credentials are needed, so go ahead and create an account and a project there.
Then create an `app.env` file:

    cp app.env.dist app.env

and provide your _Project ID_, _Read Key_, _Write Key_ and _Master Key_
(you can find them on the project's _Access_ page).

## Running with Docker Compose

You will need [Docker CE](https://docs.docker.com/install/) (17.06.0 or newer)
and [Docker Compose](https://docs.docker.com/compose/install/) (1.17.0 or newer).

Run:

    docker-compose run --rm node yarn install
    docker-compose up

The application is now running on [http://localhost:3000](http://localhost:3000).

## Testing

Run the test suite in watch mode:

    docker-compose run --rm node yarn test

or single run:

    docker-compose run --rm -e CI=true node yarn test

To get code coverage metrics run:

    docker-compose run --rm node yarn test -- --coverage

A detailed HTML report will be generated in the [coverage/lcov-report](coverage/lcov-report) directory.

# More information

The application is built on [create-react-app](https://github.com/facebook/create-react-app).
You can [read more](REACT.md) on what you can do with it.
