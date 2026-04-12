---
layout: page
title: Prototipos
permalink: /prototypes/
---

<div class="posts">
  {% for prototipo in site.prototypes %}
    <article class="post">
      <h1><a href="{{ site.baseurl }}{{ prototipo.url }}">{{ prototipo.title }}</a></h1>
      <div class="entry">
        {{ prototipo.excerpt }}
      </div>
      <a href="{{ site.baseurl }}{{ prototipo.url }}" class="read-more">Leer artículo completo</a>
    </article>
  {% endfor %}
</div>