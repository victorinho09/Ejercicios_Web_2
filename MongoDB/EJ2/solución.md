## Pregunta 1

- use sample_training
- db.companies.find({ $expr: { $gt: ["$number_of_employees","$founded_year"] } }).count()

### Solución -> 324

## Pregunta 2

- use sample_training
- db.companies.find({ $expr: { $eq: ["$permalink","$twitter_username"] } }).count()

### Solución -> 1299

## Pregunta 3

- use sample_airbnb
- db.listingsAndReviews.findOne( { number_of_reviews: 50 , accommodates: {$gt:6}  } , {name:1,_id:0}) 

### Solución ->  name: 'Sunset Beach Lodge Retreat'

## Pregunta 4

- use sample_airbnb
- db.listingsAndReviews.find({property_type: "House",amenities: "Changing table"}).count()

### Solución -> 11

## Pregunta 5

- use sample_training
- db.companies.find({"offices.city": "Seattle"}).count()

### Solución -> 117

## Pregunta 6

- use sample_training
- 

### Solución -> [
  { name: 'Twitter' },
  { name: 'LinkedIn' },
  { name: 'PayScale' },
  { name: 'Xobni' },
  { name: 'Zynga' },
  { name: 'ShareThis' },
  { name: 'TicketLeap' },
  { name: 'Moblyng' },
  { name: 'PlumChoice' },
  { name: 'SolFocus' },
  { name: 'HyperWeek' },
  { name: 'Virident Systems' },
  { name: 'Extreme Enterprises' },
  { name: 'CipherMax' },
  { name: 'Stemgent' },
  { name: 'Sonos' },
  { name: 'BridgeLux' },
  { name: 'Silicor Materials' },
  { name: '1366 Technologies' },
  { name: 'Biolex Therapeutics' }
]

## Pregunta 7

- use sample_training
- db.trips.find({"start station location.coordinates.0": { $lt: -74 }}).count()

### Solución -> 1928

## Pregunta 8

- use sample_training
- db.inspections.find({"address.city": "NEW YORK"}).count()

### Solución -> 18279

## Pregunta 9

- use sample_airbnb
- db.listingsAndReviews.find({"amenities.0": "Internet"},{_id: 0,name: 1,"address.street": 1})

### Solución -> [
  {
    name: 'Private Room in Bushwick',
    address: { street: 'Brooklyn, NY, United States' }
  },
  {
    name: 'Modern Spacious 1 Bedroom Loft',
    address: { street: 'Montréal, Québec, Canada' }
  },
  {
    name: 'Nice room in Barcelona Center',
    address: { street: 'Barcelona, Catalunya, Spain' }
  },
  {
    name: 'New York City - Upper West Side Apt',
    address: { street: 'New York, NY, United States' }
  },
  {
    name: '3 chambres au coeur du Plateau',
    address: { street: 'Montréal, Québec, Canada' }
  },
  {
    name: 'Double and triple rooms Blue mosque',
    address: { street: 'Fatih , İstanbul, Turkey' }
  },
  {
    name: 'Friendly Apartment, 10m from Manly',
    address: { street: 'Fairlight, NSW, Australia' }
  },
  {
    name: 'Quarto inteiro na Tijuca',
    address: { street: 'Rio de Janeiro, Rio de Janeiro, Brazil' }
  },
  {
    name: 'Room Close to LGA and 35 mins to Times Square',
    address: { street: 'Queens, NY, United States' }
  },
  { name: '', address: { street: 'Istanbul, İstanbul, Turkey' } },
  {
    name: '~Ao Lele~ Flying Cloud',
    address: { street: 'Volcano, HI, United States' }
  },
  {
    name: 'Cozy House in Ortaköy',
    address: { street: 'Beşiktaş, İstanbul, Turkey' }
  },
  {
    name: 'Kadiköy, Moda, close to transports',
    address: { street: 'Kadıköy, İstanbul, Turkey' }
  },
  {
    name: 'Great location in Barcelona',
    address: { street: 'Barcelona, Catalunya, Spain' }
  },
  {
    name: 'Ribeira Smart Flat',
    address: { street: 'Porto, Porto, Portugal' }
  },
  {
    name: "Designer's Historical Apartment",
    address: { street: 'Istanbul, Istanbul Province, Turkey' }
  },
  {
    name: 'well lit East Williamsburg apt.',
    address: { street: 'Brooklyn, NY, United States' }
  },
  {
    name: 'Room in the very ♥ of BCN - Unbeatable location',
    address: { street: 'Barcelona, Catalunya, Spain' }
  },
  {
    name: 'Private Cozy Bedroom in Brooklyn',
    address: { street: 'Brooklyn, NY, United States' }
  },
  {
    name: 'Sunny Bedroom in Downtown Montreal',
    address: { street: 'Montréal, Québec, Canada' }
  }
]

