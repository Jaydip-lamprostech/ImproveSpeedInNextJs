'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animation from '@/animation.json';
import main from '../homepage/home.module.scss';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className={main.loading}>
          <Lottie
            animationData={animation}
            loop={true}
            autoplay={true}
            style={{ width: '300px', height: '300px' }}
          />
        </div>
      )}
    </>
  );
}