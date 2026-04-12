---
layout: post
title: "Prototipo número dos. Adaptación tipográfica a la iluminación ambiental para mejorar la legibilidad"
date: 2019-06-12
categories: prototypes
author: "Iván Huelves Illas"
---

<div style="padding:56.25% 0 0 0;position:relative;margin-bottom:2rem;">
    <iframe src="https://player.vimeo.com/video/341421372?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>

![Adaptación lumínica 01]({{ site.baseurl }}/images/prototypes/cap04_02_sensor-iluminacion 01.jpg)

![Adaptación lumínica 02]({{ site.baseurl }}/images/prototypes/cap04_02_sensor-iluminacion 02.jpg)

### Clasificación
* Función Accesibilidad
* Contexto Investigación / Experimental
* Grado de interactividad Interacción débil o reactiva
* Input multimodal No
* Tipo de input Datos externos
* Tipo de output Transformación morfológica
* Tecnología empleada Tipografía variable, Arduino, JavaScript, CSS
* Alfanumérica Sí
* Mantiene codificación textual Sí

### Descripción
Este segundo prototipo explora la relación entre el grado de iluminación de un espacio y la legibilidad de la tipografía en dispositivos con pantalla, abarcando soportes como libros electrónicos o *smartphones*. El objetivo consiste en adaptar la tipografía de forma automática a las condiciones lumínicas para mejorar la experiencia de lectura sin requerir ajustes manuales por parte del usuario.

Para simular el comportamiento del sensor y llevar a cabo las pruebas empíricas en un contexto de laboratorio, el desarrollo de este prototipo emplea la plataforma de *hardware* libre Arduino, al igual que en el caso anterior. Esta tecnología permite conectar los componentes físicos con el *software* encargado de gestionar la tipografía. 

El sistema consta de dos componentes principales donde, por un lado, integra una fotorresistencia que actúa como *input* registrando el nivel de luz ambiental y, por otro lado, presenta un *output* visual mediante la tipografía variable *Amstelvar Alpha* a través de su eje de variación de tamaño óptico. Los valores del sensor resultan relativos a las condiciones específicas del entorno, exigiendo una calibración previa. Para este experimento se estableció un rango de referencia entre 4 y 100 con una actualización cada 100 milisegundos. El eje de tamaño óptico de la tipografía abarca un rango de 10 a 72.

El propósito comunicativo radica en mejorar la percepción del texto en pantalla bajo distintas condiciones lumínicas. El eje de tamaño óptico resulta idóneo para este fin al permitir el aumento del contraste y la robustez de los glifos sin alterar sus dimensiones principales. Para lograr este objetivo el sistema establece una relación inversa donde una menor iluminación ambiental corresponde a un mayor valor del eje de tamaño óptico, logrando que la tipografía resulte más perceptible en condiciones de escasez lumínica. Esta capacidad de ajuste automático mejora la experiencia general y representa un avance significativo en accesibilidad al ofrecer un apoyo visual dinámico a personas con baja visión o dificultades de lectura prescindiendo de cualquier intervención manual.

Las pruebas empíricas revelaron la necesidad de ajustar la respuesta de la tipografía al tipo de pantalla. Mientras una correspondencia lineal entre la luz y el tamaño óptico resulta suficiente en dispositivos de tinta electrónica, las pantallas de los teléfonos móviles, caracterizadas por su menor tamaño y el uso de retroiluminación, requieren una progresión exponencial para generar una adaptación visual verdaderamente efectiva.

### Apuntes para el desarrollo del modelo
La experimentación con este segundo prototipo establece una conclusión determinante sobre la lógica de transformación del futuro modelo en relación con la usabilidad y la experiencia de lectura. A diferencia de las interacciones orientadas a la expresividad, este caso de estudio demuestra que la tipografía interactiva posee la capacidad de operar de forma silenciosa y automática para asistir al usuario sin distraerle. Al vincular los datos lumínicos al eje de tamaño óptico, el sistema modifica el tono de los glifos para compensar la escasez de luz ambiental manteniendo intactas las dimensiones espaciales de los caracteres, lo cual garantiza la ausencia de saltos de línea indeseados. Este hallazgo confirma que el mecanismo encargado de traducir los datos debe ser lo suficientemente flexible para dar soporte a todo tipo de proyectos, abarcando con el mismo rigor desde soluciones estrictamente funcionales hasta propuestas formales o artísticas.

A partir de esta premisa queda en evidencia el potencial de la tipografía interactiva como herramienta para mejorar la accesibilidad al texto digital manteniendo la codificación de los caracteres. El prototipo valida empíricamente la viabilidad de articular sistemas de adaptación visual capaces de asistir al usuario de manera automática mediante la transformación de la morfología tipográfica en favor de la legibilidad.

En el plano técnico, el desarrollo de este sistema evidencia que la correspondencia entre los valores de entrada y la variación tipográfica carece de una formulación matemática universal. La traducción de los datos exige supeditarse siempre a las particularidades de cada proyecto. En este caso concreto, factores tangibles como el tamaño de la pantalla o la presencia de retroiluminación determinan directamente si la progresión requiere un cálculo lineal o exponencial. Este hallazgo fundamenta la arquitectura del modelo al demostrar la necesidad de incorporar una fase de calibración previa donde el diseñador evalúe y ajuste los parámetros a las condiciones específicas y al contexto tecnológico de su propuesta.

<a href="https://github.com/ivan-huelves/Sensor-Variable-Font_iluminacion" target="_blank" rel="noopener noreferrer">Más información en Github</a>