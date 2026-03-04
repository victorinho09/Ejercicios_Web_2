'use strict';

const express = require('express');
const router  = express.Router();
const db      = require('../data/movies');

// GET /movies — listar todas las películas
router.get('/', (req, res) => {
  res.status(200).json(db.findAll());
});

// GET /movies/:id — obtener una película
router.get('/:id', (req, res) => {
  const movie = db.findById(parseInt(req.params.id));
  if (!movie) return res.status(404).json({ error: 'Película no encontrada' });
  res.status(200).json(movie);
});

// POST /movies — crear una película
router.post('/', (req, res) => {
  const { title, director, duration, genre, rating, synopsis } = req.body;

  if (!title || !director || !duration) {
    return res.status(400).json({ error: 'Los campos title, director y duration son obligatorios' });
  }

  const movie = db.create({ title, director, duration, genre, rating, synopsis });
  res.status(201).json(movie);
});

// PUT /movies/:id — actualizar una película completa
router.put('/:id', (req, res) => {
  const { title, director, duration, genre, rating, synopsis } = req.body;

  if (!title || !director || !duration) {
    return res.status(400).json({ error: 'Los campos title, director y duration son obligatorios' });
  }

  const movie = db.update(parseInt(req.params.id), { title, director, duration, genre, rating, synopsis });
  if (!movie) return res.status(404).json({ error: 'Película no encontrada' });
  res.status(200).json(movie);
});

// PATCH /movies/:id — actualizar parcialmente una película
router.patch('/:id', (req, res) => {
  const movie = db.update(parseInt(req.params.id), req.body);
  if (!movie) return res.status(404).json({ error: 'Película no encontrada' });
  res.status(200).json(movie);
});

// DELETE /movies/:id — eliminar una película
router.delete('/:id', (req, res) => {
  const deleted = db.remove(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ error: 'Película no encontrada' });
  res.status(204).send();
});

module.exports = router;
