import { useForm, Link } from "@inertiajs/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function LoginPage() {
  const { data, setData, post, processing, errors } = useForm({
    user: {
      email: "",
      password: "",
    },
  });

  const submit = (e) => {
    e.preventDefault();
    post("/login");
  };

  return (
    <div className="flex justify-center px-8 py-24">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl px-8 py-10 shadow-lg">
        <form onSubmit={submit} className="space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700">
              メールアドレス
            </Label>

            <Input
              id="email"
              type="email"
              name="user[email]"
              value={data.user.email}
              onChange={(e) =>
                setData("user", {
                  ...data.user,
                  email: e.target.value,
                })
              }
              className={errors["user.email"] ? "border-red-500" : ""}
            />

            {errors["user.email"] && (
              <p className="text-red-500 text-sm">{errors["user.email"]}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-slate-700">
              パスワード
            </Label>

            <Input
              id="password"
              type="password"
              name="user[password]"
              value={data.user.password}
              onChange={(e) =>
                setData("user", {
                  ...data.user,
                  password: e.target.value,
                })
              }
              className={errors["user.password"] ? "border-red-500" : ""}
            />

            {errors["user.password"] && (
              <p className="text-red-500 text-sm">{errors["user.password"]}</p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full mt-2 bg-sky-100 hover:bg-sky-200 text-slate-700 rounded-lg  shadow-md"
            disabled={processing}
          >
            {processing ? "処理中..." : "ログイン"}
          </Button>
        </form>
        <p className="text-center text-sm text-slate-700 mt-4">
          まだアカウントは作成していない方は{" "}
          <Link href="/signup" className="text-sky-500 font-medium">
            アカウント作成
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
