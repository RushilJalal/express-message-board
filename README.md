# Express Message Board

### This is a simple message board application built with Express.js, EJS, and PostgreSQL. Users can add messages and view them on the message board.

## Deployment Link
https://express-message-board.up.railway.app/

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/RushilJalal/express-message-board.git
    cd express-message-board
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file and set up the PostgreSQL database and configure the connection string in the `DATABASE_URL` environment variable.

## Usage

1. Start the application:
    ```sh
    node --watch app.js
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Routes

- `/` - Displays the message board with all messages.
- `/new` - Displays the form to add a new message.
- `/message/:id` - Displays a specific message.