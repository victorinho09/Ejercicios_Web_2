## Pregunta 1:

- use sample_airbnb
- db.listingsAndReviews.aggregate([{ "$group": { "_id": "$room_type" } },{ "$project": { "_id": 0, "room_type": "$_id" } }])

### Solución -> 
  { room_type: 'Private room' },
  { room_type: 'Entire home/apt' },
  { room_type: 'Shared room' }

## Pregunta 2:

- use sample_training
- db.companies.find({ founded_year: { $ne: null } },{ _id: 0, name: 1, founded_year: 1 }).sort({ founded_year: 1 }).limit(5)

### Solución -> 
  { name: 'Alstrasoft', founded_year: 1800 },
  { name: 'US Army', founded_year: 1800 },
  { name: 'DuPont', founded_year: 1802 },
  { name: 'Bachmann Industries', founded_year: 1833 },
  { name: 'Bertelsmann', founded_year: 1835 }

## Pregunta 3:

- use sample_training
- db.trips.find({ "birth year": {$ne: "" } },{ _id: 0, "birth year": 1 }).sort({ "birth year": -1 }).limit(1)

### Solución -> 1999

