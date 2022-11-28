import React from "react";

// eslint-disable-next-line react/display-name
export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input
        type="checkbox"
        className="w-4 h-4 text-primary bg-gray-100 rounded border-primary  dark:focus:ring-primary dark:ring-offset-primary focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        ref={resolvedRef}
        {...rest}
      />
    </>
  );
});
