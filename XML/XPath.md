### Pregunta 1

Solución: /PLAY/ACT[2]/SCENE/TITLE/text()

### Pregunta 2

Solución: count(//SPEECH[SPEAKER = "HAMLET"])

### Pregunta 3

Solución: //LINE[contains(., "king")]/text()

### Pregunta 4 

Solución: (//ACT[3]//SPEECH[SPEAKER = "BERNARDO"])[2]

### Pregunta 5

Solucion: //SPEECH/count(LINE)

### Pregunta 6

Solución: max(//SPEECH/count(LINE))

### Pregunta 7

Solución: //SPEECH[SPEAKER = /PLAY/PERSONAE/PGROUP[1]/PERSONA[3]]