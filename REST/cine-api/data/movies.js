'use strict';

let nextId = 3;

// Datos de muestra
const movies = [
  {
    id: 1,
    title: 'Dune: Part Two',
    director: 'Denis Villeneuve',
    duration: 166,       // minutos
    genre: 'Ciencia ficción',
    rating: 'PG-13',
    synopsis: 'La épica continuación de la saga de Paul Atreides en Arrakis.'
  },
  {
    id: 2,
    title: 'Oppenheimer',
    director: 'Christopher Nolan',
    duration: 180,
    genre: 'Drama',
    rating: 'R',
    synopsis: 'La historia del padre de la bomba atómica.'
  }
];

function findAll()       { return movies; }
function findById(id)    { return movies.find(m => m.id === id) || null; }
function create(data)    { const m = { id: nextId++, ...data }; movies.push(m); return m; }
function update(id, data) {
  const idx = movies.findIndex(m => m.id === id);
  if (idx === -1) return null;
  movies[idx] = { ...movies[idx], ...data, id };
  return movies[idx];
}
function remove(id) {
  const idx = movies.findIndex(m => m.id === id);
  if (idx === -1) return false;
  movies.splice(idx, 1);
  return true;
}

module.exports = { findAll, findById, create, update, remove };
