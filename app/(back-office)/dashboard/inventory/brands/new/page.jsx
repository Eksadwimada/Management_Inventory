"use client";

import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewBrands() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  async function onSubmit(data) {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/brands`, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        // console.log(response);
        setLoading(false);
        toast.success("Brand Created Successfully");
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Brands" href="/dashboard/inventory" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Brand Title" name="title" register={register} errors={errors} className="w-full" />
        </div>
        <SubmitButton isLoading={loading} title="Brand" />
      </form>
    </div>
  );
}
