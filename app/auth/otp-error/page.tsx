'use client';

export default function OtpError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">❌ Invalid OTP</h1>
        <p className="text-gray-700">Please try again with the correct code.</p>
      </div>
    </div>
  );
}
