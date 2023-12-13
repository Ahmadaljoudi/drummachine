import React from 'react';
import { AudioClip } from "./types";

interface DrumProps {
  audioClip: AudioClip;
  setDisplay: (display: string) => void;
}

function Drum({ audioClip, setDisplay }: DrumProps) {
  const playSound = () => {
    const audioElem = document.getElementById(audioClip.keyTrigger) as HTMLAudioElement;
    audioElem.play().catch((e) => {
      console.error(e.message);
    });
    setDisplay(audioClip.description); // Update display on button click
  };

  return (
    <div>
      <button
        className="drum-pad"
        id={`drum-${audioClip.keyTrigger}`}
        onClick={playSound}
      >
        {audioClip.keyTrigger}
        <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
      </button>
    </div>
  );
}

export default Drum;
