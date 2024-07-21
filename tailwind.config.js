/** @type {import('tailwindcss').Config} */
export default {
  // 为了防止和组件库 vuetify 中的 tailwind 冲突，这里使用了自定义前缀 vue-playground (vp)
  prefix: 'vp-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    spacing: {
      0: '0px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      36: '36px',
      40: '40px',
    },
  },
  plugins: [],
};
