import { useState } from 'react';

export default function useSearchRecords(key, initialValue = []) {
  const pathName = window.location.pathname;
  let decodedId = null;
  let originId = null;
  if (pathName) {
    originId = pathName.split('/');
    originId = originId.length > 2 ? originId[2] : 0;
    decodedId = decodeURIComponent(originId);
  }

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem('search');
    try {
      const parsedValue = JSON.parse(storedValue);
      if (parsedValue) {
        if (
          parsedValue.keyword == originId ||
          parsedValue.keyword === decodedId
        )
          return parsedValue[key] || initialValue;
      }
      return initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  return [value, setValue];
}
