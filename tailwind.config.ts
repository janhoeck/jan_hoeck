import type { Config } from 'tailwindcss'
import theme from './src/tools/theme/theme'

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme,
  plugins: [],
}
export default config
