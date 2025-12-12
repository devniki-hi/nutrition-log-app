import { Link, useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input.jsx";

export default function UserForm({ user }) {
  const { data, setData, patch, errors } = useForm({
    user: {
      name: user.name || "",
      email: user.email || "",
      profile_image: user.profile_image || "",
    },
  });

  const submit = (e) => {
    e.preventDefault();
    patch("/mypage", {
      forceFormData: true,
    });
  };

  return (
    <form id="user_form" onSubmit={submit} className="space-y-5">
      <FormRow label="名前">
        <Input
          type="text"
          className={errors.name ? "border-red-500" : ""}
          value={data.user.name}
          onChange={(e) =>
            setData("user", {
              ...data.user,
              name: e.target.value,
            })
          }
        />
        {errors.name &&
          errors.name.map((message, index) => (
            <p key={index} className="text-red-500 text-sm">
              ・{message.slice(1)}
            </p>
          ))}
      </FormRow>

      <FormRow label="Email">
        <Input
          type="email"
          className={errors.email ? "border-red-500" : ""}
          value={data.user.email}
          onChange={(e) =>
            setData("user", {
              ...data.user,
              email: e.target.value,
            })
          }
        />
        {errors.email &&
          errors.email.map((message, index) => (
            <p key={index} className="text-red-500 text-sm">
              ・{message.slice(1)}
            </p>
          ))}
      </FormRow>

      {/* <FormRow label="パスワード">
        <Input
          type="password"
          className={errors.password ? "border-red-500" : ""}
          placeholder="変更する場合のみ入力"
          value={data.password}
          onChange={(e) => setData("password", e.target.value)}
        />
        {errors.password &&
          errors.password.map((message, index) => (
            <p key={index} className="text-red-500 text-sm">
              ・{message.slice(1)}
            </p>
          ))}
      </FormRow>

      <FormRow label="パスワード確認">
        <Input
          id="password_confirmation"
          type="password"
          placeholder="変更する場合のみ入力"
          value={data.password_confirmation}
          onChange={(e) => setData("password_confirmation", e.target.value)}
          className={errors.password_confirmation ? "border-red-500" : ""}
        />
        {errors.password_confirmation &&
          errors.password_confirmation.map((message, index) => (
            <p key={index} className="text-red-500 text-sm">
              ・{message.slice(1)}
            </p>
          ))}
      </FormRow> */}

      <FormRow label="画像ファイル選択">
        <Input
          type="file"
          className={errors.profile_image ? "border-red-500" : ""}
          onChange={(e) =>
            setData("user", { ...data.user, profile_image: e.target.files[0] })
          }
        />
        {errors.profile_image &&
          errors.profile_image.map((message, index) => (
            <p key={index} className="text-red-500 text-sm">
              ・{message.slice(1)}
            </p>
          ))}
      </FormRow>
    </form>
  );
}

function FormRow({ label, children }) {
  return (
    <div>
      <label className="block font-medium text-slate-700 mb-2">{label}</label>
      {children}
    </div>
  );
}
