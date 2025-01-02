# Express Message Board

### This is a simple message board application built with Express.js using a PostgreSQL database. The View Engine used is EJS. Users can add messages and view them on the message board.

## Deployment Link
https://express-message-board.up.railway.app/

## Prerequisites

1. Docker - https://www.docker.com/
2. Node - https://nodejs.org/en

## Installation

1. Clone the repository:
    ```sh
    git clone -b docker https://github.com/RushilJalal/express-message-board.git
    cd express-message-board
    ```

2. Install dependencies:
    ```sh
    npm i
    ```

3. Build the containers:
    ```sh
    docker compose up --build -d
    ```
4. Open http://localhost:3000

## Routes

- `/` - Displays the message board with all messages.
- `/new` - Displays the form to add a new message.
- `/message/:id` - Displays a specific message.
