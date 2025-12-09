export default function UserShow({ user }) {
  return (
    <div className="space-y-5">
      <FormRow label="名前">
        <p className="text-2xl text-slate-800">{user.name}</p>
      </FormRow>

      <FormRow label="Email">
        <p className="text-2xl text-slate-800">{user.email}</p>
      </FormRow>
    </div>
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
