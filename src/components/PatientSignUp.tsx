import { useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

const PatientSignUp = () => {
  const { user, setUser } = useAuthStore();
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    phoneNumber: string;
    age: string;
    location: string;
  }>({
    firstName: "",
    lastName: "",
    gender: "",
    email: user?.email || "",
    phoneNumber: "",
    age: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    const { firstName, lastName, gender, email, phoneNumber, age, location } =
      formData;
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !email ||
      !phoneNumber ||
      !age ||
      !location
    ) {
      alert("Please fill all required fields.");
      return;
    }

    // Prepare data for submission
    // const formDataToSend = new FormData();
    // Object.entries(formData).forEach(([key, value]) => {
    //   if (value !== null) {
    //     formDataToSend.append(key, value as string | Blob);
    //   }
    // });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/patients/register`,
        formData
      );
      setUser(response.data.data);
      console.log("Signup successful", response.data);
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  return (
    <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Patient Sign Up</h2>
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
            disabled
            value={formData.email}
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
            name="age"
            type="number"
            placeholder="Age"
            required
            value={formData.age}
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

export default PatientSignUp;
