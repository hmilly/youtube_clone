import React from 'react'
import * as styles from '../styles/signin.module.css'

const signin = () => {
    return (
        <div className={styles.signin}>
            <main>
                <header>
                    <div>
                        <h2>G</h2>
                        <h2>o</h2>
                        <h2>o</h2>
                        <h2>g</h2>
                        <h2>l</h2>
                        <h2>e</h2>
                    </div>
                    <h2>Sign in</h2>
                    <h4>to continue to YouTube</h4>
                </header>
                <form>
                    <div>
                        <input placeholder="Email or phone"></input>
                        <button>Forgot email?</button>
                    </div>
                    <div>
                        <p>Not your computer? Use Guest mode to sign in privately.</p>
                        <button>Learn more</button>
                    </div>
                    <div>
                        <button>Create account</button>
                        <button>Next</button>
                    </div>
                </form>
            </main>
            <footer>
                <p>English (United States)</p>
                <p>Help</p>
                <p>Privacy</p>
                <p>Terms</p>
            </footer>
        </div>
    )
}

export default signin
