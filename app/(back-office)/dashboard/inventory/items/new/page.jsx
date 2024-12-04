"use client";

import FormHeader from "@/components/dashboard/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import TextInput from "@/components/FormInputs/TextInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewItem() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const categories = [
    { label: "Electronics", value: "aeriry88990r8ryr" },
    { label: "Clothes", value: "yryrtertetttsxvc009" },
  ];
  const units = [
    { label: "kg", value: "aeriry88990r8ryr" },
    { label: "pcs", value: "yryrtertetttsxvc009" },
  ];
  const brands = [
    { label: "HP", value: "aeriry88990r8ryr" },
    { label: "Dell", value: "yryrtertetttsxvc009" },
  ];
  const warehouse = [
    { label: "Warehouse A", value: "aeriry88990r8ryr" },
    { label: "Warehouse B", value: "yryrtertetttsxvc009" },
  ];
  const suppliers = [
    { label: "Supplier A", value: "aeriry88990r8ryr" },
    { label: "Supplier B", value: "yryrtertetttsxvc009" },
  ];

  async function onSubmit(data) {
    data.imageUrl = imageUrl;
    console.log(data);

    setLoading(true);
    const baseUrl = "http://localhost:3000";
    try {
      const response = await fetch(`${baseUrl}/api/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Response:", response);
        toast.success("Data Created Successfully");
        setLoading(false);
        reset();
      }
    } catch (error) {
      setLoading(false);
      console.log("Error:", error);
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Item" href="/dashboard/inventory" />

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6">
          <TextInput label="Warehouse Title" name="title" register={register} errors={errors} />
          <SelectInput label="Select the Category Type" name="categoryId" register={register} className="w-full" options={categories} />
          <TextInput label="Item SKU" name="Sku" register={register} errors={errors} className="w-full" />
          <TextInput label="Item Barcode" name="barcode" register={register} errors={errors} className="w-full" />
          <TextInput label="Item Quality" name="qty" register={register} errors={errors} className="w-full" />
          <SelectInput label="Select the Item Unit" name="unitId" register={register} className="w-full" options={units} />
          <SelectInput label="Select the Item Brand" name="brandId" register={register} className="w-full" options={brands} />
          <TextInput label="Buying Price" name="buyingPrice" register={register} errors={errors} className="w-full" type="number" />
          <TextInput label="Selling Price" name="sellingPrice" register={register} errors={errors} className="w-full" type="number" />
          <SelectInput label="Select the Item Supplier" name="supplierId" register={register} className="w-full" options={suppliers} />
          <TextInput label="Re-Order Point" name="reOrderPoint" register={register} errors={errors} className="w-full" type="number" />
          <SelectInput label="Select the Item Warehouse" name="warehouseId" register={register} className="w-full" options={warehouse} />
          <TextInput label="Item Weight in Kgs" name="weight" register={register} errors={errors} className="w-full" type="number" />
          <TextInput label="Item Dimensions in cm (20 x 30 x 100)" name="dimensions" register={register} errors={errors} className="w-full" />
          <TextInput label="Item Tax rate in %" name="taxrate" register={register} errors={errors} className="w-full" type="number" />
          <TextareaInput label="Item Description" name="description" register={register} errors={errors} />
          <TextareaInput label="Item Notes" name="notes" register={register} errors={errors} />

          {/* Upload Button */}
          <ImageInput label="Item Image" imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="imageUploader" />
        </div>

        {/* Submit Button */}
        <SubmitButton isLoading={loading} title="Item" />
      </form>
    </div>
  );
}
