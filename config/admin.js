module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a125688ec96ef9686c1228a9375ba3be'),
  },
});
