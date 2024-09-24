import { useState } from "react";
import AddressForm from "./AddressForm";
import { useDeliveryAddress } from "./DeliveryAddressContext";

function AddressSelector({ addresses }) {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editableAddress, setEditableAddress] = useState(null);

  const { updateAddress } = useDeliveryAddress();

  const handleAddressChange = (e) => {
    const selected = addresses[e.target.value]; // Use the index to find the selected address
    setSelectedAddress(selected); // Set the full address object as selected
    updateAddress(selected);
  };

  const handleEdit = (index) => {
    setEditableAddress(addresses[index]); // Set the selected address for editing
    setShowForm(true); // Show the address form
  };

  const handleNewAddress = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div>
      <h1 className="font-medium">Your Address</h1>
      <form>
        {addresses.map((address, index) => (
          <div key={index} className="my-2">
            <input
              type="radio"
              id={`address-${index}`}
              name="address"
              value={index} // Assign index as value
              checked={selectedAddress === address} // Check if the current address is selected
              onChange={handleAddressChange} // Handle the change event
              className="mr-2"
            />
            <label htmlFor={`address-${index}`}>
              {address.streetAddress}, {address.city}, {address.zipCode}
            </label>
            <button
              type="button" // Change button type to avoid form submission
              onClick={() => handleEdit(index)} // Edit button passes the index of the address
              className="ml-5 border px-2 font-medium"
            >
              Edit
            </button>
          </div>
        ))}
        <button
          type="submit"
          onClick={handleNewAddress}
          className="border px-2 font-medium"
        >
          + Add new
        </button>
      </form>
      <div className="mt-4">
        <p className="font-semibold">Selected Address:</p>
        {selectedAddress ? (
          <p>
            {selectedAddress.streetAddress}, {selectedAddress.city},{" "}
            {selectedAddress.zipCode}
          </p>
        ) : (
          <p>No address selected.</p>
        )}
      </div>

      {showForm && (
        <AddressForm
          showFn={setShowForm}
          editableAddress={editableAddress}
          handleNewAddress={handleNewAddress}
        />
      )}
    </div>
  );
}

export default AddressSelector;
