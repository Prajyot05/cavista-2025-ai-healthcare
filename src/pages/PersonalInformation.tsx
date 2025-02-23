
import { Link } from 'react-router-dom';

const PersonalInformation = () => {
  const userInfo = {
    userId: '12345',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    profilePic: '/path/to/profile-pic.jpg',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    age: 30,
    location: 'New York, USA',
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      <div className="flex items-center mb-4">
        <img
          src={userInfo.profilePic}
          alt="Profile"
          className="h-20 w-20 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold">{`${userInfo.firstName} ${userInfo.lastName}`}</h3>
          <p className="text-gray-600">{userInfo.email}</p>
        </div>
      </div>
      <ul className="space-y-2">
        <li><Link to="/user-id"><strong>User ID:</strong> {userInfo.userId}</Link></li>
        <li><Link to="/first-name"><strong>First Name:</strong> {userInfo.firstName}</Link></li>
        <li><Link to="/last-name"><strong>Last Name:</strong> {userInfo.lastName}</Link></li>
        <li><Link to="/gender"><strong>Gender:</strong> {userInfo.gender}</Link></li>
        <li><Link to="/email"><strong>Email:</strong> {userInfo.email}</Link></li>
        <li><Link to="/phone-number"><strong>Phone Number:</strong> {userInfo.phoneNumber}</Link></li>
        <li><Link to="/age"><strong>Age:</strong> {userInfo.age}</Link></li>
        <li><Link to="/location"><strong>Location:</strong> {userInfo.location}</Link></li>
      </ul>
    </div>
  );
};

export default PersonalInformation; 