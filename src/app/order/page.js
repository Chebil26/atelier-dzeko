"use client";
import { useState } from "react";
import Select from "react-select";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { Resend } from "resend";

import jsonData from "../../../public/data.json";

export default function Order() {
  const searchParams = useSearchParams();
  const product_id = searchParams.get("id");
  const product_name = searchParams.get("name");
  const [product, setProduct] = useState({
    value: product_id,
    label: product_name,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const options = jsonData.map((item) => ({
    value: item.id,
    label: item.itemName,
  }));

  const customStyles = {
    control: (provided, state) => ({
      // styles for the outer control
      ...provided,
      border: state.isFocused ? "2px solid #0088cc" : "2px solid #ccc",
      borderRadius: "4px",
      boxShadow: state.isFocused ? "0 0 3px rgba(0, 136, 204, 0.8)" : "none",
    }),
    option: (provided, state) => ({
      // styles for each option
      ...provided,
      backgroundColor: state.isSelected ? "#0088cc" : "white",
      color: state.isSelected ? "white" : "black",
    }),
    // other style properties for components like singleValue, multiValue, etc.
  };

  const handleSubmit = async (req, res) => {
    const resend = new Resend("re_3Fk1ajeG_2jazHguUJH4JDpXJbakKxNgW");
    e.preventDefault(); // Add this line to prevent default form submission
    console.log(email);
    try {
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Order Confirmation",
        html: `<p>Thank you for your order of </p>`,
      });

      if (error) {
        return { error }; // Change from Response.json({ error }) to { error }
      }

      return { data }; // Change from Response.json({ data }) to { data }
    } catch (error) {
      return { error }; // Change from Response.json({ error }) to { error }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form className="grid gap-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
            htmlFor="product"
          >
            Product
          </label>
          <Select
            options={options}
            value={product}
            onChange={(product) => setProduct(product)}
            styles={customStyles}
          />
        </div>
        <div className="space-y-2">
          <label
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
            htmlFor="name"
          >
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="space-y-2">
          <label
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
            htmlFor="email"
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="email"
            placeholder="Enter your email"
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <label
            className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="phone"
            placeholder="Enter your phone number"
            required
            type="tel"
          />
        </div>
        <button
          className="bg-blue-500 text-white rounded-lg shadow-md transform transition-transform hover:scale-105"
          type="submit"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
