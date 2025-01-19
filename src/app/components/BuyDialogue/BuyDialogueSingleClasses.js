'use client'

import {useEffect} from 'react'
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'
import PropTypes from "prop-types";
import { formatNumberForUSCurrency } from '../../pricingUtils';

import PaymentLinks from "@/app/components/BuyDialogue/PaymentLinks";
import ClassTypeSelection from "@/app/components/BuyDialogue/ClassTypeSelection";
import ClassQuantitySelection from "@/app/components/BuyDialogue/ClassQuantitySelection";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function BuyDialogueSingleClasses({
        setSelectedClass,
        selectedClass,
        selectedPaymentLinks,
        setSelectedPaymentLinks,
        isClassSelected,
        setIsClassSelected,
        setSelectedClassQuantity,
        selectedClassQuantity,
        setSelectedClassType,
        selectedClassType,
    }) {

    const totalPriceForMultipleClasses = (quantity) => {
        return formatNumberForUSCurrency(quantity * 34);
    };

    useEffect(() => {
        setSelectedClassType('allLevels')
    }, [])

    return (
        <Dialog open={isClassSelected} onClose={()=> {}} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                                Single Classes {selectedClassQuantity > 0 ? `- ${selectedClassQuantity}` : ''}
                            </h2>
                            <h2 className="text-lg font-bold text-gray-900 sm:pr-12">
                                {
                                    selectedClassQuantity === 0
                                        ?
                                        `$0`
                                        :
                                        `Total ${totalPriceForMultipleClasses(selectedClassQuantity)}`
                                }
                            </h2>
                            {/* Class Level */}
                            <ClassTypeSelection
                                setSelectedClassType={setSelectedClassType}
                                selectedClass={selectedClass}
                                selectedClassType={selectedClassType}
                            />
                            {/* Number of Classes */}
                            <ClassQuantitySelection
                                setSelectedClassQuantity={setSelectedClassQuantity}
                                selectedClass={selectedClass}
                                selectedClassType={selectedClassType}
                                selectedClassQuantity={selectedClassQuantity}
                            />
                        </div>
                        <div className={classNames(selectedClassQuantity > 0 ? "visible" : "hidden", "mt-12")}>
                            <div className="mt-3 text-center sm:mt-5">
                            <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                    Choose Payment Method
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        You will be re-directed to the payment site of your choosing below. Any
                                        questions or concerns about payments please contact Topher Dunlap.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:gap-3">
                        <div hidden={selectedClassQuantity === 0}>
                            <PaymentLinks selectedPaymentLinks={selectedPaymentLinks} />
                        </div>
                            <div className="mt-5">
                                <button
                                    type="button"
                                    data-autofocus={true}
                                    onClick={() => {
                                        setSelectedClass({});
                                        setIsClassSelected(false);
                                        setSelectedPaymentLinks({});
                                        setSelectedClassQuantity(0);
                                    }}
                                    className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

BuyDialogueSingleClasses.propTypes = {
    setSelectedClass: PropTypes.func,
    selectedClass: PropTypes.object,
    selectedPaymentLinks: PropTypes.object,
    setSelectedPaymentLinks: PropTypes.func,
    isClassSelected: PropTypes.bool,
    setIsClassSelected: PropTypes.func,
    setSelectedClassQuantity: PropTypes.func,
    selectedClassQuantity: PropTypes.number,
    setSelectedClassType: PropTypes.func,
    selectedClassType: PropTypes.string,
};

