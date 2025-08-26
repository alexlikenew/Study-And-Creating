import React, {useEffect, useRef} from 'react';

function UseOutsideClick(handler, listenCapturing = true) {
    const ref = useRef();

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                close()
            }
        }

        document.addEventListener('click', handleClick, listenCapturing)

        return () => document.removeEventListener('click', handleClick)
    }, [handler, listenCapturing]);

    return ref;
}

export default UseOutsideClick;