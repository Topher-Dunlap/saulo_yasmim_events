'use client'
import {useEffect, useState} from "react";
import dynamic from 'next/dynamic';
import Header from "@/app/components/Header";
import Title from "@/app/components/Title";
import BuyDialogue from "@/app/components/BuyDialogue";

const navigation = [
    {name: 'Residency', href: '#', current: true, value: 'residency'},
    {name: 'Weekender', href: '#', current: false, value: 'weekender'},
];

const Pricing = dynamic(() => import('../app/components/Pricing'), {
    ssr: false,
});


export default function Home() {

    const [eventType, setEventType] = useState('residency');
    const [selectedClass, setSelectedClass] = useState(false);
    const [selectedPaymentLinks, setSelectedPaymentLinks] = useState({});

    const sectionToView = () => {
        if(typeof document !== 'undefined' && typeof document !== null){
            const section = document.getElementById("pricing");
            section.scrollIntoView();
        }
    }

    return (
        <div className="bg-fixed bg-center object-cover inset-0 -z-10 size-full bg-[url('../../public/s_y_1.JPG')]">
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
                    setSelectedPaymentLinks={setSelectedPaymentLinks}
                />
                <BuyDialogue
                    selectedClass={selectedClass}
                    setSelectedClass={setSelectedClass}
                    selectedPaymentLinks={selectedPaymentLinks}
                    setSelectedPaymentLinks={setSelectedPaymentLinks}
                />
            </div>
        </div>
    )
};

