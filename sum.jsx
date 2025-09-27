import React, { useState } from 'react';

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Save user data using GraphQL mutation
    console.log('Saving user data via GraphQL API');
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `mutation { updateUser(id: ${user.id}, data: $data) { id name email } }`
      })
    });
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <h2>User Profile - Version 2.0 Beta</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel Edit' : 'Edit Profile'}
      </button>
      {isEditing && (
        <button onClick={handleSave}>Save Changes</button>
      )}
    </div>
  );
};

export default UserProfile;
