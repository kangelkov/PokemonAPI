"use client"

export default function Error({ error, reset}) {
    return (
        <div className="flex flex-col items-center justify-center font-bold mt-5">
            <p className="text-2xl">Error: {error.message}</p>
            <p className="text-1xl">Please try again later!</p>
            <button className="button button-blue" onClick={reset}>Try again</button>
        </div>
    );
}