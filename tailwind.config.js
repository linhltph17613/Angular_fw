module.exports = {
  // daisy ui
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: them => ({
        'header-img': "url('https://i.imgur.com/D9hbg6J.jpg')",
        'home-banner': "url('https://i.imgur.com/U7UVfPa.jpg')",
        'banner-email': "url('https://i.imgur.com/NakfwCX.jpg')",
        'banner-pages': "url('https://i.imgur.com/35J0KJ3.jpg')"
      })
    },
  },
  plugins: [],
}
