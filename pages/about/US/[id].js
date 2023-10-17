import React, {} from 'react'
import { useRouter } from 'next/router'
function About() {
    const router = useRouter()
    return (
        <h1>About us ID {router.query.id}</h1>
    )
}

export default About
