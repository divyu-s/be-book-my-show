# BE-Book My Show App

This project aims to provide a user-friendly API for accessing information about movie theatres, show dates, and showtimes in a city. The API allows users to select a specific theatre, view the upcoming show dates for the next 7 days, and retrieve detailed information about movies and showtimes on a selected date.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Database Configuration](#database-configuration)

## Getting Started

### Prerequisites

To run the API, you'll need the following installed on your system:

- Node.js (https://nodejs.org)
- MySQL Server (https://www.mysql.com/)

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/divyu-s/be-book-my-show.git
```

2. Go to the project directory

```bash
 cd be-book-my-show
```

3. Install the dependencies:

```bash
npm install
```

4. Set up the MySQL configuration:

   - Open the `config.js` file in the `src` directory and update the database connection details (`your_database_name`, `your_mysql_username`, and `your_mysql_password`)

5. Start the API:

```bash
npm start
```

By default, the API will run on http://localhost:3000. You can change the port by setting the `PORT` environment variable

## API Endpoints

The API provides the following endpoints:

##### To get all the cities

```http
   GET /cities
```

##### To add a new city

```http
   POST /cities
```

| Body   | Type     | Description                |
| :----- | :------- | :------------------------- |
| `name` | `string` | **Required**. name of city |

##### To get theatre's of a particular city

```http
   GET /cities/:cityId/theaters
```

##### To get next 7 day dates

```http
   GET /dates
```

##### To add a movie

```http
   POST /movies
```

| Body   | Type     | Description                 |
| :----- | :------- | :-------------------------- |
| `name` | `string` | **Required**. name of movie |

##### To add showtime

```http
   POST /showtimes
```

| Body        | Type      | Description              |
| :---------- | :-------- | :----------------------- |
| `date`      | `string`  | **Required**. Date       |
| `time`      | `string`  | **Required**. Time       |
| `movieId`   | `integer` | **Required**. Movie Id   |
| `theaterId` | `integer` | **Required**. Theatre Id |

##### To add a theatre

```http
   POST /theaters
```

| Body     | Type      | Description                                           |
| :------- | :-------- | :---------------------------------------------------- |
| `name`   | `string`  | **Required**. Name of Theatre                         |
| `cityId` | `integer` | **Required**. Id of city in which theatre is loacated |

##### To get showtimes of movies running in a particular theatre

```http
   GET /theaters/:theaterId/movies
```

## Database Configuration

The API uses MySQL as the database. To set up the database, ensure you have a running MySQL server and update the database connection details in the `src/config.js` file.
