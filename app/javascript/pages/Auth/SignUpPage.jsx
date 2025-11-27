import { useForm } from "@inertiajs/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

export default function SignUpPage() {
  const { data, setData, post, processing, errors } = useForm({
    user: {
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const submit = (e) => {
    e.preventDefault();
    post("/signup");
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
              className={errors.errors?.email ? "border-red-500" : ""}
            />

            {errors.errors?.email && (
              <p className="text-red-500 text-sm">{errors.errors.email}</p>
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
              className={errors.errors?.password ? "border-red-500" : ""}
            />

            {errors.errors?.password && (
              <p className="text-red-500 text-sm">{errors.errors.password}</p>
            )}
          </div>

          {/* Password Confirmation */}
          <div className="space-y-2">
            <Label htmlFor="password_confirmation" className="text-slate-700">
              パスワード（確認）
            </Label>

            <Input
              id="password_confirmation"
              type="password"
              name="user[password_confirmation]"
              value={data.user.password_confirmation}
              onChange={(e) =>
                setData("user", {
                  ...data.user,
                  password_confirmation: e.target.value,
                })
              }
              className={
                errors.errors?.password_confirmation ? "border-red-500" : ""
              }
            />

            {errors.errors?.password_confirmation && (
              <p className="text-red-500 text-sm">
                {errors.errors.password_confirmation}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={processing}
            className="w-full mt-2 bg-sky-100 hover:bg-sky-200 text-slate-700 rounded-lg shadow-md"
          >
            {processing ? "処理中..." : "アカウント作成"}
          </Button>
        </form>

        <p className="text-center text-sm text-slate-700 mt-4">
          すでにアカウントがありますか？{" "}
          <Link href="/login" className="text-sky-500 font-medium">
            ログイン
          </Link>
        </p>
      </div>
    </div>
  );
}
