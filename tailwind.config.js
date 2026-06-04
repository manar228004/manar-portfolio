/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      // ألوان فاتحة راقية جداً للخلفيات
      lightBg: '#F8FAFC',     // الخلفية الأساسية (Slate 50)
      lightCard: '#FFFFFF',   // خلفية الكروت
      primary: '#0284C7',     // أزرق حيوي واضح (Sky 600)
      secondary: '#7C3AED',   // لمسة موف جذابة للـ Gradients (Violet 600)
      accent: '#0EA5E9',      // لون إضاءة إضافي
      textColor: '#1E293B',   // لون النصوص الأساسية (Slate 800)
      subText: '#64748B',     // لون النصوص الفرعية (Slate 500)
    },
    animation: {
      'spin-slow': 'spin 8s linear infinite',
      'float': 'float 6s ease-in-out infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      }
    }
  },
},
  plugins: [],
}