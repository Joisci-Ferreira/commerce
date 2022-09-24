db.produtos.find({
  $and: [
    { vendidos: { $gt: 50 } },
    { tags: { $exists: false } },
  ],
}, {
  nome: true,
  vendidos: true,
  _id: false,
}); 