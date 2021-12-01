const fs = require("fs");
// const filename = "./products.txt";

module.exports = class Products {
  // constructor(title, price, image, id) {
  //   this.title = title;
  //   this.price = price;
  //   this.image = image;
  //   this.id = id;
  //   this.filename = "../products.txt";
  // }

  // save(objeto) {
  //   let data = this.getAll();
  //   let dataCount = data.length;
  //   objeto.id = dataCount ? dataCount++ : 1;
  //   data.push(objeto);
  //   try {
  //     fs.writeFileSync(this.filename, JSON.stringify(data));
  //     return this.getAll();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // getById(id) {
  //   const all = this.getAll();
  //   return all[id] ? all[id] : null;
  // }

  getAll() {
    let file = fs.readFileSync(this.filename, "utf-8");
    // return (file) ? JSON.parse(file) : [];
    return JSON.parse(file);
  }

  // create(req, res) {
  //   try {
  //     this.save(req.params);
  //     return res.status(200).json(req.params);
  //   } catch (e) {
  //     return res.status(500).json({ e });
  //   }
  // }

  read(req, res) {
    let data = req;
    // let data = req.query.id ? this.getById(req.query.id) : this.getAll();
    res.json(data);
  }

  // update(req, res) {
  //   let data = this.getAll;

  //   try {
  //     data[req.params.id] = req.params;
  //     data.push(req.params);
  //     fs.writeFileSync(this.filename, JSON.stringify(data));
  //     return res.json(this.getAll());
  //   } catch (e) {
  //     return res.status(500).json({ e });
  //   }
  // }

  // delete(req, res) {
  //   try {
  //     const data = this.getAll();
  //     data.splice(req.params.id, 1);
  //     this.save(all);
  //     return res.status(200).json(data);
  //   } catch (e) {
  //     return res.status(500).json({ e });
  //   }
  // }

  // deleteAll(req, res) {
  //   fs.writeFile(this.filename, "", (error) => {
  //     if (error) {
  //       return res.status(500).json({ error: "Elminado con exito" });
  //     } else {
  //       return res.status(200).json(this.getAll);
  //     }
  //   });
  // }
};
