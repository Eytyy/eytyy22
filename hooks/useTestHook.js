import { useEffect } from 'react';

export default function useTestHook(id) {
  useEffect(() => {
    if (id === '0b47eddb4a80') {
      console.log('hi');
    }
    return () => {
      if (id === '0b47eddb4a80') {
        console.log('bye');
      }
    };
  }, [id]);
}
