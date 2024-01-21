import React from 'react';

function Header() {
  return (
    <header className='header' style={{ background: 'red' }}>
      <div className='container'>
        <form>
          <input
            type="search"
            placeholder="Buscar produtos"
            className='search_input'
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
