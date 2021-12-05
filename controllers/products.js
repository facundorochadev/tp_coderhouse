const fs = require("fs");
const filename = "./products.txt";

module.exports = class Products {
  constructor(title, price, image, id) {
    this.title = title;
    this.price = price;
    this.image = image;
    this.id = id;
    this.filename = "./products.txt";
  }

  save(objeto) {
    let data = this.getAll();
    let dataCount = data.length;
    objeto.id = dataCount ? dataCount++ : 1;
    data.push(objeto);
    try {
      fs.writeFileSync(this.filename, JSON.stringify(data));
      return this.getAll();
    } catch (e) {
      console.log(e);
    }
  }

  getById(id) {
    let data = this.getAll();
    let key = data.findIndex((x) => x.id == id);
    return data[key];
  }

  getAll() {
    let file = fs.readFileSync(this.filename, "utf-8");
    return file ? JSON.parse(file) : [];
  }

  create(obj) {
    try {
      this.save(obj);
      return true;
    } catch (e) {
      return false;
    }
  }

  update(id, obj) {
    let data = this.getAll();
    let key = data.findIndex((x) => x.id == id);
    try {
      data[key] = obj;
      console.log(data)
      fs.writeFileSync(this.filename, JSON.stringify(data));
      return true;
    } catch (e) {
      return false;
    }
  }

  delete(id) {
    try {
      const data = this.getAll();
      let key = data.findIndex((x) => x.id == id);
      data.splice(key, 1);
      fs.writeFileSync(this.filename, JSON.stringify(data));
      return true;
    } catch (e) {
      return false;
    }
  }

  deleteAll(req, res) {
    fs.writeFile(this.filename, "", (error) => {
      if (error) {
        return res.status(500).json({ error: "Elminado con exito" });
      } else {
        return true;
      }
    });
  }
};
