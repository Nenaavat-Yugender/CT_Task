Express.js Application – Third-Party API Integration

# Express.js Application – Third-Party API Integration

##  Feature Added: Joke API Integration

This Express.js project now includes integration with a third-party API that fetches random jokes.

###  Dependencies Installed

- `axios`: Used to make HTTP requests to the external joke API.

### 🔗 API Used

- [Official Joke API](https://official-joke-api.appspot.com/random_joke)

###  New Files

- `routes/jokeRoutes.js`

###  Setup Instructions

1. **Install Dependencies**

```
npm install axios
```

2. **Create Route File**
   File: `routes/jokeRoutes.js`

```js
const express = require("express");
const axios = require("axios");
const router = express.Router();
router.get("/", async (req, res, next) => {
  try {
    const { data } = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    res.json(data);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
```

3. **Update `server.js`**

```js
const jokeRoutes = require("./routes/jokeRoutes");
app.use("/api/joke", jokeRoutes);
```

4. **Test It**
   Run your server and visit:

```
GET http://localhost:PORT/api/joke
```

You’ll receive a JSON joke response like:

```json
{
  "setup": "Why don’t skeletons fight each other?",
  "punchline": "They don’t have the guts."
}
```

---

 Now our Express.js app supports external API integration for fun, real-time content!
