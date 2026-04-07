## Pregunta 1:

- use sample_training
- db.zips.find({pop: {$lt : 1000} }).count()

### Solución -> 8065

## Pregunta 2:

- use sample_training
- db.trips.find({"birth year": {$gt:1998}}).count() - db.trips.find({"birth year": 1998}).count() 

### Solución -> 6

## Pregunta 3:

- use sample_training
- db.routes.find({stops: {$gte:1}}).count()

### Solución -> 11

## Pregunta 4:

- use sample_training
- db.inspections.find({ $and: [{result: "Out of Business"},{sector:"Home Improvement Contractor - 100"} ] }).count()

### Solución -> 4

## Pregunta 5:

- use sample_training
- db.inspections.find( {$and: [ {$or: [ {date: "Feb 20 2015"}, {date: "Feb 21 2015"} ] } , {sector: {$ne: "Cigarette Retail Dealer - 127"} } ] } ).count()

### Solución -> 204