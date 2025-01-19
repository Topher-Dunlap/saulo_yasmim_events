import PropTypes from "prop-types";
import {Radio, RadioGroup} from "@headlessui/react";

export default function ClassQuantitySelection(
    {
        setSelectedClassQuantity,
        selectedClass,
        selectedClassType,
        selectedClassQuantity
    }) {
    const isChecked = (selectedClassQuantity, type, quantity) => {
        return selectedClassQuantity.quantity === quantity;
    };
    return (
        <fieldset aria-label="Choose number of Classes" className="mt-8">
            <div className="flex items-center justify-between">
                <div className="text-sm/6 font-medium text-gray-900">Class Quantity</div>
            </div>
            {selectedClassType === 'allLevels' &&
                <RadioGroup
                    key="allLevelsQuantity"
                    className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6"
                    onChange={setSelectedClassQuantity}
                >
                    {selectedClass.paymentLinks.allLevels.map((classQuantity) => {
                        return (
                            <Radio
                                key={classQuantity.key + "allLevels"}
                                name={classQuantity.name}
                                value={classQuantity.quantity}
                                checked={isChecked(selectedClassQuantity, classQuantity.quantity)}
                                className={'cursor-pointer focus:outline-none flex items-center justify-center rounded-md bg-white px-8 py-2 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus])]:[&:not([data-checked])]:ring-inset'}
                            >
                                {classQuantity.quantity}
                            </Radio>
                        )
                    })}
                </RadioGroup>
            }
            {selectedClassType === 'intermediate' &&
                <RadioGroup
                    key="intermediateQuantity"
                    className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6"
                    onChange={setSelectedClassQuantity}
                >
                    {selectedClass.paymentLinks.intermediate.map((classQuantity) => {
                        return (
                            <Radio
                                key={classQuantity.key + "intermediate"}
                                name={classQuantity.name}
                                value={classQuantity.quantity}
                                checked={isChecked(selectedClassQuantity, classQuantity.quantity)}
                                className={'cursor-pointer focus:outline-none flex items-center justify-center rounded-md bg-white px-8 py-2 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus])]:[&:not([data-checked])]:ring-inset'}
                            >
                                {classQuantity.quantity}
                            </Radio>
                        )
                    })}
                </RadioGroup>
            }
        </fieldset>
    )
}

ClassQuantitySelection.propTypes = {
    selectedClass: PropTypes.object,
    setSelectedClassQuantity: PropTypes.func,
    selectedClassType: PropTypes.string,
    selectedClassQuantity: PropTypes.number,
};