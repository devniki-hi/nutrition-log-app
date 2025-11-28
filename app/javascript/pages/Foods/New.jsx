import { Head, Link } from "@inertiajs/react";
import Form from "./Form.jsx";

export default function New({ food }) {
  return (
    <div>
      <Head title="New food" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New food</h1>

        <Form
          food={food}
          method="post"
          action="/foods"
          submitText="Create Food"
        />

        <Link
          href="/foods"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to foods
        </Link>
      </div>
    </div>
  );
}
