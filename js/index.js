//default import
import Controls from "./controls.js"
import Timer  from "./timer.js"
import Sound from "./sound.js"
import Event from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

const sound = Sound()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

Event({sound, timer, controls})

