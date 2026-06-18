# Candelaria Ferreyro | Contadora Pública

Sitio web / landing page de servicios contables de Candelaria Ferreyro.

🌐 **Sitio en producción:** https://candelariacontadora.com

## Stack

- HTML5 + CSS3 (sin frameworks ni build step)
- Fuentes: Google Fonts (Playfair Display, DM Sans)
- Calendly (widget embebido para agendar llamadas)
- Hosting: [Netlify](https://netlify.com)
- Dominio: comprado en [Namecheap](https://namecheap.com)

## Estructura

```
.
├── index.html              # Página principal (landing completa)
├── styles.css              # Estilos del sitio
├── favicon.png
└── img/
    ├── optimized/           # Imágenes en formato webp, en 3 resoluciones (320/640/1024)
    ├── whatsapp-icon.svg
    └── og-preview-v1.jpg, og-preview-v2.jpg   # Imágenes para preview en redes/WhatsApp
```

## Desarrollo local

No requiere build. Para previsualizar localmente:

```bash
# Opción simple: abrir index.html directamente en el navegador
open index.html

# O levantar un servidor local
python3 -m http.server 8000
# luego visitar http://localhost:8000
```

## Despliegue

El sitio se despliega automáticamente en Netlify con cada push a la rama `main`.

## Pendientes / Roadmap

- [ ] Reemplazar placeholder de Calendly (`TU_USUARIO_CALENDLY`) por el link real
- [ ] Reemplazar placeholder de Instagram (`TU_USUARIO_IG`) por el usuario real
- [ ] Agregar Google Analytics 4
- [ ] Agregar Google Search Console + sitemap.xml
- [ ] Agregar datos estructurados Schema.org (LocalBusiness / AccountingService)
- [ ] Arreglar link del footer "Bueno Studio" (actualmente `#`)
