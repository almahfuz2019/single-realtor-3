"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h2>
      <p className="text-red-500 mb-8">
        An unexpected error has occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors duration-300"
      >
        Try again
      </button>
    </div>
  );
}
