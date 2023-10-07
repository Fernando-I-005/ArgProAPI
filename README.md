# Aplicación de Clima en JavaScript

Esta es una aplicación de clima simple y elegante desarrollada con JavaScript que proporciona información meteorológica para una ubicación específica. La aplicación está diseñada para ocupar la mitad de la pantalla, facilitando el acceso a los datos meteorológicos esenciales.

## Características

- Muestra la ubicación actual y la hora.
- Destaca la temperatura actual en °C junto con una imagen representativa del clima en ese momento.
- Muestra las temperaturas máxima y mínima del día.
- Presenta el pronóstico del clima para horas específicas (0, 3, 6, 9, 12, 15, 18, 21 y 24 horas).
- Muestra datos adicionales del clima, como la presión, índice UV, visibilidad máxima, horas de amanecer y atardecer, velocidad máxima del viento y dirección (en grados, decodificada a direcciones cardinales), y humedad relativa.
- Para pronósticos de cielo abierto o parcialmente abierto, la imagen se ajusta según sea de día o de noche.
- Los datos meteorológicos son proporcionados por [open-meteo.com](https://open-meteo.com/).

## Colores

Los colores utilizados en esta aplicación fueron generados utilizando paletas de colores de [coolors.co](https://coolors.co/), lo que contribuye a su diseño elegante y agradable a la vista.

## Datos Extraídos desde la API

La aplicación utiliza la API de Open Meteo para obtener información meteorológica. A continuación, se describen las variables extraídas desde la API:

### Variables por Hora

- Temperature (2 m): Temperatura a 2 metros sobre el suelo en grados Celsius.
- Relative Humidity (2 m): Humedad relativa a 2 metros sobre el suelo.
- Sealevel Pressure: Presión a nivel del mar.
- Visibility: Visibilidad en kilómetros.

### Variables Diarias

- Maximum Temperature (2 m): Temperatura máxima a 2 metros sobre el suelo en grados Celsius.
- Minimum Temperature (2 m): Temperatura mínima a 2 metros sobre el suelo en grados Celsius.
- Sunrise: Hora de amanecer.
- Sunset: Hora de atardecer.
- UV Index: Índice UV.
- Dominant Wind Direction (10 m): Dirección dominante del viento a 10 metros sobre el suelo.

La configuración de la API incluye:

- Tipo de solicitud: Current weather with temperature, windspeed, and weather code.
- Unidades de temperatura: Grados Celsius.
- Unidades de velocidad del viento: Kilómetros por hora.
- Formato de tiempo: ISO 8601.
- Días pasados: 0.
- Días de pronóstico: 1.
- Zona horaria: America/Sao_Paulo.

## Códigos Meteorológicos

A continuación, se muestra la tabla completa de códigos meteorológicos y sus significados:

| Código | Texto en Inglés                | Texto en Español               |
|--------|--------------------------------|--------------------------------|
| 0      | Clear sky                      | Cielo Despejado                |
| 1      | Mainly clear                   | Cielo principalmente despejado |
| 2      | Partly cloudy                  | Parcialmente nublado           |
| 3      | Overcast                       | Nublado                        |
| 45     | Fog                            | Niebla                         |
| 48     | Deposting rime fog             | Niebla con escarcha            |
| 51     | Drizzle: Light                 | Llovizna ligera                |
| 53     | Moderate                       | Llovizna moderada              |
| 55     | Dense intensity                | Llovizna intensa               |
| 56     | Freezing Drizzle: Light        | Llovizna helada ligera         |
| 57     | Freezing Drizzle: Light        | Llovizna helada intensa        |
| 61     | Rain: Slight                   | Lluvia ligera                  |
| 63     | Moderate                       | Lluvia moderada                |
| 65     | Heavy intensity rain            | Lluvia intensa                 |
| 66     | Freezing Rain: Light           | Lluvia helada ligera           |
| 67     | Heavy intensity rain            | Lluvia helada intensa          |
| 71     | Snow fall: Slight              | Nevadas ligeras                |
| 73     | Moderate                       | Nevadas moderadas              |
| 75     | Heavy intensity snowfall       | Nevadas intensas               |
| 77     | Snow grains                    | Agua nieve                     |
| 80     | Rain showers: Slight           | Lluvias intermitentes ligeras  |
| 81     | Moderate rain showers          | Lluvias intermitentes moderadas|
| 82     | Violent rain showers           | Lluvias intermitentes intensas |
| 85     | Snow showers slight            | Lluvias y nevadas ligeras      |
| 86     | Snow showers moderate          | Lluvias y nevadas moderadas    |
| 95     | Thunderstorm: Slight or moderate | Tormentas                      |
| 96     | Thunderstorm with slight hail  | Tormentas con probabilidad baja de granizo |
| 99     | Thunderstorm: Heavy hail       | Tormentas con probabilidad alta de granizo |

Puedes encontrar una lista completa de códigos meteorológicos y sus significados en la documentación de [open-meteo.com](https://open-meteo.com/).

