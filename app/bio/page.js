"use client";

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const videoURL = "Never-Gonna.mp4";

    function redirect() {
      window.location.href = videoURL;
    }

    redirect();
  }, []);

  return (
    <main>
      <video autoPlay loop width="100%">
        <source src="Never-Gonna.mp4" type="video/mp4" />
        Keine eingebetteten videos :(
      </video>
    </main>
  );
}
