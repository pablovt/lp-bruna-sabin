# Landing page · Bruna Sabin, Fisioterapeuta

Site estático em [Astro](https://astro.build), com CSS autoral.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:4321
npm run build    # gera a pasta dist/
npm run preview  # serve a pasta dist/
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos, WhatsApp, endereço, FAQ, depoimentos | `src/data/site.ts` |
| Cores e tipografia | `src/styles/tokens.css` |
| Seções da página | `src/components/` |
| Logo e fotos | `src/assets/` |

## Antes de publicar

1. Resolver os `TODO` (`grep -rn TODO src astro.config.mjs`).
2. Em `src/data/site.ts`, mudar `showDraftMarks` para `false` (remove as etiquetas de conteúdo provisório).
3. Ligar `showTestimonials` somente com depoimentos reais e autorizados.
4. Trocar o domínio em `astro.config.mjs`.

## Deploy

Vercel e Netlify detectam o Astro automaticamente: comando `npm run build`, pasta de saída `dist`.
