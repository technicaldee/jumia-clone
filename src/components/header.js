import '../Style.css'
import Logo from '../images/logo.png'

export default function Heading() {
    return (
        <div className="flex">
            <img src={Logo} alt="logo" className="logo" />
            <input placeholder="Search products, categories and brands" />
            <button>Search</button>
            <div style={{ padding: '10px' }}>
                <a href='/' style={{ marginRight: '10px' }}>Home</a>
                <a href='/about' style={{ marginRight: '10px' }}>About</a>
                <a href='/contact'>Contact</a>
            </div>
        </div>
    )
}
