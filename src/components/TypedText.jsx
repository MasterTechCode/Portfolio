import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypedText() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Frontend Developer",
        "Aspiring Software Engineer",
        "React Enthusiast",
        "Building Modern Websites"
      ],
      typeSpeed: 65,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => typed.destroy();
  }, []);

  return <span ref={typedRef}></span>;
}

export default TypedText;