---
layout: post
title: "Prototipo número cinco. Identidad visual dinámica reactiva a la calidad del aire local"
date: 2019-06-12
categories: prototypes
author: "Iván Huelves Illas"
---

![Calidad del aire 01]({{ site.baseurl }}/images/prototypes/cap04_05_logo-air-00.png)


### Clasificación
* Función Identidad visual
* Contexto Investigación / Experimental
* Grado de interactividad Interacción débil o reactiva
* Input multimodal No
* Tipo de input Datos externos
* Tipo de output Transformación morfológica
* Tecnología empleada Tipografía variable, JavaScript, CSS
* Alfanumérica Sí
* Mantiene codificación textual Sí

### Descripción
Este quinto prototipo explora la aplicación de la tipografía interactiva en el desarrollo de identidades visuales dinámicas, un campo de creciente interés en el ámbito del *branding*. El proyecto consiste en el rediseño conceptual del logotipo de una organización no gubernamental ecologista. El objetivo radica en transformar un identificador estático en un elemento interactivo capaz de adaptarse en tiempo real al nivel de calidad del aire de la ciudad desde donde el usuario accede a la plataforma web o en la cual se ubique un soporte digital institucional durante una campaña.

La interacción se fundamenta en la visualización gráfica de la contaminación atmosférica. Para lograrlo el sistema emplea una tipografía variable diseñada específicamente a partir del logotipo de la organización, incorporando formas circulares ocultas dentro de la estructura original de los caracteres. La transformación morfológica establece una relación directa con el nivel de polución ambiental de las ciudades. En condiciones atmosféricas óptimas los glifos mantienen la forma original de la tipografía corporativa. Conforme los índices de contaminación aumentan estos círculos internos crecen de tamaño y se expanden para simular la acumulación de partículas en suspensión nocivas para la salud. Al alcanzar niveles máximos de toxicidad el crecimiento de estas formas satura el espacio negativo y positivo de los glifos provocando la ilegibilidad del nombre de la organización. Esta alteración morfológica transmite una sensación de asfixia visual alineada con la misión ecologista de la entidad.

El desarrollo de esta tipografía requirió el uso de *software* de edición de fuentes para alterar la estructura original de los caracteres corporativos. El proceso de diseño consistió en insertar formas circulares dentro del trazado base de las letras. Mediante la configuración del eje de variación, la interpolación vincula el crecimiento de estos círculos internos con el aumento de la contaminación. Cuando el parámetro alcanza su valor máximo de cien, la expansión de los elementos geométricos evidencia la saturación total del espacio visual, anulando por completo la legibilidad del glifo original.

![Calidad del aire 05]({{ site.baseurl }}/images/prototypes/cap04_05_logo-air-04.png)<br>
![Calidad del aire 06]({{ site.baseurl }}/images/prototypes/cap04_05_logo-air-05.png)

Una particularidad técnica de este proyecto es la integración del logotipo directamente dentro del archivo de la fuente. En lugar de utilizar un archivo externo, el logotipo se creó como un nuevo carácter. Para asegurar que los símbolos ortográficos convencionales queden libres para la redacción normal de textos, el desarrollo incorpora una alternativa contextual programada mediante funciones *OpenType*. Esta estrategia resulta funcional y fácilmente adoptable por los estudios de diseño para optimizar el flujo de trabajo con tipografías corporativas personalizadas, ya que permite a los diseñadores aplicar la identidad visual mediante la simple escritura, eliminando la necesidad de localizar y enlazar archivos de imagen externos. La interpolación morfológica se controla mediante un eje de variación personalizado el cual abarca un rango de valores de 0 a 100 para ajustarse a los datos medioambientales consultados en la API sin necesidad de normalizar los valores.

El desarrollo técnico se articula mediante tecnologías web estándar utilizando HTML, CSS y JavaScript, una decisión que permite prescindir por completo de sensores físicos y servidores intermediarios. El sistema recurre a servicios web de datos abiertos para obtener flujos de información en tiempo real. En primer lugar, el código geolocaliza la ciudad del usuario a partir de su dirección de protocolo de internet. Posteriormente consulta el Índice de Calidad del Aire Europeo a través de un servicio meteorológico. Este índice pondera las mediciones actuales de los principales agentes contaminantes para ofrecer una métrica del estado ambiental local. Finalmente una función matemática captura este valor numérico y lo transfiere mediante variables CSS al eje de variación de la tipografía. Para facilitar la comprobación de los datos de calidad de aire de otras ciudades se implementó un menú desplegable en la interfaz gráfica que permite simular la conexión desde diferentes ubicaciones.

![Calidad del aire 02]({{ site.baseurl }}/images/prototypes/cap04_05_logo-air-01.png)<br>
![Calidad del aire 03]({{ site.baseurl }}/images/prototypes/cap04_05_logo-air-02.png)<br>
![Calidad del aire 04]({{ site.baseurl }}/images/prototypes/cap04_05_logo-air-03.png)<br>

### Apuntes para el desarrollo del modelo
El diseño de este quinto prototipo expande la viabilidad técnica del futuro modelo al demostrar su capacidad para operar con flujos de datos remotos. A diferencia de los casos anteriores basados en la conexión local de *hardware* analógico, este proyecto valida la integración de información en tiempo real mediante el uso de interfaces de programación de aplicaciones y sistemas de geolocalización. Este hallazgo resulta metodológicamente relevante al confirmar que la arquitectura del sistema logra desvincularse del entorno físico inmediato para procesar variables globales y adaptarlas al contexto del usuario.

En paralelo, este prototipo aporta una directriz fundamental sobre la relación entre el diseño tipográfico y la fase de normalización de datos. Al diseñar un eje de variación personalizado cuyo rango numérico coincide de manera exacta con la escala de medición del índice de calidad del aire, el sistema suprime la necesidad de aplicar cálculos matemáticos de interpolación en el código de la interfaz. Esta eficiencia se multiplica al integrar el comportamiento del logotipo mediante codificación nativa *OpenType*. Se concluye por tanto que el futuro modelo requiere contemplar la creación tipográfica a medida como una vía para optimizar tanto el desarrollo técnico como el potencial semántico del sistema interactivo.

Finalmente, este prototipo confirma el potencial del modelo conceptual para el desarrollo de identidades visuales dinámicas. Se demuestra empíricamente que la alteración de la morfología del logotipo en función de datos externos permite alinear la forma gráfica con el propósito comunicativo de la entidad. Este planteamiento evidencia que la tipografía interactiva proporciona a las marcas la capacidad de operar como elementos paramétricos vivos capaces de reaccionar en tiempo real a su contexto.

<a href="{{ site.baseurl }}/prototypes/brand-clean-air/" target="_blank" rel="noopener noreferrer">Ver prototipo en funcionamiento</a>