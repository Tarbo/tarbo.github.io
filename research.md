<!-- filepath: /Users/ezeme.okwudili/Desktop/tarbo.github.io/research.md -->
---
layout: default
title: Research
---

# Research

Access my academic research and publications.

<p>
  Visit my <a href="https://scholar.google.com">Google Scholar</a> and
  <a href="https://www.researchgate.net">ResearchGate</a> profiles.
</p>

{% for paper in site.research %}
- [{{ paper.title }}]({{ paper.url }})
{% endfor %}