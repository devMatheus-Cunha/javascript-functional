const fs = require("fs")
const path = require("path")

const route = path.join(__dirname, "_dados.txt")

const getData = (route) => {
  return new Promise((resolve) => {
     fs.readFile(route, (_, data) => {
      resolve(data.toString())
    })
  });
}

getData(route).then((data) => data.split("\n")).then(console.log)