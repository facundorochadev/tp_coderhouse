const fs = require('fs')
class Products {
    getRandom() {
        let data = this.getAll()
        let max = data.length
        let min = 0
        let random = Math.floor(Math.random() * (max - min)) + min
        return data[random]
    }

    getAll() {
        let data = fs.readFileSync('./products.txt', 'utf-8')
        return JSON.parse(data)
    }

}

module.exports = Products