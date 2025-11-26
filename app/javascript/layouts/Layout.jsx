import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function Layout({ children }) {
  const page = usePage();
  return (
    <main>
      <header className="flex gap-4 mb-6 border-b pb-2">
        <Link href="/">Home</Link>
        {page.props.auth ? (
          <button
            onClick={() => router.delete("/logout")}
            className="btn-secondary"
          >
            Log Out
          </button>
        ) : (
          <Link href="/login" className="btn-secondary">
            Log In
          </Link>
        )}
      </header>
      <article>{children}</article>
    </main>
  );
}
