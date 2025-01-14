import PropTypes from "prop-types";
import Pricing from "@/app/components/Pricing";


export default function Title({ eventType, sectionToView }) {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 min-[200px]:max-[1023px]:mb-96">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div
                    className="sm:mb-24 my-24 min-[200px]:max-[650px]:mt-48 max-sm:text-3xl sm:flex sm:justify-center">
                </div>
                <div className="text-center">
                    <h1 className="text-balance lg:text-7xl min-[761px]:max-[1023px]:text-6xl min-[360px]:max-[760px]:text-4xl font-semibold tracking-tight text-white">
                        {eventType === 'residency' ? 'Saulo & Yasmim' : 'Saulo & ?????'}
                    </h1>
                    <h3 className="text-balance lg:text-5xl min-[761px]:max-[1023px]:text-4xl min-[360px]:max-[760px]:text-3xl font-semibold tracking-tight text-white">
                        {eventType === 'residency' ? 'Residency' : 'Weekender'}
                    </h3>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button
                            type="button"
                            onClick={() => sectionToView()}
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Get Passes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Title.propTypes = {
    eventType: PropTypes.string,
    sectionToView: PropTypes.func,
};