'use strict';

const express  = require('express');
const router   = express.Router();
const db       = require('../data/sessions');
const moviesDb = require('../data/movies');
const roomsDb  = require('../data/rooms');

// GET /sessions — listar todas las sesiones
// Opcionalmente filtrar por ?movieId=X o ?roomId=X
router.get('/', (req, res) => {
  let sessions = db.findAll();

  if (req.query.movieId) {
    sessions = sessions.filter(s => s.movieId === parseInt(req.query.movieId));
  }
  if (req.query.roomId) {
    sessions = sessions.filter(s => s.roomId === parseInt(req.query.roomId));
  }

  res.status(200).json(sessions);
});

// GET /sessions/:id — obtener una sesión
router.get('/:id', (req, res) => {
  const session = db.findById(parseInt(req.params.id));
  if (!session) return res.status(404).json({ error: 'Sesión no encontrada' });
  res.status(200).json(session);
});

// POST /sessions — crear una sesión
router.post('/', (req, res) => {
  const { movieId, roomId, startTime, price, availableSeats } = req.body;

  if (!movieId || !roomId || !startTime) {
    return res.status(400).json({ error: 'Los campos movieId, roomId y startTime son obligatorios' });
  }

  if (!moviesDb.findById(parseInt(movieId))) {
    return res.status(422).json({ error: `La película con id ${movieId} no existe` });
  }
  if (!roomsDb.findById(parseInt(roomId))) {
    return res.status(422).json({ error: `La sala con id ${roomId} no existe` });
  }

  const session = db.create({ movieId: parseInt(movieId), roomId: parseInt(roomId), startTime, price, availableSeats });
  res.status(201).json(session);
});

// PUT /sessions/:id — actualizar una sesión completa
router.put('/:id', (req, res) => {
  const { movieId, roomId, startTime, price, availableSeats } = req.body;

  if (!movieId || !roomId || !startTime) {
    return res.status(400).json({ error: 'Los campos movieId, roomId y startTime son obligatorios' });
  }

  if (!moviesDb.findById(parseInt(movieId))) {
    return res.status(422).json({ error: `La película con id ${movieId} no existe` });
  }
  if (!roomsDb.findById(parseInt(roomId))) {
    return res.status(422).json({ error: `La sala con id ${roomId} no existe` });
  }

  const session = db.update(parseInt(req.params.id), { movieId: parseInt(movieId), roomId: parseInt(roomId), startTime, price, availableSeats });
  if (!session) return res.status(404).json({ error: 'Sesión no encontrada' });
  res.status(200).json(session);
});

// PATCH /sessions/:id — actualizar parcialmente una sesión
router.patch('/:id', (req, res) => {
  const session = db.update(parseInt(req.params.id), req.body);
  if (!session) return res.status(404).json({ error: 'Sesión no encontrada' });
  res.status(200).json(session);
});

// DELETE /sessions/:id — eliminar una sesión
router.delete('/:id', (req, res) => {
  const deleted = db.remove(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ error: 'Sesión no encontrada' });
  res.status(204).send();
});

module.exports = router;
