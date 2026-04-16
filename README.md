# EMILMAIR · Landing

Página institucional para EMILMAIR — venta de máquinas de jardín, repuestos y servicio técnico.

## Estructura

```
emilmair/
├── index.html   ← estructura y contenido
├── styles.css   ← estilos (paleta blanco / negro / naranja)
└── script.js    ← interacciones (formulario a WhatsApp, scroll reveal)
```

Sin frameworks. HTML/CSS/JS puros, igual que `futbolpro.com.ar`.

## Cómo reemplazar los placeholders

Buscá y reemplazá en `index.html` estos textos:

| Placeholder | Qué poner |
|---|---|
| `PLACEHOLDER_WHATSAPP` | Número de WhatsApp en formato internacional sin `+` ni espacios. Ej: `5492611234567` |
| `[CALLE Y NÚMERO]` | Dirección del local |
| `[LOCALIDAD, PROVINCIA]` | Ej: `Villa Tulumaya, Mendoza` |
| `[+54 9 XXX XXX-XXXX]` | Teléfono para mostrar |
| `[contacto@emilmair.com.ar]` | Email |
| `[AÑO]` | Año de fundación del local |
| `[CIUDAD]` | Ciudad |

`PLACEHOLDER_WHATSAPP` aparece en 3 lugares: botón del header, formulario (en `script.js`) y botón flotante verde.

### Mapa

El mapa actual apunta a Mendoza capital por defecto. Para ajustarlo a la dirección real:

1. Entrá a https://www.openstreetmap.org
2. Buscá tu dirección, hacé clic derecho → "Mostrar dirección"
3. Copiá las coordenadas (lat, lon)
4. En `index.html` reemplazá los números en el `<iframe>` del mapa

O si preferís Google Maps: reemplazá todo el `<iframe>` por el que te da Google Maps → Compartir → Insertar mapa.

## Subir a Vercel

### Opción 1 — Vercel CLI (rápido)
```bash
npm i -g vercel
cd emilmair
vercel
```
Seguí los pasos, elegí cuenta, nombre del proyecto (`emilmair`), y listo. Después `vercel --prod` para producción.

### Opción 2 — GitHub + Vercel (recomendado)
1. Subí la carpeta `emilmair/` a un repo de GitHub.
2. En Vercel → **Add New → Project** → importá el repo.
3. Framework preset: **Other** (estático). Build command: vacío. Output directory: `.`
4. Deploy.

### Dominio
Una vez deployado, en Vercel → Project → Settings → Domains, agregá tu dominio custom (ej: `emilmair.com.ar`) y seguí las instrucciones de DNS (igual que hiciste con futbolpro).

## Notas de diseño

- **Paleta**: blanco dominante, negro para contrastes fuertes (sección servicio, footer, ticker), naranja `#ff6b00` como acento.
- **Tipografía**: Archivo (display), Archivo Narrow (eyebrows/labels), Inter (body).
- **Responsive**: breakpoints en 960px, 880px, 820px, 760px, 600px.
- **Accesibilidad**: respeta `prefers-reduced-motion`, labels en todos los inputs, landmarks semánticos.
