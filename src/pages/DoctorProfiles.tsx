import React from 'react';
import { Star, MapPin, Calendar, Phone } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.8,
    reviews: 127,
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    availability: 'Available Today',
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    rating: 4.9,
    reviews: 94,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    availability: 'Next Available: Tomorrow',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Family Medicine',
    rating: 4.7,
    reviews: 156,
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    availability: 'Available Today',
  },
];

const DoctorProfiles = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Find a Doctor</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                {doctor.availability}
              </div>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">{doctor.name}</h2>
              <p className="text-blue-600 font-medium">{doctor.specialty}</p>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center text-sm">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-medium">{doctor.rating}</span>
                  <span className="text-gray-500 ml-1">({doctor.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {doctor.location}
                </div>
              </div>
              
              <div className="mt-6 flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Visit
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorProfiles;