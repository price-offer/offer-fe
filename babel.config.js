module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-env',
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: ['jotai/babel/plugin-react-refresh']
}
