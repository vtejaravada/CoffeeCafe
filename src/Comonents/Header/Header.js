
import React from 'react';
import "../Header/Header.css"

const Header = ({ heading }) => {
  return (
    <>
        <section className="header" >
            <h1>{heading}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptas doloribus corporis facilis soluta? Inventore enim est dolores cupiditate dignissimos!</p>
        </section>
    </>
  )
}

export default Header