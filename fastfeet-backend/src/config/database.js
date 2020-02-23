module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'fastfeet',
  define: {
    timestampss: true,
    underscored: true,
    underscoredAll: true,
  },
};
