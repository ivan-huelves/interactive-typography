---
layout: page
title: Proyectos Tipografía y edición experimental
permalink: /teaching/
---

Análisis de los proyectos realizados por los estudiantes

---

### Explorar por Función
<div class="nav-links">
<p>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/accesibilidad/">Accesibilidad</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/exploracion-formal-y-o-performativa/">Exploración formal y/o performativa</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/expresion-paralinguistica/">Expresión paralingüística</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/identidad-visual/">Identidad visual</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/narrativa-social/">Narrativa social</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/sistema-de-diseno-tipografico/">Sistemas de diseño</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/visualizacion-de-datos/">Visualización de datos</a>
</p>
</div>

### Explorar por Grado de interactividad
<div class="nav-links">
<p>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/interaccion-debil-o-reactiva/">Débil o reactiva</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/interaccion-fuerte-o-mutua/">Fuerte o mutua</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/interaccion-generativa/">Generativa</a>
</p>
</div>

### Explorar por Tipo de interacción según el input
<div class="nav-links">
<p>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/algoritmo/">Algoritmo</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/controlador-fisico/">Controlador físico</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/datos-externos/">Datos externos</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/gestual/">Gestual</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/perifericos-convencionales/">Periféricos convencionales</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/sonido/">Sonido</a>
</p>
</div>

### Otras características
<div class="nav-links">
<p>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/multimodal-si/">Input Multimodal</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/codificacion-textual-si/">Mantiene codificación textual</a>
<a href="{{ site.baseurl }}/etiquetas-tipografiaexperimental/codificacion-textual-no/">Pierde codificación textual</a>
</p>
</div>

---

### Proyectos analizados

<div class="project-grid">
  {% for proyecto in site["referentes-tipografiaexperimental"] %}
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
