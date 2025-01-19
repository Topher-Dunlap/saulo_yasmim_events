import PropTypes from "prop-types";

export default function PaymentLinks({ selectedPaymentLinks }) {
    return (
        <div className=" flex flex-row justify-around">
            <button
                type="button"
                onClick={() => window.open(`${selectedPaymentLinks.stripe}`)}
                className="rounded-md p-4 bg-white shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-gray-50"
            >
                <img src="/stripe.svg" alt="stripe"/>
            </button>
            <button
                type="button"
                onClick={() => window.open(`${selectedPaymentLinks.paypal}`)}
                className="rounded-md p-4 bg-white shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-gray-50"
            >
                <img src="/paypal.svg" alt="paypal"/>
            </button>
            <button
                type="button"
                onClick={() => window.open(`${selectedPaymentLinks.venmo}`)}
                className="rounded-md p-4 bg-white shadow-sm ring-1 ring-inset ring-indigo-600 hover:bg-gray-50"
            >
                <img src="/venmo.svg" alt="venmo"/>
            </button>
        </div>
    )
}

PaymentLinks.propTypes = {
    selectedPaymentLinks: PropTypes.object,
};