import { useState } from "react";
import AddressForm from "./AddressForm";
import { useDeliveryAddress } from "./DeliveryAddressContext";

function AddressSelector({ addresses }) {
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null); // Use index to track selected address
  const [showForm, setShowForm] = useState(false);
  const [editableAddress, setEditableAddress] = useState(null);

  const { updateAddress } = useDeliveryAddress();

  const handleAddressChange = (e) => {
    const selectedIndex = parseInt(e.target.value); // Get the index from the event
    const selected = addresses[selectedIndex]; // Use the index to find the selected address
    setSelectedAddressIndex(selectedIndex); // Set the index as selected
    updateAddress(selected);
  };

  const handleEdit = (index) => {
    setEditableAddress(addresses[index]); // Set the selected address for editing
    setShowForm(true); // Show the address form
  };

  const handleNewAddress = (e) => {
    e.preventDefault();
    setEditableAddress(null); // Set to null to ensure the form is empty
    setShowForm(true); // Show the address form
  };

  return (
    <div>
      <h1 className="font-medium">Your Address</h1>
      <form>
        {addresses.map((address, index) => (
          <div
            key={index}
            className={`my-2 p-3 rounded-lg border ${
              selectedAddressIndex === index
                ? "bg-blue-100 border-blue-500" // Highlight selected address
                : "bg-white border-gray-300"
            }`}
          >
            <input
              type="radio"
              id={`address-${index}`}
              name="address"
              value={index} // Assign index as value
              checked={selectedAddressIndex === index} // Check by index comparison
              onChange={handleAddressChange} // Handle the change event
              className="mr-2 accent-blue-500" // Custom styling for the radio button
            />
            <label htmlFor={`address-${index}`} className="font-medium">
              {address.streetAddress}, {address.city}, {address.zipCode}
            </label>
            <button
              type="button" // Change button type to avoid form submission
              onClick={() => handleEdit(index)} // Edit button passes the index of the address
              className="ml-5 border px-2 font-medium text-blue-500 border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors"
            >
              Edit
            </button>
          </div>
        ))}
        <button
          type="submit"
          onClick={handleNewAddress}
          className="border px-2 py-1 font-medium text-blue-500 border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors"
        >
          + Add new
        </button>
      </form>

      <div className="mt-4">
        <p className="font-medium">Selected Address:</p>
        {selectedAddressIndex !== null ? (
          <p className="text-gray-700 font-semibold">
            {addresses[selectedAddressIndex].streetAddress},{" "}
            {addresses[selectedAddressIndex].city},{" "}
            {addresses[selectedAddressIndex].zipCode}
          </p>
        ) : (
          <p>No address selected.</p>
        )}
      </div>

      {showForm && (
        <AddressForm
          showFn={setShowForm}
          editableAddress={editableAddress}
          handleSubmit={editableAddress ? handleEdit : handleNewAddress} // Pass the appropriate handler
        />
      )}
    </div>
  );
}

export default AddressSelector;
