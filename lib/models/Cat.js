const pool = require('..utils/pool');

module.exports = class Cat {
  id;
  name;
  age;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.year = row.year;
    this.lives = row.lives;
    this.isSideKick = row.isSikeKick;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM cats;');
    return rows.map((row) => new Cat(row));
  }

  static async getById(id){
    const { rows } = await pool.query('SELECT * FROM cats WHERE id=$id;', [id]);
    if (!rows[0]) return null;

    return new Cat(rows[0]);
  }
};
