db.produtos.find({
  ingredietes: { $size: 4 },
}).count();