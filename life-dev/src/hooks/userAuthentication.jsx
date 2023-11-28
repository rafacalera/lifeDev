import { db } from "../firebase/config"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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

    function errorMessage(error) {
        if (error.message.includes("Password")) {
            return "A senha precisa conter pelo menos 6 caracteres."
        }
        if (error.message.includes("email-already-in-use")) {
            return "Este e-mail ja está cadastrado."
        }
        return "Ocorreu um erro, tente novamente mais tarde"
    }

    async function createUser(data) {
        const { email, senha, displayName } = data
        checkIfCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth, email, senha)

            await updateProfile(user, {
                displayName: displayName
            })
            setLoading(false)

            return user
        } catch (err) {
            console.log(`${typeof err}: ${err}`)

            setLoading(false)
            setError(errorMessage(err))
        }

    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading
    }
}
