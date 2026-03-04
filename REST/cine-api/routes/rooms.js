'use strict';

const express = require('express');
const router  = express.Router();
const db      = require('../data/rooms');

// GET /rooms — listar todas las salas
router.get('/', (req, res) => {
  res.status(200).json(db.findAll());
});

// GET /rooms/:id — obtener una sala
router.get('/:id', (req, res) => {
  const room = db.findById(parseInt(req.params.id));
  if (!room) return res.status(404).json({ error: 'Sala no encontrada' });
  res.status(200).json(room);
});

// POST /rooms — crear una sala
router.post('/', (req, res) => {
  const { name, capacity, type } = req.body;

  if (!name || !capacity) {
    return res.status(400).json({ error: 'Los campos name y capacity son obligatorios' });
  }

  const room = db.create({ name, capacity, type });
  res.status(201).json(room);
});

// PUT /rooms/:id — actualizar una sala completa
router.put('/:id', (req, res) => {
  const { name, capacity, type } = req.body;

  if (!name || !capacity) {
    return res.status(400).json({ error: 'Los campos name y capacity son obligatorios' });
  }

  const room = db.update(parseInt(req.params.id), { name, capacity, type });
  if (!room) return res.status(404).json({ error: 'Sala no encontrada' });
  res.status(200).json(room);
});

// PATCH /rooms/:id — actualizar parcialmente una sala
router.patch('/:id', (req, res) => {
  const room = db.update(parseInt(req.params.id), req.body);
  if (!room) return res.status(404).json({ error: 'Sala no encontrada' });
  res.status(200).json(room);
});

// DELETE /rooms/:id — eliminar una sala
router.delete('/:id', (req, res) => {
  const deleted = db.remove(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ error: 'Sala no encontrada' });
  res.status(204).send();
});

module.exports = router;
