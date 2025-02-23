const HealthDataUpload = () => {
  const handleSubmit = () => {
    // Implement submit function
  };

  // Add more comprehensive doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      qualification: "MD, Cardiology",
      rating: 4.8,
      experience: "15 years",
      specialization: "Heart Specialist",
      image: "/doctor-placeholder.jpg",
      description: "Experienced cardiologist specializing in preventive cardiac care and heart disease management."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      qualification: "MBBS, Neurology",
      rating: 4.9,
      experience: "12 years",
      specialization: "Neurologist",
      image: "/doctor-placeholder.jpg",
      description: "Expert in treating neurological disorders with a focus on innovative therapeutic approaches."
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      qualification: "MD, Pediatrics",
      rating: 4.7,
      experience: "10 years",
      specialization: "Pediatrician",
      image: "/doctor-placeholder.jpg",
      description: "Dedicated pediatrician with expertise in child development and preventive care."
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      qualification: "MD, Orthopedics",
      rating: 4.8,
      experience: "18 years",
      specialization: "Orthopedic Surgeon",
      image: "/doctor-placeholder.jpg",
      description: "Specialized in joint replacement surgery and sports medicine rehabilitation."
    },
    {
      id: 5,
      name: "Dr. Priya Patel",
      qualification: "MBBS, Dermatology",
      rating: 4.9,
      experience: "8 years",
      specialization: "Dermatologist",
      image: "/doctor-placeholder.jpg",
      description: "Expert in cosmetic dermatology and skin cancer treatment."
    },
    {
      id: 6,
      name: "Dr. David Kim",
      qualification: "MD, Psychiatry",
      rating: 4.7,
      experience: "14 years",
      specialization: "Psychiatrist",
      image: "/doctor-placeholder.jpg",
      description: "Specializing in anxiety, depression, and mental health management."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Symptoms Form Section */}
      <div className="max-w-3xl mx-auto bg-white rounded-[32px] shadow-sm p-12 mb-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Enter Symptoms</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <textarea
              placeholder="Enter your symptoms"
              rows={4}
              className="w-full py-4 px-6 border-2 border-blue-100 rounded-[20px] focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-lg resize-none"
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="min-w-[160px] px-12 py-4 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition-colors duration-200">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Doctors Section */}
      <div className="bg-gray-50 rounded-xl shadow-md p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Medical Experts</h2>
          <p className="mt-2 text-gray-600">Connect with experienced healthcare professionals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              onClick={() => window.location.href = "/src/pages/DoctorInfo"}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:bg-sky-600 group"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 mt-2 group-hover:text-white/80">
                  {doctor.description}
                </p>
                <div className="mt-4 flex items-center">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 group-hover:text-white/80">
                      {doctor.specialization}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-600 group-hover:text-white/80">{doctor.rating}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600 group-hover:text-white/80">{doctor.experience}</span>
                    </div>
                  </div>
                  <button 
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-white/20"
                  >
                    <span className="text-gray-600 group-hover:text-white">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthDataUpload;
