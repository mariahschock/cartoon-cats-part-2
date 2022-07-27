const { Router } = require('express');
const Cat = require('../models/Cat');
const router = Router();

router
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const cat = await Cat.getById(req.params.id);
    console.log(cat);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    // console.log(cats);
    const cats = await Cat.getAll();
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    // console.log(ids);
    res.json(ids);
  });

module.exports = router;
