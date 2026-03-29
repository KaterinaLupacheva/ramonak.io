import { UseFormRegister } from "react-hook-form";
import { Inputs } from "./ContactForm";
import styles from "./TextInput.module.css";

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
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={[styles.input, isError ? styles.error : ""]
          .filter(Boolean)
          .join(" ")}
        {...register(name, { required: true })}
      />
    </div>
  );
}
