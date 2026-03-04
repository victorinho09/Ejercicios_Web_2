'use strict';

let nextId = 3;

// Una sesión vincula una película con una sala en una fecha/hora
const sessions = [
  {
    id: 1,
    movieId: 1,
    roomId: 1,
    startTime: '2026-03-05T16:00:00',
    price: 9.50,
    availableSeats: 120
  },
  {
    id: 2,
    movieId: 2,
    roomId: 2,
    startTime: '2026-03-05T19:30:00',
    price: 14.00,
    availableSeats: 80
  }
];

function findAll()       { return sessions; }
function findById(id)    { return sessions.find(s => s.id === id) || null; }
function create(data)    { const s = { id: nextId++, ...data }; sessions.push(s); return s; }
function update(id, data) {
  const idx = sessions.findIndex(s => s.id === id);
  if (idx === -1) return null;
  sessions[idx] = { ...sessions[idx], ...data, id };
  return sessions[idx];
}
function remove(id) {
  const idx = sessions.findIndex(s => s.id === id);
  if (idx === -1) return false;
  sessions.splice(idx, 1);
  return true;
}

module.exports = { findAll, findById, create, update, remove };
