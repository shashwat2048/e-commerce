"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // TODO: replace with real auth call
    if (!email.includes("@") || password.length < 6) {
      setError("Please enter a valid email and password (min 6 characters).");
      return;
    }
    // simulate login...
    console.log({ email, password, remember });
    // redirect or show success
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full bg-white p-8 rounded-md shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold">Sign in</h2>

      {error && (
        <div className="p-3 bg-red-100 text-red-800 rounded">{error}</div>
      )}

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email or mobile phone number
        </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="mr-2"
          />
          Keep me signed in
        </label>
        <Link href="/forgot-password">
          <p className="text-sm text-blue-600 hover:underline">
            Forgot your password?
          </p>
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        Sign in
      </button>

      <div className="flex items-center gap-2 text-sm text-center justify-center">
        New to Ecom App?{" "}
        <Link href="/register">
          <p className="text-blue-600 hover:underline">Create your account</p>
        </Link>
      </div>
    </form>
  );
}
