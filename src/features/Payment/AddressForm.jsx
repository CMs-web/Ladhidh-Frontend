import { useState, useEffect } from "react";

function AddressForm({
  editableAddress,
  handleSubmit,
  showFn,
  handleNewAddress,
}) {
  const [formData, setFormData] = useState({
    city: "",
    streetAddress: "",
    postalCode: "",
  });

  // Populate form fields if editableAddress is provided
  useEffect(() => {
    if (editableAddress) {
      setFormData({
        city: editableAddress.city || "",
        streetAddress: editableAddress.streetAddress || "",
        postalCode: editableAddress.zipCode || "",
      });
    }
  }, [editableAddress]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData); // Submit the updated address
    showFn(false); // Close the form after submission
  };

  return (
    <div
      onClick={() => {}}
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 overley"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative">
        <div
          onClick={() => showFn(false)}
          className="text-black absolute right-10 top-7 "
        >
          <i className="fa-regular fa-circle-xmark text-lg"></i>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="streetAddress"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Street address
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Update Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressForm;
