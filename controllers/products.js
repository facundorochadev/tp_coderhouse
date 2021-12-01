const fs = require("fs");
const filename = "../products.txt";

exports.save = (objeto) => {
  let data = this.getAll();
  let data_ = Array.isArray(data) ? data : [];
  let dataCount = Array.isArray(data) ? data.length : 1;
  objeto.id = dataCount++;
  data_.push(objeto);
  try {
    fs.writeFileSync("./products.txt", JSON.stringify(data_));
    return data;
  } catch (e) {
    console.log(e);
  }
};

exports.getById = (id) => {
  const all = this.getAll();
  return all[id] ? all[id] : null;
};

exports.getAll = () => {
  let file = fs.readFileSync("./products.txt", "utf-8");
  // return (file) ? JSON.parse(file) : [];
  return JSON.parse(file);
};

exports.create = (req, res) => {
  try {
    this.save(req.body);
    return res.status(200).json(req.body);
  } catch (e) {
    return res.status(500).json({ e });
  }
};

exports.read = (req, res) => {
  let data = req.query.id ? this.getById(req.query.id) : this.getAll();
  res.json(data);
};

exports.update = (req, res) => {
  try {
    let data = this.getAll();
    i = 0;
    data.forEach((element) => {
      if (element.id == req.params.id) {
        req.body.id = req.params.id;
        data[i] = req.body;
      }
      i++;
    });
    fs.writeFileSync("./products.txt", JSON.stringify(data));
    return res.json(data);
  } catch (e) {
    return res.status(500).json({ e });
  }
};

exports.delete = (req, res) => {
  try {
    let data = this.getAll();
    i = 0;
    data.forEach((element) => {
      if (element.id == req.params.id) {
        data.splice(i, 1);
      }
      i++;
    });
    fs.writeFileSync("./products.txt", JSON.stringify(data));

    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ e });
  }
};

exports.deleteAll = (req, res) => {
  fs.writeFile("./products.txt", "", (error) => {
    if (error) {
      return res.status(500).json({ error: "Elminado con exito" });
    } else {
      return res.status(200).json(this.getAll);
    }
  });
};
