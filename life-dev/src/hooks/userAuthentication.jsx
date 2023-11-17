import { db } from "../firebase/config"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPasswrod,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from "react"

export const userAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)
    const auth = getAuth()

    function checkIfCancelled() {
        if (cancelled) return
    }

    async function createUser(data) {
        const { email, password } = data
        checkIfCancelled()

        setLoading(true)
        setError(null)

        const { user } = await createUserWithEmailAndPassword(
            auth, email, password
        ).catch((err) => {
            console.log(err)
        })
    }
}
