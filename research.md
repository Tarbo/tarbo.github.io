---
layout: default
title: Research
---

# Research

Access my academic research and publications.

<p>
  Visit my <a href="https://tinyurl.com/dili-gs-publications">Google Scholar</a> and
  <a href="https://tinyurl.com/dili-rg-publications">ResearchGate</a> profiles for complete list of publications.
</p>

{% for paper in site.research %}
- [{{ paper.title }}]({{ paper.url }}) by {{ paper.author }}
{% endfor %}