"use client";
import { useState } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";

import jsonData from "../../../public/data.json";

export default function Order() {
  const router = useRouter();
  const orderData = router.query;
  console.log(orderData);
  const [product, setProduct] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", { product, name, email, phone });
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
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          type="submit"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
