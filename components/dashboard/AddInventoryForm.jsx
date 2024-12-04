"use client";

import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AddinventoryForm() {
  const branches = [
    {
      label: "Branch A",
      value: "tetrttryyry93949",
    },
    {
      label: "Branch B",
      value: "tetrttryyry93949",
    },
    {
      label: "Main A",
      value: "tetrttryyry93949",
    },
  ];
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
      const response = await fetch(`${baseUrl}/api/adjustments/add`, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Add Stock Successfully");
        // console.log(response);
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
      <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6">
        <TextInput label="Enter Quantity of Stock to Add" name="AddStockQty" register={register} errors={errors} className="w-full" type="number" />
        <SelectInput name="recievingWarehouseId" label="Select the Warehouse that will receive the Stock" register={register} className="w-full" options={branches} />
        <TextareaInput label="Adjustments Notes" name="notes" register={register} errors={errors} />
      </div>
      <SubmitButton isLoading={loading} title="Adjustments" />
    </form>
  );
}
