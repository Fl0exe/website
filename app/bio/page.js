"use client";

import {useEffect} from 'react';

export default function Page() {
    useEffect(() => {
        const videoURL = "/never-gonna.mp4";

        function redirect() {
            window.location.href = videoURL;
        }

        redirect();
    }, []);

    return (
        <main>
            <video autoPlay loop width="100%">
                <source src="/never-gonna.mp4" type="video/mp4"/>
                No embedded videos :(
            </video>
        </main>
    );
}
