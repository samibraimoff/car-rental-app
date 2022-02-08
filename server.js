const express = require('express');
const config = require('config');
const dbConnect = require('./config/dbConnect');
const carRoutes = require('./routes/car.routes');
const userRoutes = require('./routes/user.routes');

const app = express();
dbConnect();

app.use(express.json({ extended: true }));

// routes
app.use('/api/cars', carRoutes);
app.use('/api/users', userRoutes);

const PORT = config.get('PORT') || 3030;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
