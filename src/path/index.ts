import path from "node:path"

console.log(path.basename("C:\\temp\\myfile.html"))
console.log(path.win32.basename("C:\\temp\\myfile.html"))

console.log(path.delimiter)

const res = path.format({
  root: "/some/root/",
  base: Math.random() + "asdf",
  // dir:"./current/dir",
  ext: "josn",
  name: "lollipop",
})
console.log("🚀 ~ res:", res)

const res2 = path.parse("/home/user/dir/file.txt")
console.log("🚀 ~ res2:", res2)

console.log(path.join("/root/qwer/erty/", "some", "..", "../..", "other", "/asdf/asdf"))

console.log(process.cwd())

const loll = "./asdf/.aasdf//asdf/./././asdfqqwe"

const popp = path.join(process.cwd(), "../../", loll)
console.log(popp)

console.log(process.cwd().split(path.sep))

console.log(path.parse(import.meta.resolve("./lol.ts")))
