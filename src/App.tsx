import './App.css';
import { AudioClip } from './types';
import Drum from './Drum';
import { useState,useEffect } from 'react';

const audioClips: AudioClip[] = [
  {
    keyTrigger: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    description: 'Heater-1',
  },
  {
    keyTrigger: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    description: 'Heater-2',
  },
  {
    keyTrigger: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    description: 'Heater-3',
  },
  {
    keyTrigger: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    description: 'Heater-4',
  },
  {
    keyTrigger: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    description: 'Clap',
  },
  {
    keyTrigger: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    description: 'Open-HH',
  },
  {
    keyTrigger: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    description: "Kick-n'-Hat",
  },
  {
    keyTrigger: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    description: 'Kick',
  },
  {
    keyTrigger: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    description: 'Closed-HH',
  },
];




function App() {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      playAudio(e.key);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const playAudio = (key: string) => {
    const clip = audioClips.find((clip) => clip.keyTrigger === key.toUpperCase());
    if (!clip) return;

    const audioElem = document.getElementById(clip.keyTrigger) as HTMLAudioElement;
    audioElem?.play();

    setDisplay(clip.description);
  };

  return (
    <div className="container" id='drum-machine' tabIndex={0}>
      <h1> Insane Drum Machine! </h1>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.keyTrigger} setDisplay={setDisplay} />
        ))}
      </div>
      <div id="display">
        <h2>{display || 'Display'}</h2>
      </div>
    </div>
  );
}

export default App;