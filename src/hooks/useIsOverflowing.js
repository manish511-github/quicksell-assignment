import { useState, useEffect } from 'react';

function useIsOverflowing(mainRef) {
    const [isOverflowingX, setIsOverflowingX] = useState(false);
    const [isOverflowingY, setIsOverflowingY] = useState(false);

    useEffect(() => {
        const container = mainRef.current;
        if (container) {
            const isHorizontallyOverflowing = container.scrollWidth >= container.clientWidth;
            const isVerticallyOverflowing = container.scrollHeight >= container.clientHeight;
            setIsOverflowingX(isHorizontallyOverflowing);
            setIsOverflowingY(isVerticallyOverflowing);
        }
    }, [mainRef]);

    return { isOverflowingX, isOverflowingY };
}

export default useIsOverflowing;
