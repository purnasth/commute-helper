import React from 'react';
import { useParams } from 'react-router-dom';
import { userRoles } from '../constants/data';

const RoleBasedPage = () => {
  const { roleId } = useParams<{ roleId: string }>();
  const role = userRoles.find((r) => r.id === roleId);

  return (
    <main>
      <h1 className="text-2xl font-bold text-teal-500">
        {role ? `Welcome, ${role.name}` : 'Role Not Found'}
      </h1>
      {role ? (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
          {/* {role.permissions.map((permission, index) => (
            <li key={index}>{permission}</li>
          ))} */}
          Test Test {role.name}
        </ul>
      ) : (
        <p className="mt-4 text-base text-gray-700">
          The role you are looking for does not exist.
        </p>
      )}
      <p className="mt-4 text-base text-gray-700">
        This page is designed to display information based on the role ID
        provided in the URL. The role ID is used to fetch the corresponding role
        data from a predefined list of roles. If the role ID is valid, the page
        will display the role name and its associated permissions. If the role
        ID is invalid, a message will be displayed indicating that the role was
        not found. This approach allows for dynamic content rendering based on
        user roles, enhancing the user experience and providing relevant
        information based on the user's role within the application.
      </p>
    </main>
  );
};

export default RoleBasedPage;
