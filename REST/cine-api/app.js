'use strict';

const express = require('express');

const moviesRouter   = require('./routes/movies');
const roomsRouter    = require('./routes/rooms');
const sessionsRouter = require('./routes/sessions');

const app = express();

app.use(express.json());

app.use('/movies',   moviesRouter);
app.use('/rooms',    roomsRouter);
app.use('/sessions', sessionsRouter);

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Recurso no encontrado' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;
