# Fastfeet - backend

## Getting Started

This project was developed to complete the `rocketseat bootcamp`, here you can find details about the `server app` part.

## How to test this implementation

### Prerequisites

You need to have docker installed on your machine to up the DBs

- create container db: `docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
- create container redis: `docker run --name redisfastfeet -p 6379:6379 -d -t redis:alpine`

In the project directory `../fastfeet/fastfeet-backend`, you can run:

- `yarn`: Intalling dependencies
- `yarn start` : Start in development mode
- `docker start database`: start the database server
- `docker start redisfastfeet`: start the redis server instance
- `yarn sequelize db:migrate`: define the db structure
- `yarn sequelize db:seed:all`: register an admin user
- `yarn dev`: Start in development mode

## Project Structure

### Entities

As well as an `admin-like` app, this app offers some **CRUD** interactions for these entities below

- `users` - Here you can use CRUD to organize your users, an user could be `admin` or `deliveryman``
- `files` - Here you can control files, usually photos of users or documents (.png or .jpeg)
- `recipients` - Detailed receiver information (name, address)
- `delivery_problems` - Used to store info about some problem during the delivery process
- `orders` - Also mentioned as `deliveries`, this store all information about some order (status, product, link with deliveryman, receivers etc)

### Route information

`public`

- `POST /users` - use this to register some user (name, email, deliveryman)
- `POST /sessions` - use it to login purpouses
- `GET /deliveryman/:id` - get detailed info about some deliveryman
- `GET /deliveryman/:id/deliveries` - return all orders related to this deliveryman
- `PUT /deliveryman/:id/deliveries/:delivery_id` - update especific order of this deliveryman
- `GET /delivery/:id/problems` - list all problems related to this delivery
- `POST /delivery/:id/problems` - register some problem to this delivery
- `POST /files` - register some image file

`private` (needs admin access token)

- `/users` - you can find only the update route here
- `/recipients` - CRUD operations for recipients + a route to get info about only one recipient
- `/deliveryman` - CRUD operations for deliveryman
- `/orders` - CRUD operations for orders + a route to get info about only one order

## Built With

- [Sucrase](https://sucrase.io/) - Super-fast Babel alternative
- [Expres](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Sequelize](https://sequelize.org/) - A promise-based Node.js ORM
- [Nodemailer](https://nodemailer.com/about/) - is a module for Node.js applications to allow easy as cake email sending
- [Redis](https://redis.io/) - In-memory data structure store
- [BeeQueue](https://github.com/bee-queue/bee-queue) - A simple, fast, robust job/task queue for Node.js, backed by Redis.

## Author

- **Marcio Mendes** - [mmendesas](https://github.com/mmendesas)
