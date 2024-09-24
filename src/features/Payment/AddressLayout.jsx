import { useState } from "react";
import AddressForm from "./AddressForm";
import AddressSelector from "./AddressSelector";

function AddressLayout() {
  const [formData, setFormData] = useState({
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addresses = [
    {
      streetAddress: "123 Main St",
      city: "Springfield",
      zipCode: "12345",
    },
    {
      streetAddress: "456 Elm St",
      city: "Shelbyville",
      zipCode: "23456",
    },
    {
      streetAddress: "789 Oak St",
      city: "Capital City",
      zipCode: "34567",
    },
    {
      streetAddress: "101 Maple St",
      city: "Ogdenville",
      zipCode: "45678",
    },
  ];

  return (
    <div>
      <AddressSelector addresses={addresses} />
    </div>
  );
}

export default AddressLayout;
