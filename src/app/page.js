'use client'
import {useEffect, useState} from "react";
import dynamic from 'next/dynamic';
import Header from "@/app/components/Header";
import Title from "@/app/components/Title";
import BuyDialogue from "@/app/components/BuyDialogue/BuyDialogue";
import './mobile.css';
import BuyDialogueSingleClasses from "@/app/components/BuyDialogue/BuyDialogueSingleClasses";

const navigation = [
    {name: 'Residency', href: '#', current: true, value: 'residency'},
    {name: 'Weekender', href: '#', current: false, value: 'weekender'},
];

const Pricing = dynamic(() => import('./components/PricingOptions'), {
    ssr: false,
});

export default function Home() {

    const [eventType, setEventType] = useState('residency');
    const [selectedClass, setSelectedClass] = useState({ price: 0 });
    const [selectedPaymentLinks, setSelectedPaymentLinks] = useState({});
    const [isClassSelected, setIsClassSelected] = useState(false);
    const [selectedClassQuantity, setSelectedClassQuantity] = useState(0);
    const [selectedClassType, setSelectedClassType] = useState('allLevels');

    const sectionToView = () => {
        const section = document.getElementById("pricing");
        section.scrollIntoView();
    }

    useEffect(() => {
        if(selectedClassQuantity > 0){
            const classLevelOptions = selectedClass.paymentLinks[selectedClassType];
            const paymentOptions = classLevelOptions[selectedClassQuantity-1]?.paymentOptions;
            setSelectedPaymentLinks(paymentOptions)
        }
    },[selectedClass.paymentLinks, selectedClassQuantity, selectedClassType])

    return (
        <div className="bg-fixed bg-centerobject-coverinset-0-z-10 size-full bg-[url('../../public/s_y_1.JPG')]">
            <div className="bg-gray-900 bg-opacity-90 flex flex-col">
               <Header
                   navigation={navigation}
                   setEventType={setEventType}
               />
                <Title
                    eventType={eventType}
                    sectionToView={sectionToView}
                />
                <Pricing
                    eventType={eventType}
                    setSelectedClass={setSelectedClass}
                    selectedClass={selectedClass}
                    isClassSelected={isClassSelected}
                    setIsClassSelected={setIsClassSelected}
                    setSelectedPaymentLinks={setSelectedPaymentLinks}
                />
                {selectedClass.name === 'Single Classes' ?
                    <BuyDialogueSingleClasses
                        selectedClass={selectedClass}
                        setSelectedClass={setSelectedClass}
                        isClassSelected={isClassSelected}
                        setIsClassSelected={setIsClassSelected}
                        selectedPaymentLinks={selectedPaymentLinks}
                        setSelectedPaymentLinks={setSelectedPaymentLinks}
                        selectedClassQuantity={selectedClassQuantity}
                        setSelectedClassQuantity={setSelectedClassQuantity}
                        selectedClassType={selectedClassType}
                        setSelectedClassType={setSelectedClassType}
                    />
                    :
                    <BuyDialogue
                        selectedClass={selectedClass}
                        setSelectedClass={setSelectedClass}
                        isClassSelected={isClassSelected}
                        setIsClassSelected={setIsClassSelected}
                        selectedPaymentLinks={selectedPaymentLinks}
                        setSelectedPaymentLinks={setSelectedPaymentLinks}
                    />
                }
            </div>
        </div>
    )
};

