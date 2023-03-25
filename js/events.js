import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
} from './elements.js' 

export default function({sound, controls, timer}) {

  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressAudio()
  })
  
  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressAudio()
  })
  
  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressAudio()
  })
  
  buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })
  
  buttonSoundOff.addEventListener('click', function () {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    sound.bgAudio.play()
  })
  
  buttonSet.addEventListener('click', function () {
    sound.pressAudio()
    let newMinutes = controls.getMinutes()
  
    if(!newMinutes) {
      timer.reset()
      return
    }
  
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

}