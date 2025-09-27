import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Save user data to database
    console.log('Saving user data via REST API');
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <h2>User Profile - Version 1.0</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => setIsEditing(!isEditing)}>
        Edit Profile
      </button>
      {isEditing && (
        <button onClick={handleSave}>Save Changes</button>
      )}
    </div>
  );
};

export default UserProfile;
