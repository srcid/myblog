---
layout: papers
title: "Publicações"
permalink: "/papers"
---

{% assign sorted_papers = site.papers | sort: 'date' | reverse %}
{%- for paper in sorted_papers -%}
    {% include paper_item.html forloop=forloop paper=paper %}
{%- endfor -%}