import { RefObject, useEffect, useState } from 'react';

const useAllImagesLoaded = (ref: RefObject<HTMLElement>) => {
  const [status, setStatus] = useState(false);

  const updateStatus = (images: HTMLImageElement[]) => {
    setStatus(
      images.map((image) => image.complete).every((item) => item === true)
    );
  };

  useEffect(() => {
    if (!ref?.current) return;
    const imagesLoaded = Array.from(ref.current.querySelectorAll('img'));

    if (imagesLoaded.length === 0) {
      setStatus(true);
    } else {
      imagesLoaded.forEach((image) => {
        image.addEventListener('load', () => updateStatus(imagesLoaded), {
          once: true,
        });
        image.addEventListener('error', () => updateStatus(imagesLoaded), {
          once: true,
        });
      });
    }
  }, [ref]);

  return status;
};

export default useAllImagesLoaded;
