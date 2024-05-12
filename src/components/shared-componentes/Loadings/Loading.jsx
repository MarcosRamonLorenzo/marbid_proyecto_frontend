import React from "react";
import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <div>
      <div className="w-full h-full flex items-center justify-center fixed inset-0 bg-black bg-opacity-10 z-[999]">
        <Spinner size="large" />
      </div>
    </div>
  );
};

export default Loading;
