'use strict';

let nextId = 3;

const rooms = [
  { id: 1, name: 'Sala 1', capacity: 120, type: 'standard' },
  { id: 2, name: 'Sala 2', capacity: 80,  type: 'VIP' }
];

function findAll()       { return rooms; }
function findById(id)    { return rooms.find(r => r.id === id) || null; }
function create(data)    { const r = { id: nextId++, ...data }; rooms.push(r); return r; }
function update(id, data) {
  const idx = rooms.findIndex(r => r.id === id);
  if (idx === -1) return null;
  rooms[idx] = { ...rooms[idx], ...data, id };
  return rooms[idx];
}
function remove(id) {
  const idx = rooms.findIndex(r => r.id === id);
  if (idx === -1) return false;
  rooms.splice(idx, 1);
  return true;
}

module.exports = { findAll, findById, create, update, remove };
