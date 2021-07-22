import esbuild = require('esbuild')
import esbuildNodeExternals = require('esbuild-node-externals')
import glob = require('glob')

const isDev = process.env.NODE_ENV === '"development"'
const files = glob.sync('./src/**/*.ts', {
  ignore: './src/**/*.test.ts',
})

esbuild.build({
  target: 'es2015',
  bundle: true,
  entryPoints: files,
  outbase: './src',
  outdir: './dist',
  platform: 'browser',
  minify: !isDev,
  sourcemap: isDev,
  plugins: [esbuildNodeExternals.nodeExternalsPlugin()],
})
