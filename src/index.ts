// src/index.ts

// Import the necessary modules and types from Express and dotenv.
// Express: Provides the functions and types needed to create the web server.
// dotenv: Loads environment variables from a .env file into process.env.
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configure dotenv to load variables from your .env file.
// This ensures that any variables defined in the .env file are accessible via process.env.
dotenv.config();

// Initialize an instance of the Express application.
const app: Express = express();

// Retrieve the port from the environment variables.
// Note: It's common practice to name your port variable in .env as "PORT" (uppercase),
// so you might consider using process.env.PORT instead for consistency.
// If the port is not defined, you might want to set a default value, e.g.:
// const port = process.env.PORT || 3000;
const port = process.env.port;

// Define a GET route for the root path "/".
// When a GET request is made to the root URL, the callback function sends a simple text response.
app.get("/", (req: Request, res: Response) => {
  res.send("MY SERVER");
});

// Start the Express server and listen on the specified port.
// Once the server is running, the callback logs a message to the console with the server URL.
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
