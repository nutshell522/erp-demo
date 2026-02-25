export default function FormInput({ title, name, type, ...props }) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <label className="text-nowrap" htmlFor={name}>
          {title}
        </label>
        <input name={name} id={name} type={type} className="bg-white border border-gray-500 rounded-sm w-full px-2" {...props} />
      </div>
    </>
  );
}
