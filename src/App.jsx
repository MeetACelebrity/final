import React, { useState, useEffect } from 'react';

function App() {
    const [lol] = useState(0);

    useEffect(() => {
        console.log('effect called with value', lol);
    }, [lol]);

    return <main className="w-screen h-screen bg-blue-200"></main>;
}

export default App;
