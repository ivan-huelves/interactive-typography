---
layout: page
title: Marco de referencia
permalink: /teaching/
---

Análisis de referentes clasificados en el marco <br>de la investigación

---

### Explorar por Década
<div class="nav-links">
<p>
<a href="{{ site.baseurl }}/etiquetas/decada-de-1980/">Años 80</a>
<a href="{{ site.baseurl }}/etiquetas/decada-de-1990/">Años 90</a>
<a href="{{ site.baseurl }}/etiquetas/decada-de-2000/">Años 2000</a>
<a href="{{ site.baseurl }}/etiquetas/decada-de-2010/">Años 2010</a>
<a href="{{ site.baseurl }}/etiquetas/decada-de-2020/">Años 2020</a>
</p>
</div>

### Explorar por Función
<div class="nav-links">
<p>
<a href="{{ site.baseurl }}/etiquetas/accesibilidad/">Accesibilidad</a>
<a href="{{ site.baseurl }}/etiquetas/exploracion-formal-y-o-performativa/">Exploración formal y/o performativa</a>
<a href="{{ site.baseurl }}/etiquetas/expresion-paralinguistica/">Expresión paralingüística</a>
<a href="{{ site.baseurl }}/etiquetas/identidad-visual/">Identidad visual</a>
<a href="{{ site.baseurl }}/etiquetas/narrativa-social/">Narrativa social</a>
<a href="{{ site.baseurl }}/etiquetas/sistema-de-diseno-tipografico/">Sistemas de diseño</a>
<a href="{{ site.baseurl }}/etiquetas/visualizacion-de-datos/">Visualización de datos</a>
</p>
</div>

### Explorar por Contexto
<div class="nav-links">
<p>
<a href="{{ site.baseurl }}/etiquetas/branding/">Branding</a>
<a href="{{ site.baseurl }}/etiquetas/instalacion-artistica/">Instalación artística</a>
<a href="{{ site.baseurl }}/etiquetas/investigacion-experimental/">Investigación / Experimental</a>
<a href="{{ site.baseurl }}/etiquetas/producto-digital/">Producto digital</a>
</p>
</div>

### Explorar por Grado de interactividad
<div class="nav-links">
<p>
<a href="{{ site.baseurl }}/etiquetas/interaccion-debil-o-reactiva/">Débil o reactiva</a>
<a href="{{ site.baseurl }}/etiquetas/interaccion-fuerte-o-mutua/">Fuerte o mutua</a>
<a href="{{ site.baseurl }}/etiquetas/interaccion-generativa/">Generativa</a>
</p>
</div>

### Explorar por Tipo de interacción según el input
<div class="nav-links">
<p>
<a href="{{ site.baseurl }}/etiquetas/algoritmo/">Algoritmo</a>
<a href="{{ site.baseurl }}/etiquetas/controlador-fisico/">Controlador físico</a>
<a href="{{ site.baseurl }}/etiquetas/datos-externos/">Datos externos</a>
<a href="{{ site.baseurl }}/etiquetas/gestual/">Gestual</a>
<a href="{{ site.baseurl }}/etiquetas/perifericos-convencionales/">Periféricos convencionales</a>
<a href="{{ site.baseurl }}/etiquetas/sonido/">Sonido</a>
</p>
</div>

### Otras características
<div class="nav-links">
<p>
<a href="{{ site.baseurl }}/etiquetas/multimodal-si/">Input Multimodal</a>
<a href="{{ site.baseurl }}/etiquetas/codificacion-textual-si/">Mantiene codificación textual</a>
<a href="{{ site.baseurl }}/etiquetas/codificacion-textual-no/">Pierde codificación textual</a>
</p>
</div>

---

### Referentes analizados

<div class="project-grid">
  {% for proyecto in site.referentes %}
    <a href="{{ site.baseurl }}{{ proyecto.url }}" class="project-card">
      
      <div class="card-image">
        {% if proyecto.thumbnail and proyecto.thumbnail != "" %}
          <img src="{{ proyecto.thumbnail }}" alt="Imagen de {{ proyecto.title }}" loading="lazy">
        {% else %}
          <div style="width:100%; height:150px; background-color: #f4f4f4; display:flex; align-items:center; justify-content:center; color:#999; font-size: 0.8em;">
            Sin Previsualización
          </div>
        {% endif %}
      </div>

      <div class="card-content">
        <span class="card-title" style="display:block; font-weight:bold; margin-bottom:0.5rem;">
            {{ proyecto.title }}
        </span>
        <div class="card-meta" style="font-size: 0.9em; color: #666;">
          {{ proyecto.author }}
          <br>
          <span style="color: #999;">{{ proyecto.year }}</span>
        </div>
      </div>

    </a>
  {% endfor %}
</div>
