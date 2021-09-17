import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
  },
  plugins: [reactRefresh()],
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `import { jsx } from "@emotion/react"`,
  },
})
