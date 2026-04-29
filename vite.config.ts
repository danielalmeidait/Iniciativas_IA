/**
 * @file vite.config.ts
 * @description Configuração do servidor de desenvolvimento e build da aplicação.
 *
 * Plugins utilizados:
 * - @vitejs/plugin-react: suporte a JSX/TSX com Fast Refresh
 * - @tailwindcss/vite: integração nativa do Tailwind CSS v4
 */

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],
    base: '/Iniciativas_IA/',

    define: {
      // Expõe a variável de ambiente GEMINI_API_KEY para o bundle do cliente.
      // Necessário pois o Vite não expõe process.env por padrão em ESM.
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        // Alias "@" aponta para a raiz do projeto — permite imports como "@/src/types"
        '@': path.resolve(__dirname, '.'),
      },
    },

    server: {
      // HMR é desativado via variável de ambiente DISABLE_HMR.
      // Usado em ambientes de edição por agente para evitar flickering durante edições.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
