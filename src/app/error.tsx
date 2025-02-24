"use client";
export default function ({ error }: { error: Error }) {
  return (
    <>
     <div className="flex items-center justify-center">
      <h3 className="text-lg font-medium md:text-3xl md:font-bold">
        <span className="text-2xl md:text-4xl text-red-500 py-1 px-1">Error:</span>
       {error.message}
      </h3>
    </div>
    </>
  );
}
