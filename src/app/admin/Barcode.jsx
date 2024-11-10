"use client";
import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Barcode = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 51,
      },
      []
    );
    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        {result ? (
          <div className="p-6 bg-green-50 rounded-lg shadow-md text-center">
            <p className="text-2xl font-semibold text-green-600 mb-4">
              Success!
            </p>
            <Link
              href={result}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
            >
              {result}
            </Link>
          </div>
        ) : (
          <div
            id="reader"
            className="w-full h-64 md:h-80 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center"
          >
            <p className="text-gray-500">Loading QR Code Scanner...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Barcode;
