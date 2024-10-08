import { useCallback, useEffect, useState } from "react";


const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);

    const handleKeyDown = useCallback(({key}) => {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }, [targetKey])

    const handleKeyUp = useCallback(({key}) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    }, [targetKey])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown');
            window.removeEventListener('keyup');
        }
    }, [handleKeyDown, handleKeyUp])

    return keyPressed
};

export default useKeyPress;