import { defineConfig } from 'vite';

export default defineConfig( {
	test: {
		environment: "jsdom",
		coverage:{
			provider: 'istanbul', // or 'v8'

			reporter: [ 'html'], // Defino los formatos de reporte
			exclude: ['node_modules/', 'src/context/', 'src/App.tsx', 'src/main.tsx'], // Archivos/carpetas a excluir
			// // all: true, // Incluye todos los archivos aunque no se testen
  			include: ['src/**/*.{js,jsx,ts,tsx}'], // Incluye solo los archivos específicos
			// exclude: ['node_modules', 'dist', 'tests'], // Excluye archivos/carpetas
			// lines: 80, // Umbral mínimo de líneas cubiertas (porcentaje)
			// branches: 80, // Umbral mínimo de ramas cubiertas
			// functions: 80, // Umbral mínimo de funciones cubiertas
			// statements: 80, // Umbral mínimo de declaraciones cubiertas
		}
	},
});