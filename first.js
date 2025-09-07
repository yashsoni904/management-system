const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://yashsoni7007:Yash-soni7007@test.il5cts0.mongodb.net/")
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

