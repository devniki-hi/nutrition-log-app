// Loginページ
import { Form } from "@inertiajs/react";

function LoginPage({ errors }) {
  return (
    <div>
      <Form action="/login" method="post">
        {({ errors, processing }) => (
          <div className="space-y-4">
            <div>
              <p className="text-red-500">{errors.errors}</p>
            </div>
            <div>
              <label>Email</label>
              <input name="user[email]" type="email" className="input" />
              {errors["user.email"] && (
                <p className="text-red-500">{errors["user.email"]}</p>
              )}
            </div>

            <div>
              <label>Password</label>
              <input name="user[password]" type="password" className="input" />
              {errors["user.password"] && (
                <p className="text-red-500">{errors["user.password"]}</p>
              )}
            </div>

            <button type="submit" disabled={processing} className="btn-primary">
              {processing ? "Logging in..." : "Login"}
            </button>
          </div>
        )}
      </Form>
    </div>
  );
}

export default LoginPage;
