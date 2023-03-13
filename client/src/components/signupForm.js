import { useState } from "react"
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations';
import auth from '../utils/auth';

function SignupForm() {
    const [addUser, { error }] = useMutation(ADD_USER);
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [showError, setShowError] = useState(false);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: {...userFormData}
      });

      auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowError(true)
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

    return (
        <>
<div className="flex min-h-full flex-col pt-8 justify-center sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create your free account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="/Profile" className="font-medium text-green-700 hover:text-green-500">
                Login here
              </a>
            </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSignupSubmit}>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={userFormData.email}
                      onChange={handleInputChange}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

              <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      required
                      value={userFormData.username}
                      onChange={handleInputChange}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={userFormData.password}
                      onChange={handleInputChange}
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Sign Up
                  </button>
                </div>
                <div>
                {error && (
  <div className="text-center alert alert-danger" role="alert">
    Sign up failed. Please include a valid email, username & password (longer than 8 characters).
  </div>
)}
                </div>
              </form>
              </div>
              </div>
              </div>
        </>
    )
}

export default SignupForm
