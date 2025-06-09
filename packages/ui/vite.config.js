/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import { adapter, analyzer } from 'vite-bundle-analyzer'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, './src/index.ts'),
        typography: resolve(__dirname, './src/components/Typography/index.ts'),
        timeline: resolve(__dirname, './src/components/Timeline/index.ts'),
        styles: resolve(__dirname, './src/styles/styles.css'),
      },
    },
    rollupOptions: {
      treeshake: 'smallest',
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: [
        {
          format: 'es',
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          exports: 'named',
        },
        {
          format: 'cjs',
          preserveModulesRoot: 'src',
          entryFileNames: '[name].cjs',
          chunkFileNames: '[name].cjs',
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'react/jsx-runtime',
          },
        },
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
    cssCodeSplit: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    dts({
      rollupTypes: true,
      insertTypesEntry: true,
    }),
    //adapter(analyzer())
  ],
})
