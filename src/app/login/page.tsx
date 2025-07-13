import LoginForm from "@/components/loginForm";
import Image from "next/image";

export const metadata = {
  title: 'Login - Ecom App',
  description: 'Login to your account',
};

export default function page() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
      <div className="w-full max-w-5xl grid grid-cols-2 bg-white shadow-lg rounded overflow-hidden">
        {/* Left side: branding */}
        <div className="hidden md:flex flex-col items-center justify-center bg-primary-background p-8 text-white">
          <Image
            src="/favi.png"
            alt="Logo"
            width={80}
            height={80}
            className="mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Ecom App</h1>
          <p className="text-center">
            Fast, secure shopping.
          </p>
        </div>

        {/* Right side: form */}
        <div className="p-8 flex items-center justify-center">
          <LoginForm/>
        </div>
      </div>
    </div>
  );
}
