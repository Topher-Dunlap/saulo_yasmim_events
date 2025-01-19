export const radioData = {
    allLevelsOneKey: '1AllLevels',
    allLevelsTwoKey: '2AllLevels',
    allLevelsThreeKey: '3AllLevels',
    allLevels4Key: '4AllLevels',
    intOneKey: '1intermediate',
    intTwoKey: '2intermediate',
    intThreeKey: '3intermediate',
    intFourKey: '4intermediate',
}

export const PricingData = {
    events: [
        { value: 'residency', label: 'Residency', priceSuffix: '/residency' },
        { value: 'weekender', label: 'Weekender', priceSuffix: '/weekender' },
    ],
    residencyTiers: [
        {
            name: 'Full Pass',
            id: 'tier-fullPass',
            href: '#',
            price: 250,
            description: 'This pass gives you access to 8, 1.5 hour classes.',
            features: [
                '6 training hours All Level Classes',
                '6 training hours Intermediate Level Classes',
                '7-10pm on Thursdays'
            ],
            mostPopular: true,
            paymentLinks: {
                venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874315.256309&printed=1',
                paypal: 'https://www.paypal.com/invoice/p/#6C8WXKGH6EMJTPYX',
                stripe: 'https://buy.stripe.com/eVa9B15LH8h02Z2144',
            }
        },
        {
            name: 'Intermediate Track',
            id: 'tier-intermediate-track',
            href: '#',
            price: 130,
            description: 'This pass give you access to 4, 1.5hr Intermediate Level classes.',
            features: ['6 training hours Intermediate Level Classes', '1.5hrs, 8:30pm on Thursdays'],
            mostPopular: true,
            paymentLinks: {
                venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874364.4586558&printed=1',
                paypal: 'https://www.paypal.com/invoice/p/#TU476LRZKSNP66ZU',
                stripe: 'https://buy.stripe.com/9AQ14v0rnap81UY8wy',
            }
        },
        {
            name: 'All Levels Track',
            id: 'tier-allLevelsTrack',
            href: '#',
            price: 130,
            description: 'This pass give you access to 4, 1.5hr All Level classes.',
            features: ['6 training hours All Level Classes', '1.5hrs, 7pm on Thursdays'],
            mostPopular: true,
            paymentLinks: {
                venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874364.4586558&printed=1',
                paypal: 'https://www.paypal.com/invoice/p/#VYK4U6453X2G5RD9',
                stripe: 'https://buy.stripe.com/fZe7sT6PL2WGgPS145',
            }
        },
        {
            name: 'Single Classes',
            id: 'tier-singleClass',
            href: '#',
            price: [34, 136],
            classTypes: [
                {
                    name: 'allLevels',
                    label: 'All Levels',
                    value: 'allLevels',
                },
                {
                    name: 'intermediate',
                    label: 'Intermediate',
                    value: 'intermediate',
                },
            ],
            description: 'This option gets you to buy single classes for either intermediate or all-levels',
            features: [' Each class is one and a half hours of training thursdays either 7pm or 8:30pm depending on level.'],
            mostPopular: true,
            paymentLinks: {
                allLevels: [
                    {
                        key: radioData.allLevelsOneKey,
                        name: '1AllLevels',
                        total: 34,
                        quantity: 1,
                        paymentOptions: {
                            venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874415.6399531&printed=1',
                            paypal: 'https://www.paypal.com/invoice/p/#NJ9P8GUS2SFA6TCF',
                            stripe: 'https://buy.stripe.com/3cs9B1de9eFo8jmdQU',
                        }
                    },
                    {
                        key: radioData.allLevelsTwoKey,
                        name: '2AllLevels',
                        total: 68,
                        quantity: 2,
                        paymentOptions: {
                            venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874415.6399531&printed=1',
                            paypal: 'https://www.paypal.com/invoice/p/#HTNGXLUXJ479ZUBN',
                            stripe: 'https://buy.stripe.com/6oE9B15LH2WG1UY7sy',
                        }
                    },
                    {
                        key: radioData.allLevelsThreeKey,
                        name: '3AllLevels',
                        total: 102,
                        quantity: 3,
                        paymentOptions: {
                            venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874415.6399531&printed=1',
                            paypal: 'https://www.paypal.com/invoice/p/#XTQCM5QBETM5RTJN',
                            stripe: 'https://buy.stripe.com/7sI7sTca554OfLO8wD',
                        }
                    },
                    {
                        key: radioData.allLevelsFourKey,
                        name: '4AllLevels',
                        total: 136,
                        quantity: 4,
                        paymentOptions: {
                            venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874415.6399531&printed=1',
                            paypal: 'https://www.paypal.com/invoice/p/#267RZVSP495HUSTW',
                            stripe: 'https://buy.stripe.com/aEU5kL0rncxgdDGfZ9',
                        }
                    },
                ],
                intermediate: [
                    {
                        key: radioData.intOneKey,
                        name: '1intermediate',
                        total: 34,
                        quantity: 1,
                        paymentOptions: {
                            venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874415.6399531&printed=1',
                            paypal: 'https://www.paypal.com/invoice/p/#WWF88LRWWXZXH33V',
                            stripe: 'https://buy.stripe.com/7sIaF5b612WG2Z200a',
                        }
                    },
                    {
                        key: radioData.intTwoKey,
                        name: '2intermediate',
                        total: 68,
                        quantity: 2,
                        paymentOptions: {
                            venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874415.6399531&printed=1',
                            paypal: 'https://www.paypal.com/invoice/p/#RMS63QYDWVJNVKLD',
                            stripe: 'https://buy.stripe.com/28odRh4HD68SdDG3co',
                        }
                    },
                    {
                        key: radioData.intThreeKey,
                        name: '3intermediate',
                        total: 102,
                        quantity: 3,
                        paymentOptions: {
                            venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874415.6399531&printed=1',
                            paypal: 'https://www.paypal.com/invoice/p/#E9UUCJH3S7Z35J5X',
                            stripe: 'https://buy.stripe.com/9AQ8wX7TPdBk1UY7sG',
                        }
                    },
                    {
                        key: radioData.intFourKey,
                        name: '4intermediate',
                        total: 136,
                        quantity: 4,
                        paymentOptions: {
                            venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874415.6399531&printed=1',
                            paypal: 'https://www.paypal.com/invoice/p/#855TPUVDRPWUFAYZ',
                            stripe: 'https://buy.stripe.com/14k8wX8XTap8aru9AP',
                        }
                    },
                ],
            }
        },
    ],
    weekenderTiers: [
        {
            name: 'Full Pass',
            id: 'tier-singleClass',
            href: '#',
            price: 'TBD',
            description: 'Details Coming Soon.',
            features: ['Details Coming Soon.'],
            mostPopular: true,
            paymentLinks: {
                venmo: '',
                paypal: '',
                stripe: '',
            }
        },
    ],
}
