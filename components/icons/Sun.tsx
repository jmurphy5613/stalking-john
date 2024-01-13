

interface SunProps {
    fill?: string
}

const Sun: React.FC<SunProps> = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19.9999" cy="20" r="6.16667" stroke="white" />
            <path d="M20 8.33333V5" stroke="white" stroke-linecap="round" />
            <path d="M20 35V31.6667" stroke="white" stroke-linecap="round" />
            <path d="M28.2497 11.7499L30.6067 9.39291" stroke="white" stroke-linecap="round" />
            <path d="M9.39347 30.6074L11.7505 28.2503" stroke="white" stroke-linecap="round" />
            <path d="M31.6667 20L35 20" stroke="white" stroke-linecap="round" />
            <path d="M4.99992 20L8.33325 20" stroke="white" stroke-linecap="round" />
            <path d="M28.2497 28.2501L30.6067 30.6071" stroke="white" stroke-linecap="round" />
            <path d="M9.39347 9.39264L11.7505 11.7497" stroke="white" stroke-linecap="round" />
        </svg>

    )
}

export default Sun