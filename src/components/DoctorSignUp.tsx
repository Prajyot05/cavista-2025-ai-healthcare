import { useState } from "react";
import axios from "axios";

const DoctorSignUp = () => {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
    profilePic: File | null;
    email: string;
    qualifications: string;
    specialization: string;
    location: string;
  }>({
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    profilePic: null,
    email: "",
    qualifications: "",
    specialization: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, profilePic: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const {
      firstName,
      lastName,
      gender,
      phoneNumber,
      email,
      qualifications,
      specialization,
      location,
    } = formData;
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !phoneNumber ||
      !email ||
      !qualifications ||
      !specialization ||
      !location
    ) {
      alert("Please fill all required fields.");
      return;
    }

    // Prepare form data
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value as string | Blob);
      }
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/signup`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Signup successful", response.data);
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  return (
    <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Doctor Sign Up
        </h2>
      </div>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            name="qualifications"
            type="text"
            placeholder="Qualifications"
            required
            value={formData.qualifications}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            name="specialization"
            type="text"
            placeholder="Specialization"
            required
            value={formData.specialization}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            name="profilePic"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default DoctorSignUp;
