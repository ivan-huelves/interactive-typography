---
layout: post
title: "Prototipo número tres. Sistema tipográfico para la visualización de datos meteorológicos en entornos urbanos"
date: 2019-06-12
categories: prototypes
author: "Iván Huelves Illas"
---

<div style="padding:56.25% 0 0 0;position:relative;margin-bottom:2rem;">
    <iframe src="https://player.vimeo.com/video/341418395?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>

![Datos meteorológicos 01]({{ site.baseurl }}/images/prototypes/cap04_03_sensor-meteo-02.jpg)

![Datos meteorológicos 02]({{ site.baseurl }}/images/prototypes/cap04_03_sensor-meteo-03.jpg)

### Clasificación
* Función Visualización de datos
* Contexto Investigación / Experimental
* Grado de interactividad Interacción débil o reactiva
* Input multimodal Sí
* Tipo de input Datos externos
* Tipo de output Transformación morfológica
* Tecnología empleada Tipografía variable, Arduino, JavaScript, CSS
* Alfanumérica Sí (aunque presenta también caracteres no alfanuméricos)
* Mantiene codificación textual Sí

### Descripción
Este tercer prototipo explora cómo la tipografía interactiva posee la capacidad de visualizar datos ambientales en tiempo real dentro de paneles informativos del espacio público, abarcando soportes como el mobiliario urbano digital. Para lograrlo, el sistema simula la visualización de la temperatura y cantidad de lluvia utilizando dos sensores distintos cuyas mediciones modifican de forma independiente el peso de los caracteres.

Para simular la captura de datos y llevar a cabo las pruebas empíricas, el desarrollo de este prototipo emplea la plataforma de *hardware* libre Arduino, al igual que en los casos anteriores. Esta tecnología permite integrar las lecturas de los sensores con el *software* encargado de controlar la tipografía. 

La arquitectura del proyecto integra dos *inputs* y dos *outputs* donde las entradas provienen de un sensor de temperatura cuyo rango para el experimento queda acotado entre 20°C y 45°C con una actualización cada segundo, junto a un sensor de nivel de agua destinado a simular la intensidad de la lluvia capaz de registrar valores entre 2 y 265. El *output* visual opera mediante la tipografía variable *Source Sans Variable*. El sistema emplea el estilo *Roman* para mostrar los datos de temperatura y el estilo *Italic* para representar la lluvia. En ambos casos la interacción modifica directamente el eje de variación de peso, el cual abarca un rango de 200 a 900.

El propósito comunicativo consiste en reflejar de manera directa y progresiva los fenómenos meteorológicos. Para ello, el diseño establece una correspondencia directa donde el aumento de la temperatura o del nivel de agua incrementa el peso de los glifos correspondientes. De este modo, el sistema representa una temperatura más alta mediante un mayor grosor de la tipografía *Roman*, mientras visualiza una lluvia más intensa aumentando el peso de los caracteres en su versión *Italic*.

### Apuntes para el desarrollo del modelo
Este prototipo introduce el uso de múltiples *inputs* operando de forma simultánea e independiente sobre diferentes estilos de una misma familia tipográfica. Cada variable de entrada se asocia a un *output* distinto mediante el estilo *Roman* y el estilo *Italic* respectivamente. Este hallazgo resulta de gran importancia para garantizar la escalabilidad del sistema propuesto. La experimentación confirma la viabilidad de añadir complejidad al aumentar el número de variables de entrada y salida prescindiendo de alteraciones en la estructura lógica fundamental del proceso. Esta constatación aporta un requisito estructural clave para el desarrollo del modelo conceptual al confirmar que la arquitectura deberá soportar flujos de información complejos donde la tipografía variable funcione como un recurso gráfico capaz de representar canales de datos paralelos e independientes.

<a href="https://github.com/ivan-huelves/Sensor-Variable-Font_meteo" target="_blank" rel="noopener noreferrer">Más información en Github</a>