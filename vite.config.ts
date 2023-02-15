import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
// import pages, { DefaultPageStrategy } from 'vite-plugin-react-pages'

 
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), Pages({
        dirs: 'src/pages',
    })]
})
