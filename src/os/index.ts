import { writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

console.log(os.EOL)
console.log(os.arch())
console.log(os.availableParallelism())
console.log(os.constants)
console.log(os.cpus())

console.log(os.devNull)
console.log(os.endianness())
console.log(os.freemem()  )
console.log(os.getPriority(86264))
console.log(os.homedir())
console.log(os.hostname())
console.log(os.loadavg())

console.log(os.machine())
console.log(os.networkInterfaces())
console.log(os.platform())
console.log(os.release())

const tmp= os.tmpdir()
const asdf = path.join(tmp, "some.ts")
await writeFile(asdf, `const str = "string"`)

console.log(os.totalmem())
console.log(os.type())
console.log(os.uptime() / 60 / 60 / 24 )
console.log(os.userInfo())
console.log(os.version())


