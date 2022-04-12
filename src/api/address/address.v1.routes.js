import express from 'express';
import Address from './address.model.js';

const router = express.Router();

router.get('/addresses', async (req, res) => {
  const addresses = await Address.findAll();
  res.json(addresses);
});

router.get('/addresses/:id', async (req, res) => {
  const address = await Address.findByPk(req.params.id);
  res.json(address);
});

router.post('/addresses', async (req, res) => {
  const newAddress = await Address.create(req.body);
  res.json(newAddress);
});

router.put('/addresses/:id', async (req, res) => {
  const address = await Address.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(address);
});

router.delete('/addresses/:id', async (req, res) => {
  const address = await Address.destroy({ where: { id: req.params.id } });
  res.json(address);
});

export default router;
