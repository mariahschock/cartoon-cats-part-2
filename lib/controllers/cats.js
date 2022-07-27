const { Router } = require('express');
const { cats } = require('../../data/cats');
const router = Router();

router
  .get('/:id', (req, res) => {
    // console.log('id param:', req.params.id);
    const cat = cats.find((cat) => cat.id === req.params.id);
    res.json(cat);
  })
  .get('/', (req, res) => {
    // console.log(cats);
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    // console.log(ids);
    res.json(ids);
  });

module.exports = router;
