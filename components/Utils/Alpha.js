import { useEffect, useState } from 'react';

export default function Alpha() {
  const [randomString, setRandomString] = useState('');

  useEffect(() => {
    generateRandomString();
  }, []);

  function generateRandomString() {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 9; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setRandomString(result);
  }

  return (
    <div>
      <p>{randomString}</p>
    </div>
  );
}
