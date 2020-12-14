module.exports = (err, req, res, next) => {

  if(err && !err.errors)
    res.status(500).json({
      message: "Ocorreu um erro inesperado, entre em contato com o suporte",
      date: new Date()
    })

  if (err.errors) {
    res.status(400).json({
      message: err.errors,
      status: "BAD_REQUEST",
      date: new Date()
    });
    return;
  } else {
    next();
  }
}
