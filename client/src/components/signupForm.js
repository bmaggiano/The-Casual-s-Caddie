import { useState } from "react"
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations';
import auth from '../utils/auth';

function SignupForm() {
    const [addUser, { error, data }] = useMutation(ADD_USER);
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    try {
      const { data } = await addUser({
        variables: {...userFormData}
      });

      auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

    return (
        <div>
            <form onSubmit={handleSignupSubmit}>
                <p className=""> email: </p>
                <input
                    name="email"
                    type="email"
                    value={userFormData.email}
                    onChange={handleInputChange}
                />

                <p className=""> username: </p>
                <input
                    name="username"
                    type="text"
                    value={userFormData.username}
                    onChange={handleInputChange}
                />

                <p className=""> password: </p>
                <input
                    name="password"
                    type="password"
                    value={userFormData.password}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <button className="loginBtn"
                    type="submit"
                    variant="success"
                > Signup
                </button>
            </form>
        </div>
    )
}

export default SignupForm
