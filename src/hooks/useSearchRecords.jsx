import { useState } from 'react';

export default function useSearchRecords(key, initialValue = []) {
  const queryString = window.location.search.replace(/^.*?\=/, '');

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem('search');
    try {
      const parsedValue = JSON.parse(storedValue);
      if (parsedValue) {
        if (
          parsedValue.keyword == queryString ||
          parsedValue.keyword === decodeURIComponent(queryString)
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
