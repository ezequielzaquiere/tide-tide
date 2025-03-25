const Header = () => {
    return (
        <header className='bg-dark text-white px-6 py-4 shadow-md flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>🌊 TideTide</h1>
            <nav className='space-x-4'>
                <button className='hover:underline'>Inicio</button>
                <button className='hover:underline'>Pronóstico</button>
                <button className='hover:underline'>Sobre</button>
            </nav>
        </header>
    );
};

export default Header;
