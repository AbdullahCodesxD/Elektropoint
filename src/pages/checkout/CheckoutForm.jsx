import { useState } from "react";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can also add additional logic here, such as sending the data to a server
  };

  return (
    <form className="px-5 pb-3" onSubmit={handleSubmit}>
      <h2 className="text-[28px] font-medium mb-3 pt-2.5 border-t-2 border-black">
        Shipping Address
      </h2>
      <div className="mb-3">
        <label className="text-[16px] font-medium mb-1 block">First Name</label>
        <input
          className="w-full border border-[#444] rounded-lg px-3 py-4"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="text-[16px] font-medium mb-1 block">Last Name</label>
        <input
          className="w-full border border-[#444] rounded-lg px-3 py-4"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="text-[16px] font-medium mb-1 block">
          Country/Region
        </label>
        <input
          className="w-full border border-[#444] rounded-lg px-3 py-4"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="text-[16px] font-medium mb-1 block">
          Street Address
        </label>
        <input
          className="w-full border border-[#444] rounded-lg px-3 py-4"
          type="text"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="text-[16px] font-medium mb-1 block">Town/City</label>
        <input
          className="w-full border border-[#444] rounded-lg px-3 py-4"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="text-[16px] font-medium mb-1 block">
          State / Country
        </label>
        <input
          className="w-full border border-[#444] rounded-lg px-3 py-4"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="text-[16px] font-medium mb-1 block">
          Postcode / ZIP
        </label>
        <input
          className="w-full border border-[#444] rounded-lg px-3 py-4"
          type="text"
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="text-[16px] font-medium mb-1 block">Phone</label>
        <input
          className="w-full border border-[#444] rounded-lg px-3 py-4"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="text-[16px] font-medium mb-1 block">
          Email Address
        </label>
        <input
          className="w-full border border-[#444] rounded-lg px-3 py-4"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
}
