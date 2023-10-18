import { useState, useEffect } from 'react';

function useDynamicMaxHeight(mainRef) {
    const [maxHeight, setMaxHeight] = useState('auto');

    useEffect(() => {
        const updateMaxHeight = () => {
            if (mainRef.current) {
                const windowHeight = window.innerHeight;
                const containerTop = mainRef.current.getBoundingClientRect().top;
                const newMaxHeight = windowHeight - containerTop + 'px';
                setMaxHeight(newMaxHeight);
            }
        };
        window.addEventListener('resize', updateMaxHeight);
        updateMaxHeight();
        return () => {
            window.removeEventListener('resize', updateMaxHeight);
        };
    }, [mainRef]);

    return maxHeight;
}

export default useDynamicMaxHeight;
