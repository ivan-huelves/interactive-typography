---
layout: post
title: "Prototipo número siete. Representación de la acción colectiva mediante una instalación tipográfica participativa"
date: 2019-06-12
categories: prototypes
author: "Iván Huelves Illas"
---

![Acción colectiva 01]({{ site.baseurl }}/images/prototypes/cap04_07_participativa-01.png)

### Clasificación
* Función Narrativa social
* Contexto Investigación / Experimental
* Grado de interactividad Interacción débil o reactiva
* Input multimodal No
* Tipo de input Datos externos
* Tipo de output Transformación morfológica
* Tecnología empleada Tipografía variable, Arduino, Web Serial API, JavaScript, CSS
* Alfanumérica Sí
* Mantiene codificación textual Sí

### Descripción
El séptimo prototipo profundiza en la aplicación de la tipografía interactiva para abordar cuestiones de índole sociológica, dando continuidad a la temática del caso anterior. En esta ocasión el foco se traslada desde el aislamiento individual de las redes sociales hacia la participación física mediante una instalación que requiere la colaboración colectiva para descifrar un mensaje. El proyecto se fundamenta en el concepto de masa crítica, entendido aquí como el umbral de asistencia necesario para lograr la manifestación de un fenómeno. El objetivo consiste en articular una metáfora de la acción ciudadana donde un texto con un manifiesto inédito permanece ilegible hasta alcanzar un número suficiente de personas reunidas en el espacio de la instalación. El sistema funciona mediante una lógica de acumulación donde el *input* principal consiste en la cuantificación de personas detectadas en el espacio expositivo, actuando directamente sobre el eje de variación de la fuente tipográfica diseñada específicamente para el proyecto.

El sistema utiliza la tipografía de código libre *Inter* como base para articular su comportamiento visual. Con el objetivo de alcanzar el efecto de ocultación y generar un diseño maestro intermedio conservando la compatibilidad técnica de los trazados, la programación de un *script* de Python sustituye a la edición manual de los glifos. Esta automatización resulta fundamental para la edición tipográfica avanzada al resolver cálculos geométricos inasumibles mediante métodos manuales. El algoritmo accede a la estructura interna de la fuente para recorrer secuencialmente los nodos de cada carácter aplicando una fórmula de interpolación lineal. Este procedimiento calcula la posición exacta de cada punto en el nuevo diseño maestro, garantizando una interpolación libre de errores de compatibilidad y demostrando que el uso de código expande las capacidades del diseñador para generar tipografías variables complejas. El eje de variación resultante se estructura a través de tres diseños maestros denominados Ilegible (valor 0), Ilegible medio (valor 7) y Legible (valor 10).

![Acción colectiva 08]({{ site.baseurl }}/images/prototypes/cap04_07_participativa-08.png)<br>
![Acción colectiva 09]({{ site.baseurl }}/images/prototypes/cap04_07_participativa-09.png)

La decisión de incorporar un diseño maestro intermedio frente a la convención habitual de utilizar únicamente dos, junto con su ubicación específica en el valor 7, tiene como objetivo alterar la progresión lineal de la transformación para retener la ilegibilidad durante la mayor parte de la experiencia. Al evitar situarse en el punto medio del eje, el sistema logra que los caracteres conserven una morfología abstracta capaz de imposibilitar la lectura aun cuando el espacio alcanza la mitad de la asistencia requerida. Para asegurar este efecto, el *script* configura el diseño Ilegible medio aplicando un factor de mezcla encargado de conservar un ochenta y cinco por ciento de la masa del bloque y permitir vislumbrar únicamente un quince por ciento de la morfología original del glifo. Esta decisión de diseño genera una tensión narrativa destinada a retrasar deliberadamente el reconocimiento visual. Finalmente, solo cuando el sensor registra el umbral predefinido de 30 personas, el sistema avanza hasta el valor máximo de 10 y activa el diseño Legible, revelando el mensaje de forma totalmente nítida. Esta interacción funciona como una metáfora visual de la acción colectiva al sugerir que una reivindicación carece de impacto de forma aislada y solo adquiere sentido al vincular la presencia física y la participación ciudadana hasta alcanzar la masa crítica necesaria.

Para el desarrollo técnico de este prototipo y las correspondientes pruebas empíricas en un entorno de laboratorio, el sistema emplea un *hardware* compuesto por una placa Arduino conectada a un sensor de movimiento, configurado de manera específica para minimizar los tiempos de bloqueo y registrar fluidamente el paso de las personas. Resulta pertinente señalar que un despliegue del sistema en un entorno de producción real exigiría sustituir este componente por tecnologías de *computer vision* para garantizar un conteo de mayor precisión. No obstante, la elección del sensor infrarrojo responde a la optimización de los recursos disponibles para la simulación, subrayando que el propósito central de esta tesis radica en explorar el potencial de significación de la tipografía interactiva y no en la ingeniería del sistema de captura de datos. Por otro lado, el proyecto adopta la *Web Serial API* para que el navegador web se comunique directamente con la placa a través del puerto USB, simplificando la infraestructura de la instalación y optimizando la latencia en la transmisión de los datos.

![Acción colectiva 01]({{ site.baseurl }}/images/prototypes/cap04_07_participativa-01.png)<br>
![Acción colectiva 02]({{ site.baseurl }}/images/prototypes/cap04_07_participativa-02.png)<br>
![Acción colectiva 03]({{ site.baseurl }}/images/prototypes/cap04_07_participativa-03.png)<br>
![Acción colectiva 04]({{ site.baseurl }}/images/prototypes/cap04_07_participativa-04.png)<br>
![Acción colectiva 05]({{ site.baseurl }}/images/prototypes/cap04_07_participativa-05.png)<br>
![Acción colectiva 06]({{ site.baseurl }}/images/prototypes/cap04_07_participativa-06.png)<br>
![Acción colectiva 07]({{ site.baseurl }}/images/prototypes/cap04_07_participativa-07.png)<br>

### Apuntes para el desarrollo del modelo
El análisis de este séptimo prototipo aporta una dimensión esencial para la construcción del futuro modelo al introducir la variable de la interacción acumulativa. A diferencia de los casos orientados a la reactividad individual o ambiental, este experimento demuestra que la transformación morfológica posee la capacidad de vincularse a la suma secuencial de acciones de múltiples usuarios. Este hallazgo establece que la arquitectura del sistema requerirá contar con la capacidad de guardar el registro continuo de los datos de entrada para generar interacciones basadas en la acumulación secuencial de valores.

En este prototipo el diseño maestro intermedio se desplaza hacia un valor avanzado del eje de variación para evitar la legibilidad prematura del texto. Esta decisión proyectual demuestra que la manipulación de la línea de interpolación de la tipografía variable permite influir directamente en los procesos de significación. Como resultado se establece que el futuro modelo no debe limitarse a una transformación morfológica lineal de la tipografía, requiriendo permitir al diseñador programar el tiempo y la velocidad de la transformación para aumentar el valor narrativo del mensaje.

Finalmente, el uso de la *Web Serial API* permite al navegador comunicarse directamente con el *hardware* prescindiendo de programas intermedios. Al eliminar el servidor utilizado en pruebas anteriores, el sistema consigue que los datos lleguen de forma más rápida y que el montaje resulte considerablemente más sencillo. Se concluye por tanto que el futuro modelo requiere apostar por estas conexiones directas para reducir los errores técnicos y facilitar la creación de sistemas tipográficos interactivos en el entorno web.

<a href="{{ site.baseurl }}/prototypes/collective-typography/" target="_blank" rel="noopener noreferrer">Ver prototipo en funcionamiento</a>