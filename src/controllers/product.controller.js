exports.get = (req, res) => {
    res.send("Sawasdee");
  }
exports.getById = (req, res) => {
    res.send("Get products " + req.params.id);
  }
exports.create =  (req, res) => {
    res.send("create ");
  }