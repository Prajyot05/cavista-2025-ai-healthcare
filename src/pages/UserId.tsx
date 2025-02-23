import React from 'react';

const UserId = () => {
  const userId = '12345';

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">User ID</h2>
      <p className="text-lg">{userId}</p>
    </div>
  );
};

export default UserId; 