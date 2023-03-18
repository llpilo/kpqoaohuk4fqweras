import { useState, useEffect } from 'react';

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('en-GB'));
  }, []);

  return <> {currentDate}</>;
}
