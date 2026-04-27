const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Version 2 - Green Deployment 🚀');
});

app.listen(3000, () => console.log('Server running'));