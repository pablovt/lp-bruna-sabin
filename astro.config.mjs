import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: trocar pelo domínio definitivo antes de publicar
  site: 'https://brunasabin.com.br',
  integrations: [sitemap()],
});
