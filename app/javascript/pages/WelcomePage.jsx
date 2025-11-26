import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function WelcomePage({ title }) {
  const page = usePage();
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{title} Page</h1>
      <Link href="/signup" className="btn-primary mr-4">
        Sign Up
      </Link>

      <Link href="/login" className="btn-secondary">
        Log In
      </Link>
    </div>
  );
}
