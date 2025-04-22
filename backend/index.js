const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/payments');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Backend Pi Server is running');
});

app.use('/api/payments', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
