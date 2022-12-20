import React, { useState } from "react"

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    return (
        <div>
            {/* need onsubmit logic */}
            <form>
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
                > Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm
