db.produtos.find({}, {
  $set: {
    criadoPor: "Ronald McDonald",
  },
});

db.produtos.find({}, {
  nome: true,
  criadoPor: true,
  _id: false,
});