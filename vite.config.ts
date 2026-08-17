import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        login: path.resolve(__dirname, 'login.html'),
        onboarding: path.resolve(__dirname, 'onboarding.html'),
        dashboard: path.resolve(__dirname, 'dashboard.html'),
        courses: path.resolve(__dirname, 'courses.html'),
        course: path.resolve(__dirname, 'course.html'),
        lesson: path.resolve(__dirname, 'lesson.html'),
        exercises: path.resolve(__dirname, 'exercises.html'),
        profile: path.resolve(__dirname, 'profile.html'),
        settings: path.resolve(__dirname, 'settings.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
