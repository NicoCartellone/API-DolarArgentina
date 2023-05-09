# API Rest para cotización de distintos tipos de dólar en Argentina

Esta API Rest permite obtener la cotización de distintos tipos de dólar en Argentina, tales como dólar oficial, dólar blue, dólar turista, entre otros.

## Tecnologías utilizadas

La aplicación ha sido desarrollada utilizando las siguientes tecnologías:

- Node.js
- Express.js
- Vercel (para el despliegue en la nube)

## Uso de la API

Para obtener la cotización del dólar oficial, se debe hacer una petición GET a la URL:
https://api-dolar-argentina-nu.vercel.app/dolar

La API cuenta con un único endpoint:

- `/dolar`: devuelve la cotización de todos los tipos de dólar en Argentina.

La respuesta será un JSON con la siguiente estructura:

```json
[
    {
        "id": 0,
        "tipo": "blue",
        "compra": 469,
        "venta": 474
    },
    {
        "id": 1,
        "tipo": "oficial",
        "compra": 228.37,
        "venta": 235.74
    },
    {
        "id": 2,
        "tipo": "bolsa",
        "compra": 432.69,
        "venta": 433.29
    },
    {
        "id": 3,
        "tipo": "liqui",
        "compra": 435.75,
        "venta": 440.29
    },
    {
        "id": 4,
        "tipo": "cripto",
        "compra": 436.00,
        "venta": 446.00
    },
    {
        "id": 5,
        "tipo": "solidario",
        "compra": 390.22
    }
]
```

Cada tipo de dólar se representa como un objeto con sus respectivos valores de compra y venta.

## Contribuciones

Si deseas contribuir con este proyecto, no dudes en hacer un fork y enviar tus pull requests.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
