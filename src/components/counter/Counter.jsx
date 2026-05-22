import Button from "../buttons/Button";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="
        bg-gray-200 
        dark:bg-gray-800
        p-6 
        rounded-lg 
        shadow-md 
        text-center 
        gap-2
      ">
        <h1 className="
          text-2xl 
          font-bold 
          mb-4
          text-black
          dark:text-white
        ">
          Counter: {count}
        </h1>

        <div className="flex justify-center gap-4">
          <Button
            title="increment"
            onClick={() => setCount(count + 1)}
          />

          <Button
            title="decrement"
            onClick={() => setCount(count - 1)}
          />
        </div>
      </div>
    </>
  );
};

export default Counter;