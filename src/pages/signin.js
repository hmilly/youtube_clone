import React from 'react'
import * as styles from '../styles/signin.module.css'

const signin = () => {
    return (
        <div className={styles.signin}>
            <main>
                <h2>Google</h2>
                <h2>Sign in</h2>
                <h4>to continue to YouTube</h4>
            </main>
            <form>
                <div>
                    <input placeholder="Email or phone"></input>
                    <button className={styles.btnTxt}>Forgot email?</button>
                </div>

                <div>
                    <p>Not your computer? Use Guest mode to sign in privately.</p>
                    <button className={styles.btnTxt}>Learn more</button>
                </div>
                <div>
                    <button className={styles.btnTxt}>Create account</button>
                    <button>Next</button>
                </div>
            </form>
        </div>
    )
}

export default signin
