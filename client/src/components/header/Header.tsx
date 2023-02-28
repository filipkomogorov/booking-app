import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex justify-between p-4'>
            <Link to={'/'} className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
                <span>HeavenEstate</span>
            </Link>
            <div className='flex border border-gray-300 rounded-full py-2 px-4 gap-2 shadow-md shadow-gray-300'>
                <div>Buy</div>
                <div className="border-l border-gray-300"></div>
                <div>Rent</div>
                <div className="border-l border-gray-300"></div>
                <div>Find Agent</div>
            </div>

            <div>

            </div>
        </header>
    )
}

export default Header