// add express
// add health check endpoint
// add a user signup endpoint that creates a new user in the database usinfg the prisma client

import express from "express";
import {Client}  from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  try {
    const user = await Client.user.create({
      data: {
        username,
        password
      }
    });
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send("Error creating user");
  }
});