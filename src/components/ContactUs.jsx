import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);
  const phone = watch("phone");

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  return (
    <section className='bg-white mt-10 py-10'>
      <h2 className='text-3xl font-bold text-indigo-600 mb-2'>Contact us</h2>
      <p className='text-gray-500 mb-4'>
        Speak with our team to see how we can help your business.
      </p>

      {submitted ? (
        <div className='text-green-600 font-semibold'>
          Thank you! Your message has been sent successfully.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='max-w-md mx-auto w-full px-4'>
          <input
            type='text'
            placeholder='Your name'
            {...register("name", { required: "Name is required" })}
            className='w-full border p-2 mb-1 rounded'
          />
          {errors.name && (
            <p className='text-red-500 text-xs mb-2'>{errors.name.message}</p>
          )}

          <input
            type='email'
            placeholder='Email'
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className='w-full border p-2 mb-1 rounded'
          />
          {errors.email && (
            <p className='text-red-500 text-xs mb-2'>{errors.email.message}</p>
          )}

          <PhoneInput
            international
            defaultCountry='NP'
            value={phone}
            onChange={(value) =>
              setValue("phone", value, { shouldValidate: true })
            }
            className='w-full border p-2 mb-1 rounded'
          />
          {(!phone || !isValidPhoneNumber(phone)) && (
            <p className='text-red-500 text-xs mb-2'>
              Enter a valid phone number
            </p>
          )}

          <textarea
            placeholder='Message'
            {...register("message", { required: "Message is required" })}
            className='w-full border p-2 mb-1 rounded'></textarea>
          {errors.message && (
            <p className='text-red-500 text-xs mb-2'>
              {errors.message.message}
            </p>
          )}

          <button
            type='submit'
            className='bg-indigo-600 text-white px-6 py-2 mt-2 rounded hover:bg-indigo-700'>
            Submit
          </button>
        </form>
      )}

      <p className='mt-8 text-gray-400 text-sm'>
        ABC Pvt. Ltd, Jyatha, Lalitpur, Nepal
      </p>
    </section>
  );
};

export default ContactUs;
