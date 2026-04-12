---
layout: post
title: "Prototipo número cuatro. Animación tipográfica en tiempo real para visuales de concierto"
date: 2019-06-12
categories: prototypes
author: "Iván Huelves Illas"
---

<div style="padding:56.25% 0 0 0;position:relative;margin-bottom:2rem;">
    <iframe src="https://player.vimeo.com/video/341422442?h=260114c0ea" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>

### Clasificación
* Función Exploración formal y performativa
* Contexto Investigación / Experimental
* Grado de interactividad Interacción débil o reactiva
* Input multimodal No
* Tipo de input Datos externos
* Tipo de output Transformación morfológica
* Tecnología empleada Tipografía variable, Arduino, JavaScript, CSS
* Alfanumérica Sí
* Mantiene codificación textual Sí

### Descripción
El cuarto prototipo se aleja de una aplicación funcional para centrarse en las capacidades expresivas de la tipografía interactiva. Este caso de estudio explora la relación entre la música de un evento y la transformación rítmica de los caracteres proyectados en la pantalla del escenario. El propósito radica en crear una experiencia visual dinámica donde la tipografía reaccione y adquiera un comportamiento performativo al ritmo de la música.

Para simular la captura de datos y llevar a cabo las pruebas empíricas, el desarrollo de este prototipo emplea la plataforma de *hardware* libre Arduino, al igual que en los casos anteriores. Esta tecnología permite integrar las lecturas del sensor de sonido con el *software* encargado de controlar la tipografía variable. El desarrollo técnico y el código fuente se detallan en los anexos de esta investigación.

El sistema integra dos componentes principales donde, por un lado, cuenta con un sensor SparkFun Sound Detector actuando como *input* para registrar la amplitud de la música. Los valores emitidos exigen una calibración previa en función del volumen y el ruido ambiental circundante. Para este experimento se estableció un rango de 7 a 50 con una actualización de datos cada 10 milisegundos. Por otro lado, el *output* visual opera mediante la tipografía variable *WHOA Spine*, seleccionada por su carácter expresivo, a través de sus tres ejes de variación espacial que corresponden al eje horizontal (valores de 0 a 1.000), el eje vertical (0 a 1.000) y el eje de rotación (de -45 a 45).

La amplitud del sonido captada por el sensor determina directamente el valor transferido a los ejes, generando una transformación morfológica de los glifos mayor ante una amplitud más elevada. Para controlar el efecto visual y evitar una aleatoriedad excesiva el diseño incorpora dos restricciones paramétricas. En primer lugar, los ejes horizontal y vertical limitan su rango a valores positivos para generar un movimiento predominante hacia arriba y hacia la derecha. En segundo lugar, el valor del eje de rotación sigue el ritmo de la música, pero el sistema asigna el sentido del giro de forma aleatoria en cada cambio. Esta combinación de control y azar produce un comportamiento rítmico impredecible pero coherente.

![Sensor de sonido 01]({{ site.baseurl }}/images/prototypes/cap04_04_sensor-sonido-02.jpg)<br>
![Sensor de sonido 02]({{ site.baseurl }}/images/prototypes/cap04_04_sensor-sonido-03.jpg)<br>
![Sensor de sonido 03]({{ site.baseurl }}/images/prototypes/cap04_04_sensor-sonido-04.jpg)

### Apuntes para el desarrollo del modelo
El análisis de este cuarto prototipo establece una base práctica para el futuro modelo al evidenciar el potencial expresivo de la tipografía interactiva. A diferencia de los casos anteriores orientados a cuestiones funcionales, este proyecto demuestra que el sistema posee la capacidad de generar comportamientos performativos. Para alcanzar este nivel de expresividad, se puede integrar a la lógica de transformación variables aleatorias capaces de dotar a los caracteres de un movimiento más orgánico. Sin embargo, para evitar que esta imprevisibilidad derive en ruido visual resulta imprescindible aplicar restricciones. Al limitar los ejes espaciales a valores positivos y acotar el sentido de giro de la rotación mediante un azar controlado, el sistema reduce el caos y garantiza un movimiento rítmico armónico. Este hallazgo establece que el mecanismo encargado de traducir los datos debe incluir operadores matemáticos y límites de rango para que el diseñador logre crear comportamientos visuales complejos manteniendo el control sobre la forma de los glifos.

En segundo lugar, el desarrollo técnico de esta animación en tiempo real confirma una nueva dimensión de escalabilidad para el sistema. Se constata empíricamente que una única fuente de entrada de datos, referida en este caso a la amplitud sonora, posee la capacidad de modificar varios ejes de variación de manera simultánea. Esta evidencia aporta un requisito arquitectónico clave al establecer que el futuro modelo deberá soportar relaciones múltiples donde un *input* modifique varios parámetros de variación al mismo tiempo.

<a href="https://github.com/ivan-huelves/Sensor-Variable-Font_sonido" target="_blank" rel="noopener noreferrer">Más información en Github</a>