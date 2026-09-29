import { useState, useCallback } from "react";

/**
 * @typedef {{
 *   value: boolean,
 *   setTrue: () => void,
 *   setFalse: () => void,
 * }} UseBooleanReturn
 */

/**
 * @param {boolean} [initialValue=false]
 * @returns {UseBooleanReturn}
 */
export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, setTrue, setFalse };
}
