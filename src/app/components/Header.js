import PropTypes from "prop-types";
import Pricing from "@/app/components/Pricing";


export default function Header({ navigation, setEventType }) {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="https://www.zoukminneapolis.com/" target="_blank" className="-m-1.5 p-1.5">
                        <img
                            alt="zouk minneapolis logo"
                            src="msp_logo.png"
                            className="h-20 w-auto"
                        />
                    </a>
                </div>
                <div className="flex justify-center lg:gap-x-12 min-[574px]:max-[1023px]:pr-24">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                                setEventType(item.value)
                            }}
                            className="inline-block p-4 sm:py-0 min-[768px]:max-[1000px]:text-1xl min-[360px]:max-[760px]:text-sm min-[200px]:max-[359px]:text-xs border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-300 dark:hover:text-gray-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="lg:flex lg:flex-1 lg:justify-end">
                </div>
            </nav>
        </header>
    )
}

Header.propTypes = {
    navigation: PropTypes.array,
    setEventType: PropTypes.func,
};