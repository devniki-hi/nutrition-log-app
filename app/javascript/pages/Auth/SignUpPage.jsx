// app/frontend/pages/Auth/SignUpPage.tsx
import { Form, Link } from "@inertiajs/react";

export default function SignUpPage({ errors }) {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <Form
        method="post"
        action="/signup" // 必要に応じて /users や devise ルートに変更
        className="space-y-4"
        options={{ replace: true }} // URLを置き換える等のオプション
      >
        {/* Email */}
        <div>
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="user[email]"
            className="w-full border px-3 py-2"
          />
          {errors.errors?.email && (
            <p className="text-red-500 text-sm">
              {errors.errors.email.join(", ")}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="user[password]"
            className="w-full border px-3 py-2"
          />
          {errors.errors?.password && (
            <p className="text-red-500 text-sm">
              {errors.errors.password.join(", ")}
            </p>
          )}
        </div>

        {/* Password confirmation */}
        <div>
          <label className="block mb-1" htmlFor="password_confirmation">
            Password Confirmation
          </label>
          <input
            id="password_confirmation"
            type="password"
            name="user[password_confirmation]"
            className="w-full border px-3 py-2"
          />
          {errors.errors?.password_confirmation && (
            <p className="text-red-500 text-sm">
              {errors.errors.password_confirmation.join(", ")}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Create Account
        </button>
      </Form>

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600">
          Login
        </Link>
      </p>
    </div>
  );
}
