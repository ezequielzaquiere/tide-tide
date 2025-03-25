const Footer = () => {
    return (
        <footer className='bg-blue-900 text-white text-sm py-4 px-6 flex items-center justify-between'>
            <p>
                © {new Date().getFullYear()} TideTide. Todos los derechos
                reservados.
            </p>
            <div className='space-x-4'>
                <a href='#' className='hover:underline'>
                    Privacidad
                </a>
                <a href='#' className='hover:underline'>
                    Contacto
                </a>
            </div>
        </footer>
    );
};

export default Footer;
