
---

# Todo App with MongoDB Express JS React JS Node JS 

## Project Overview

This is a simple Todo application with a full-stack architecture, featuring a backend REST API and a frontend built with React. The app allows users to manage their tasks, including adding, editing, deleting, and searching for todo items.

### Key Features:
- **Add Tasks:** Users can add new tasks to the todo list.
- **Edit Tasks:** Each task can be updated to reflect changes.
- **Delete Tasks:** Tasks can be removed from the list.
- **Search Functionality:** Users can search through the tasks by name or keywords.
  
---

## Tech Stack

### Backend:
- **Node.js & Express:** The server-side of the application is built using Node.js with the Express framework, offering a REST API for managing todos.
- **MongoDB:** Used as the NoSQL database to store todo items.
- **Nodemon:** Automatically restarts the server during development.
- **Postman:** Used for API testing and debugging.

### Frontend:
- **React:** A fast and efficient frontend library to create the user interface.
- **SCSS:** Used for styling to maintain modular and clean CSS.
- **React Toolkit:** For managing the application's state and ensuring seamless state transitions.
- **Axios:** For handling HTTP requests and communication with the backend API.
- **React Icons:** A library used for adding icons to enhance the visual appeal.

---

## Project Structure

The project is divided into two main parts: 

### Backend (Node.js + Express)
The backend consists of a REST API that handles CRUD operations (Create, Read, Update, Delete) for the todo list items. MongoDB is used for storing the data, and Postman is used to test the API.

**Key Endpoints:**
- `GET /todos`: Retrieves all todo items.
- `POST /todos`: Creates a new todo item.
- `PUT /todos/:id`: Updates a specific todo item.
- `DELETE /todos/:id`: Deletes a specific todo item.

### Frontend (React)
The frontend is a simple yet effective interface that displays the list of todos. Users can add, delete, edit, and search for items in the list. The design is responsive, and the state management is handled by React Toolkit.

**Main Pages:**
- **Home:** Displays the todo list and provides options to edit, delete, and search items.

---

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Make sure to set up a `.env` file with your MongoDB connection string:

```
MONGODB_URI=your_mongodb_connection_string
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Usage

1. Run the backend server with `npm run dev` in the backend directory.
2. Run the frontend with `npm start` in the frontend directory.
3. Access the app by navigating to `http://localhost:3000` in your browser.

---


---

