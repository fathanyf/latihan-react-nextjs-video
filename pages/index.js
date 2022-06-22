import React from "react";
import ReactPlayer from "react-player";

function App () {
  return (
    <div className='App'>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=hTq4i02oO-8'
        controls
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
      />
    </div>
  )
}

export default App