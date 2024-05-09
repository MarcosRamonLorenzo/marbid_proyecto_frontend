import { useEffect } from "react";
import { CircularProgress } from "@nextui-org/react";

import React from "react";

const CircularLoadingProgress = () => {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <CircularProgress
      aria-label="Loading..."
      size="lg"
      value={value}
      color="secondary"
      showValueLabel={true}
    />
  );
};

export default CircularLoadingProgress;
