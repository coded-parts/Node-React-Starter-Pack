import React, { useEffect, useContext, useCallback } from "react";
import { UserCircle } from "lucide-react";
import { api } from "../utils/api";

import UserContext from "../store/UserContext";

const Users = () => {
  const { state, dispatch } = useContext(UserContext);

  const fetchUsers = useCallback(async () => {
    dispatch({ type: "FETCH_USERS_START" });
    try {
      const data = await api.get("/users");
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_USERS_ERROR", payload: error.message });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (state.loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        {state.error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Users</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {state.users.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4">
              <UserCircle size={40} className="text-gray-400" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {user.name}
                </h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

