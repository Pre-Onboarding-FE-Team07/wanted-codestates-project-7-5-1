import { useState, useEffect } from 'react';

export default function useSearchRecords(key, initialValue = []) {
  const pathName = window.location.pathname;
  let id = null;
  if (pathName) {
    id = pathName.split('/');
    id = id.length > 2 ? id[2] : 0;
  }

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem('search');
    try {
      const parsedValue = JSON.parse(storedValue);
      if (parsedValue) {
        if (parsedValue.keyword == id) return parsedValue[key] || initialValue;
      }
      return initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
  }, [value]);

  return [value, setValue];
}
