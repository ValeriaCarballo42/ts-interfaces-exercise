# TypeScript Interfaces Exercise

**Este repositorio NO compila a propósito.** Tu tarea es arreglarlo.

## Contexto

Esta es una app Next.js que consulta la API pública de [Open-Meteo](https://open-meteo.com/) para obtener datos meteorológicos de Córdoba, Argentina. Las interfaces de TypeScript están incompletas o mal declaradas, lo que produce errores al intentar hacer `npm run build`.

## Pasos

1. Hacé un **fork** de este repositorio.
2. Cloná tu fork en tu máquina.
3. Ejecutá:

```bash
npm install
npm run build   # 👈 vas a ver un montón de errores de TypeScript
```

4. Abrí el proyecto en tu editor y buscá todos los comentarios `// TODO`.
5. Resolvé cada TODO para que `npm run build` termine sin errores.

## Dónde están los TODOs

| Archivo | Qué tenés que hacer |
|---------|---------------------|
| `types/weather.ts` | Completar las interfaces, corregir tipos `any[]`, usar `extends` |
| `lib/weather.ts` | Revisar que el tipado de la respuesta sea correcto |
| `components/WeatherCard.tsx` | Declarar una interface para las props |
| `app/page.tsx` | Declarar una interface para el componente `DebugInfo` |

## Inspeccionar la respuesta real de la API

Abrí en el navegador:

```
https://api.open-meteo.com/v1/forecast?latitude=-31.42&longitude=-64.18&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m
```

Esto te muestra la estructura JSON real que necesitás tipear.

## Objetivo final

```bash
npm run build   # ✅ debe terminar sin errores de TypeScript
```

No necesitás instalar librerías externas. El ejercicio es puramente de **tipado estático** con `interface` y `extends`.
