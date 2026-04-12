---
layout: post
title: "Prototipo número seis. Representación semántica de cámaras de eco y discurso de odio en redes sociales"
date: 2019-06-12
categories: prototypes
author: "Iván Huelves Illas"
---

![Cámaras de eco 01]({{ site.baseurl }}/images/prototypes/cap04_06_discourse-01.png)<br>
![Cámaras de eco 02]({{ site.baseurl }}/images/prototypes/cap04_06_discourse-02.png)<br>
![Cámaras de eco 03]({{ site.baseurl }}/images/prototypes/cap04_06_discourse-03.png)<br>
![Cámaras de eco 04]({{ site.baseurl }}/images/prototypes/cap04_06_discourse-04.png)<br>
![Cámaras de eco 05]({{ site.baseurl }}/images/prototypes/cap04_06_discourse-05.png)<br>
![Cámaras de eco 06]({{ site.baseurl }}/images/prototypes/cap04_06_discourse-06.png)

### Clasificación
* Función Narrativa social
* Contexto Investigación / Experimental
* Grado de interactividad Interacción débil o reactiva
* Input multimodal No
* Tipo de input Datos externos
* Tipo de output Transformación morfológica
* Tecnología empleada Tipografía variable, JavaScript, CSS
* Alfanumérica Sí
* Mantiene codificación textual Sí

### Descripción
El sexto prototipo aborda una problemática sociotecnológica contemporánea mediante el uso semántico de la tipografía interactiva. El proyecto busca representar visualmente dos fenómenos característicos de las interacciones en redes sociales que son las cámaras de eco y el discurso de odio. La propuesta consiste en una interfaz simulada de un muro de red social donde los mensajes polarizados sufren alteraciones morfológicas en función del análisis de su contenido. El objetivo radica en evidenciar a través de los propios caracteres cómo el filtrado algorítmico restringe la visión del mundo del usuario y cómo la violencia verbal contamina la comunicación. Para lograrlo, el sistema parte de la fuente de código abierto *Inter*, la cual fue modificada mediante *scripts* de Python para desarrollar una tipografía variable *ad hoc* articulada sobre dos ejes de variación semántica denominados Echo y Hate.

El eje Echo representa el concepto de cámara de eco o cierre epistémico. Cuando el sistema detecta que el contenido refuerza la ideología del usuario excluyendo puntos de vista divergentes, la tipografía reacciona estrechándose. Los glifos se condensan hacia una versión *narrow* y el *tracking* se reduce drásticamente. Esta transformación visual funciona como una metáfora directa de la estrechez de miras y el aislamiento informativo provocados por los algoritmos de recomendación. El eje Hate visualiza la intensidad del discurso de odio. Ante textos identificados como violentos o agresivos, la tipografía experimenta una expansión desproporcionada tanto horizontal como verticalmente. Además, el sistema aplica una distorsión morfológica para estirar la parte superior de los glifos y comprimir la inferior, generando un efecto visual de inestabilidad capaz de reflejar la naturaleza visceral de este tipo de mensajes.

La consecución de este efecto de inestabilidad visual requirió la programación de un *script* de Python. El algoritmo actúa directamente sobre la estructura de los glifos para generar un temblor morfológico aleatorio mediante una función denominada *jitter*. Al recorrer cada trazado de los glifos, el código reasigna la posición de los nodos aplicando un desplazamiento impredecible en sus coordenadas horizontales y verticales. Esta automatización técnica sustituye a la edición manual de miles de puntos, cuya manipulación individual resultaría inasumible en términos de tiempo y precisión para el diseño del prototipo. Asimismo, el procesamiento mediante código garantiza que los diseños maestros conserven la compatibilidad de contornos necesaria para la interpolación, asegurando que el orden y la cantidad de nodos permanezcan idénticos a pesar de la transformación generada. Este procedimiento permite que la tipografía adquiera una apariencia vibrante y agresiva, reforzando la metáfora del discurso de odio mediante una alteración orgánica que escapa al control del dibujo tipográfico tradicional.

Para la implementación técnica, el diseño plantea su arquitectura conceptual como una extensión del navegador web capaz de leer el contenido en tiempo real. Sin embargo, para aislar y validar exclusivamente el comportamiento tipográfico interactivo, el presente caso de estudio se ha desarrollado en fase *alpha* a modo de demostración técnica. En su estado actual el sistema no captura datos en vivo, sino que utiliza un *dataset* estático preconfigurado que simula los mensajes del muro de una red social para actuar como *input* dinámico. Para procesar estos datos el sistema emplea un motor de análisis léxico cerrado basado en diccionarios de términos predefinidos y listas de palabras tóxicas. Este enfoque permite calcular matemáticamente la homogeneidad del sentimiento y el nivel de toxicidad, transfiriendo esos valores mediante CSS a los ejes HATE y ECHO de la tipografía variable. No obstante, el desarrollo empírico establece la necesidad tecnológica futura donde para que el sistema sea viable en un entorno real será indispensable sustituir este análisis léxico por técnicas de Procesamiento del Lenguaje Natural mediante librerías de aprendizaje automático que ejecuten modelos de *stance detection* y análisis de sentimiento.

### Apuntes para el desarrollo del modelo
El análisis de este sexto prototipo supone una expansión conceptual para el futuro modelo al demostrar que la fuente de datos no requiere limitarse a mediciones físicas externas. Por el contrario, el proyecto evidencia la viabilidad de capturar información cualitativa mediante la integración de técnicas de procesamiento de lenguaje. Este hallazgo establece que el modelo conceptual debe estar preparado para asimilar conceptos abstractos (como el odio o el sesgo ideológico) y transformarlos mediante procesos de cuantificación en parámetros numéricos directamente vinculados con los ejes de variación tipográfica.

Por otro lado, este prototipo aporta una dinámica nueva al convertir el mensaje escrito en el desencadenante de su propia transformación. El sistema otorga al texto una doble función al utilizarlo como contenido de lectura y como *input* de datos, de modo que el significado semántico del mensaje altera directamente la forma de los glifos. Esta característica demuestra que el mecanismo de significación del futuro modelo poseerá la capacidad de aumentar las capas semánticas del texto, revelando de forma visual información implícita.

<a href="{{ site.baseurl }}/prototypes/echo-hate/" target="_blank" rel="noopener noreferrer">Ver prototipo en funcionamiento</a>