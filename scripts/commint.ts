// Script to generate commit message

import { DateTime, Duration } from "luxon"
import { START_DATE } from "./const"
import * as str from "es-toolkit/string"

if (process.argv.length !== 5) {
  throw new Error("provie topic hours and message ")
}

function composeMessage({
  now,
  topic,
  duration,
  message,
}: {
  now: DateTime
  topic: string
  duration: string
  message: string
}) {
  var start = DateTime.fromISO(START_DATE).toUTC()

  var daysSinceStart = now.startOf("day").diff(start.startOf("day")).as("days").toFixed(0)

  var [hours, minutes] = duration.split(":")
  var duration = Duration.fromObject({ hours: Number(hours), minutes: Number(minutes || 0) })
    .shiftTo("hours", "minutes")
    .toHuman({ listStyle: "narrow", unitDisplay: "short", maximumFractionDigits: 0 })

  var message = `${daysSinceStart} | ${str.capitalize(topic)} [${duration}]: ${str.capitalize(message)}`

  console.log(message)
}

var now = DateTime.now().toUTC()
var topic = process.argv[2]
var duration = process.argv[3]
var message = process.argv[4]

composeMessage({ now, topic, duration, message })

// for (let i = 0; i < 255; i += 9) {
//   var now = DateTime.now().plus({ days: i }).toUTC()
//   composeMessage(now)
// }
