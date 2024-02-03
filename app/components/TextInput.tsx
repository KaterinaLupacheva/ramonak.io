import { UseFormRegister } from "react-hook-form";
import { Inputs } from "./ContactForm";

type TextInputProps = {
  label: string;
  name: keyof Inputs;
  placeholder: string;
  register: UseFormRegister<Inputs>;
  type?: HTMLInputElement["type"];
  isError: boolean;
};

export default function TextInput({
  label,
  name,
  placeholder,
  register,
  type = "text",
  isError,
}: TextInputProps) {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${
          isError ? "border-red-500" : ""
        }`}
        {...register(name, { required: true })}
      />
    </div>
  );
}
