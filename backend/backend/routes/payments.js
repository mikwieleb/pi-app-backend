const express = require('express');
const router = express.Router();

router.post('/create-payment', async (req, res) => {
  const { paymentId, amount, memo, metadata } = req.body;
  console.log('Paiement reçu :', req.body);
  res.status(200).json({ success: true });
});

router.post('/complete-payment', async (req, res) => {
  const { paymentId, txid } = req.body;
  console.log('Paiement complété :', { paymentId, txid });
  res.status(200).json({ success: true });
});

module.exports = router;
