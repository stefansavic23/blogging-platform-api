# Blogging Platform API

A simple blogging platform API built with Node.js, Express, and Sequelize.

---

##  Features

- Create, read, update, and delete blog posts 
- Filter posts by category 
- Uses Sequelize for database management 
- No authentication required

---

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/stefansavic23/blogging-platform-api.git
2. Navigate into the project directory:
   ```sh
   cd blogging-platform-api
3. Install dependencies:
   ```sh
   npm install
4. Set up environment variables (create a .env file):
   ```ini
   PORT = 8080
   DB = your_database_name
   DB_USERNAME = your_database_username
   DB_PASSWORD = your_database_password
   DB_HOST = your_database_host 
   DB_PORT = your_database_port
   DB_DIALECT = your_database_dialect
   
---

## Usage1
1. Start the server:
   ```sh
   npm start
The APi will runn at: http://localhost:8080

---

## API Endpoints

| Method | Endpoint       | Description                   |
|--------|----------------|-------------------------------|
| `GET`  | `/posts/all`   | Get all blog posts            |
| `GET`  | `/posts/:id`   | Get a single post by ID       |
| `GET`  | `/posts/?tag=` | Get a single post by tag      |
| `POST` | `/posts`       | Create a new post             |
| `PUT`  | `/posts/:id`   | Update an existing post       |
|`DELETE`| `/posts/:id`   | Delete a post                 |


