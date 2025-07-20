import { useState, useEffect } from "react";

type UseDebouncedProps<T> = {
  initialValue: T;
  delay?: number;
  onChange: (value: T) => void;
};

export function useDebounced<T>({
  initialValue,
  delay = 500,
  onChange,
}: UseDebouncedProps<T>) {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(innerValue);
    }, delay);

    return () => clearTimeout(timeout);
  }, [innerValue, delay, onChange]);

  return {
    value: innerValue,
    setValue: setInnerValue,
  };
}
