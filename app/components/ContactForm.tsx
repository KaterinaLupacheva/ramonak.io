"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextInput from "./TextInput";

export type Inputs = {
  name: string;
  email: string;
  description: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  console.log("errors", errors);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-[#F2F4F7]">
      <div className="max-w-[53%] flex flex-col items-center text-center pb-16">
        <h3 className="text-indigo-600 text-base font-semibold">Contact us</h3>
        <p className="text-gray-900 text-5xl font-semibold font-['Inter'] py-4">
          Get in touch
        </p>
        <p className=" text-gray-500 text-xl font-normal font-['Inter']">
          I’d love to hear from you. Please fill out this form.
        </p>
      </div>
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name="name"
            label="Your name"
            placeholder="Your name"
            register={register}
            isError={!!errors.name}
          />
          <TextInput
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            register={register}
            isError={!!errors.email}
          />
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Your message
            </label>
            <textarea
              rows={5}
              placeholder="Type your message"
              className={`w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${
                !!errors.description ? "border-red-500" : ""
              }`}
              {...register("description", { required: true })}
            ></textarea>
          </div>
          <div>
            <input
              className="w-full hover:shadow-form rounded-md bg-[#4D5BCE] py-3 px-8 text-base font-semibold text-white outline-none"
              type="submit"
              value="Send message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
