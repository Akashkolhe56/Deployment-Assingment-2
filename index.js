require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const isAdmin = process.env.IS_ADMIN === 'true';
  
  if (isAdmin) {
    res.json({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.json({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
