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
            price: '$250',
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
            price: '$130',
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
            price: '$130',
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
            name: 'Single Class',
            id: 'tier-singleClass',
            href: '#',
            price: '$34',
            description: 'This option gets you a single class for either intermediate or all-levels',
            features: ['One and a half hours of training thursdays either 7pm or 8:30pm depending on level.'],
            mostPopular: true,
            paymentLinks: {
                venmo: 'https://venmo.com/code?user_id=3802299340162664528&created=1736874415.6399531&printed=1',
                paypal: 'https://www.paypal.com/invoice/p/#ZNBEUS6FUU92H2KZ',
                stripe: 'https://buy.stripe.com/6oEdRh7TPdBk2Z23cf',
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
