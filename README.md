# reto_tecnico_rimac

        - $ cd reto_tecnico_rimac
        - $ cd retoTecnicoR

- Configure inicial del proyecto
    - bash 
        # accesos aws
        - $ serverless config credentials --provider aws --key [aws_access_key_id]  --secret [aws_secret_access_key]

            # Si tiene ya una configuracion de credenciales, ejecutar: 
             - $ serverless config credentials --provider aws --key [aws_access_key_id]  --secret [aws_secret_access_key] -o 
             
        # instalar librerias
        - $ npm install -y
        # desplegar serverless
        - $ serverless deploy

- JSON de prueba para el metodo POST

{
  "nombre": "Venus",
  "periodo_rotacion": "24",
  "periodo_orbital": "304",
  "diametro": "10465",
  "clima": "arid",
  "gravedad": "1 standard",
  "terreno": "desert",
  "aguas_superficiales": "1",
  "poblacion": "200000",
  "fecha_creacion": "2014-12-09T13:50:49.641000Z",
  "fecha_modificacion": "2014-12-20T20:58:18.411000Z",
  "url": "https://swapi.py4e.com/api/planets/1/",
  "peliculas": [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/3/"
  ],
  "residentes": [
    "https://swapi.py4e.com/api/people/1/",
    "https://swapi.py4e.com/api/people/2/"
  ]
}

