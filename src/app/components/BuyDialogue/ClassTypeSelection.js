import PropTypes from "prop-types";
import {Radio, RadioGroup} from "@headlessui/react";

export default function ClassTypeSelection({ setSelectedClassType, selectedClass, selectedClassType }) {
    return (
        <fieldset aria-label="Choose a class type option">
            <div className="mt-6 flex items-center justify-between">
                <div className="text-sm/6 font-medium text-gray-900">Class Level</div>
            </div>

            <RadioGroup
                key={selectedClassType}
                className="isolate inline-flex flex-wrap mt-2 grid-cols-6 gap-3 sm:grid-cols-8"
                defaultValue={selectedClassType}
                onChange={setSelectedClassType}
            >
                {selectedClass.classTypes.map((type) => (
                    <Radio
                        defaultChecked={selectedClassType === type.name}
                        key={type.name}
                        name={type.name}
                        value={type.value}
                        aria-label={type.label}
                        className={'relative inline-flex items-center gap-x-1.5 rounded-md bg-white px-16 py-1 max-w-18 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus])]:[&:not([data-checked])]:ring-inset'}
                    >
                        {type.label}
                    </Radio>
                ))}
            </RadioGroup>
        </fieldset>
    )
}

ClassTypeSelection.propTypes = {
    selectedClass: PropTypes.object,
    setSelectedClassType: PropTypes.func,
    selectedClassType: PropTypes.string,
};