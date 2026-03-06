import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/e-plantShopping",  // your exact repo name
  plugins: [react()],
})
