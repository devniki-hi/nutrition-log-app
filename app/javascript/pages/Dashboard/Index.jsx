import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function Index() {
  const page = usePage();
  console.log(page.props);
  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold mb-6">Welcome to the Dashboard!</h1>
      <button
        onClick={() => router.delete("/logout")}
        className="btn-secondary"
      >
        Log Out
      </button>
    </div>
  );
}
