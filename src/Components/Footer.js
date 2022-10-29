import React from 'react'

export default function Footer() {

    var date = new Date();

    return (
        <footer>
            <p>Copyright {date.getFullYear()} </p>
        </footer>
    )
}



