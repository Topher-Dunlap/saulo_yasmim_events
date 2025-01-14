import { useState } from 'react';
import {
    Radio,
    RadioGroup,
} from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import PropTypes from 'prop-types';
import { PricingData } from '../pricingData/PricingData';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing({ eventType, setSelectedClass, setSelectedPaymentLinks }) {
    const [event, setEvent] = useState('residency');

    return (
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8 mb-12" id="pricing">
            <div className="mx-auto max-w-4xl text-center">
                <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                    Classes
                </p>
            </div>
            {eventType === 'residency' && (
                <>
                    <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-purple-300 sm:text-xl/8">
                        Classes on Thursdays for the month of February.
                    </p>
                    <p className="mx-auto max-w-2xl text-pretty text-center text-lg font-medium text-purple-300 sm:text-xl/8">
                        7-10pm at Tapestry Dance Studio.
                    </p>
                </>
            )}
            {eventType === 'weekender' && (
                <>
                    <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-indigo-600 sm:text-xl/8">
                        February 28th - March 2nd.
                    </p>
                    <p className="mx-auto max-w-2xl text-pretty text-center text-lg font-medium text-indigo-600 sm:text-xl/8">
                        More Details Soon.
                    </p>
                </>
            )
            }
            <div className="mt-8 flex justify-center">
                <fieldset aria-label="Pass Type">
                    <RadioGroup
                        value={event}
                        onChange={setEvent}
                        className="grid grid-cols-1 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200"
                    >
                        <Radio
                            value={eventType}
                            className="cursor-pointer rounded-full px-2.5 py-1 text-white bg-indigo-600"
                        >
                            {eventType === 'residency' ? 'Residency' : 'Weekender'}
                        </Radio>
                    </RadioGroup>
                </fieldset>
            </div>
            <div
                className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
                {eventType === 'residency' && (PricingData.residencyTiers.map((tier) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                            'rounded-3xl p-8',
                        )}
                    >
                        <h2
                            id={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'text-purple-300' : 'text-purple-300',
                                'text-lg/8 font-semibold',
                            )}
                        >
                            {tier.name}
                        </h2>
                        <span className="text-4xl font-semibold tracking-tight text-white">
                    {tier.price}
                  </span>
                        <button
                            type="button"
                            aria-describedby={tier.id}
                            onClick={() => {
                                setSelectedClass(true);
                                setSelectedPaymentLinks(tier.paymentLinks);
                            }}
                            className={classNames(
                                tier.mostPopular
                                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                            )}
                        >
                            Buy Class
                        </button>
                        <ul role="list" className="mt-8 space-y-3 text-sm/6 white">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600"/>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )))}
                {eventType === 'weekender' && (PricingData.weekenderTiers.map((tier) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                            'rounded-3xl p-8',
                        )}
                    >
                        <h2
                            id={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'text-indigo-600' : 'text-purple-300',
                                'text-lg/8 font-semibold',
                            )}
                        >
                            {tier.name}
                        </h2>
                        <span className="text-4xl font-semibold tracking-tight text-white">
                    {tier.price}
                  </span>
                        <button
                            type="button"
                            aria-describedby={tier.id}
                            onClick={() => setSelectedBuy(true)}
                            className={classNames(
                                tier.mostPopular
                                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                            )}
                        >
                            Buy Class
                        </button>
                        <ul role="list" className="mt-8 space-y-3 text-sm/6 white">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600"/>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )))}
            </div>
        </div>
    )
};

Pricing.propTypes = {
    eventType: PropTypes.string,
    setSelectedClass: PropTypes.func,
    setSelectedPaymentLinks: PropTypes.func,
};
