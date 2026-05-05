## Pregunta 1

### Solución: 

for $libro in /bib/book
order by xs:decimal(normalize-space($libro/price)) descending
return data($libro/title)

## Pregunta 2

### Solución:

count(/bib/book[author = "Abiteboul"])

## Pregunta 3

### Solución:

<autores>{
  for $autor in distinct-values(/bib/book/author)
  order by $autor
  return
    <autor>
      <nombre>{ $autor }</nombre>
      <numLibros>{ count(/bib/book[author = $autor]) }</numLibros>
    </autor>
}</autores>

