// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//   alias: {
//     '@components': '/src/components',
//   },
// },

// })
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // تحديد حد التحذير لحجم الحزمة
    chunkSizeWarningLimit: 1000, // تعيين الحد إلى 1 ميغابايت
    
    // إعدادات تقسيم الحزم باستخدام manualChunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          // فصل مكتبة Lodash في حزمة منفصلة
          if (id.includes('node_modules/lodash')) {
            return 'lodash';
          }
          // فصل مكتبات React و React DOM في حزمة مشتركة
          if (id.includes('node_modules/react')) {
            return 'react-vendor';
          }
          // يمكن إضافة مكتبات إضافية حسب الحاجة
        }
      }
    }
  }
});
