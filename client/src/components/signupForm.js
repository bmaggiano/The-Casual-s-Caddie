import { useState } from "react"

function SignupForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <form>
                <p className="text-white"> email: </p>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <p className="text-white"> username: </p>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <p className="text-white"> password: </p>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
