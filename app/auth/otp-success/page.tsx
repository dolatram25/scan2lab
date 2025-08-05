'use client';

export default function OtpSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-green-600 mb-4">✅ Phone Verified!</h1>
        <p className="text-gray-700">Your phone number has been successfully verified.</p>
      </div>
    </div>
  );
}
