---
layout: post
title: "Prototipo número uno. Sistema tipográfico de alerta por proximidad para interfaces de conducción"
date: 2019-06-12
categories: prototypes
author: "Iván Huelves Illas"
---

<div style="padding:56.25% 0 0 0;position:relative;margin-bottom:2rem;">
    <iframe src="https://player.vimeo.com/video/341418395?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>

### Clasificación
* Función Visualización de datos
* Contexto Investigación / Experimental
* Grado de interactividad Interacción débil o reactiva
* Input multimodal No
* Tipo de input Datos externos
* Tipo de output Transformación morfológica
* Tecnología empleada Tipografía variable, Arduino, JavaScript, CSS
* Alfanumérica Sí
* Mantiene codificación textual Sí

### Descripción
Este primer prototipo simula la interfaz del ordenador de a bordo de un automóvil para explorar cómo la tipografía interactiva puede funcionar como un sistema de alerta visual. La interacción se fundamenta en la relación entre la distancia del vehículo respecto a un objeto externo (otro vehículo o peatones) y la variación en el peso de los caracteres mostrados en pantalla. Para advertir al conductor de una posible colisión se estableció que el peso de los glifos debía aumentar a medida que la distancia disminuyera. Esta relación inversa busca atraer la atención del usuario de manera proporcional al riesgo.

Para simular el comportamiento del sensor y llevar a cabo las pruebas empíricas en un contexto de laboratorio, el desarrollo de este prototipo emplea la plataforma de *hardware* libre Arduino. Esta tecnología permite conectar los componentes físicos con el *software* encargado de controlar la tipografía, facilitando así la recreación de las interacciones espaciales de manera controlada. 

El sistema consta de dos componentes principales donde, por un lado, integra un *input* de datos proveniente de un sensor de ultrasonidos encargado de registrar la distancia y, por otro lado, presenta un *output* visual mediante la tipografía variable *Kairos Sans* a través de su eje de variación de peso. Para esta simulación se acotó el rango del sensor a una detección entre 2 y 40 centímetros con una frecuencia de actualización de 100 milisegundos. El eje de peso de la tipografía abarca un rango de valores de 250 (*light*) a 900 (*black*).

Durante las pruebas se comprobó que una progresión lineal en la variación del peso carecía de la visibilidad necesaria. Para lograr que el cambio resultase evidente en distancias cortas y críticas se implementó un incremento exponencial, intensificando la alerta visual a medida que el peligro de colisión se vuelve inminente. El sistema transfiere este valor resultante directamente al eje de variación de peso de los caracteres numéricos encargados de representar la distancia.

![Alerta por proximidad 01]({{ site.baseurl }}/images/prototypes/cap04_01_sensor-distancia-02.jpg)<br>
![Alerta por proximidad 02]({{ site.baseurl }}/images/prototypes/cap04_01_sensor-distancia-03.jpg)

### Apuntes para el desarrollo del modelo
El diseño de este prototipo aporta un principio metodológico clave para el futuro modelo al demostrar que la intención comunicativa debe prevalecer sobre la correspondencia técnica de los datos. En este caso particular, donde se busca una relación inversa entre el *input* y el *output* (a menor distancia corresponde mayor peso), resulta preciso definir la relación conceptual antes de vincular los datos con la tipografía. Este hallazgo demuestra que en ocasiones los datos carecen de valor semántico por sí mismos y requieren que el diseñador determine la correspondencia de valores desde la fase de ideación. Dicha decisión simplifica la lógica de implementación técnica al alinear la escala de normalización con el objetivo visual, lo cual confirma que el modelo debe integrar una etapa de definición significativa donde la intención comunicativa ordene el resto de decisiones.

Adicionalmente, la experimentación práctica con este primer prototipo arroja una segunda conclusión para la estructura del modelo al evidenciar la brecha existente entre la recolección de datos físicos y la percepción humana. Durante la fase de pruebas se constató que una traducción matemática lineal de la distancia al peso tipográfico resultaba ineficaz para transmitir una sensación real de alerta. La necesidad de implementar un incremento exponencial demuestra que la urgencia cognitiva no opera de forma constante, sino que requiere una dramatización visual en los instantes más críticos. Este descubrimiento justifica empíricamente la exigencia de incorporar al modelo un mecanismo de significación capaz de alterar la traducción literal de los datos. Se confirma así que el diseño con tipografía interactiva puede trascender la visualización cuantitativa.

<a href="https://github.com/ivan-huelves/Sensor-Variable-Font_distancia" target="_blank" rel="noopener noreferrer">Más información en Github</a>