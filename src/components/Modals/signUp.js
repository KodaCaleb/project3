import React from "react";

export default function SignUpModal() {
  return (
    <>
      <button
        data-modal-target="authentication-modal"
        className="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full"
      >
        Sign up
      </button>

      {/* Modal */}

      <div className="flex flex-col items-center justify-center text-gray-700">
        <h3 className="pt-4 text-2xl text-center"> Create an Account!</h3>
        <form
          className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
          action=""
        >
          <div className="mb-4 md:flex md:justify-between">
            <div class="mb-4 md:mr-2 md:mb-0">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="firstName"
              >
                First Name
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="md:ml-2">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="lastName"
              >
                Last Name
              </label>
              <input
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            for="usernameField"
          >
            {" "}
            Username or Email
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="text"
          />
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            for="passwordField"
          >
            {" "}
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="password"
          />
          <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
