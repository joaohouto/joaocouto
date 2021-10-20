import React from 'react'

import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <header className="general">
                <h1 className="hover">
                    <Link href="/"><a>João Couto</a></Link>
                </h1>
            </header>
        </div>
    );
}

export default Header