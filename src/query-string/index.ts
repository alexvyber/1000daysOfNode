import qs from 'node:querystring';
import * as qsesm from "qs-esm" 

const dec = qs.parse('a[b][c][d][e][f][g][h][i]=j&other=12')
// console.log("🚀 ~ dec:", dec)

const lol = {
    a: {
        b: {
            c: {
                d: {
                    e: {
                        f: {
                            '[g][h][i]': 'j'
                        }
                    }
                }
            },
            a: {
                d: {
                    e: {
                        f: {
                            '[g][h][i]': 'j'
                        }
                    }
                }
            }
        }
    }
}


const res = qsesm.stringify(lol)
console.log("🚀 ~ res:", decodeURIComponent(res))
const res2 = qsesm.parse(res)
console.log("🚀 ~ res2:", res2)
const arr = Array.from({ length: 100}, (_,index) => `[${String.fromCharCode(Math.floor(Math.random()* 20) + 65)}]` )
console.log("🚀 ~ arr:", arr)
const res3 = qsesm.parse(`${arr.join("")}=12123`, { depth: 1000})
console.log("🚀 ~ res3:", JSON.stringify(res3, null ,2))
const res4 = qsesm.stringify(res3)
console.log("🚀 ~ res4:", decodeURIComponent(res4))


const str = qs.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }, );
console.log("🚀 ~ str:", str)
