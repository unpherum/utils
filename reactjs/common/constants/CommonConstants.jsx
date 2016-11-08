export default {
    CODE_MAP_URL: "/private/rest/lookup/",
    CPF_CALCULATION_URL: "/private/rest/cpf/",
    TABLE_ROW_SELECT_COLOR: "rgb(100, 196, 53)",
    FORM_AGE_FORMAT: '###',
    FORM_MAX_AGE : 125,
    OPTION_YESNO:[
        {label: 'Yes', value: true},
        {label: 'No', value: false}
    ],
    OPTION_FREQUENCY:[
        {label: "Monthly", value: "MON"},
        {label: "Annually", value: "ANN"}
    ],
    OPTION_FREQUENCY_ONETIME:[
        {label: "One Time", value: "ONE", mode: "onetime"},
        {label: "Monthly", value: "MON", mode: "monthly"},
        {label: "Annually", value: "ANN", mode: "annually"}
    ],
    OPTION_PAYMENT_TYPE: [
        {label: "Cash", value: "CASH"},
        {label: "CPF", value: "CPF"}
    ],
    DisplayType:{
        string:1,
        currency:2,
        date:3,
        email: 4
    },
    OPTION_CURRENCY_TYPE: [
        {label: 'EUR', value:'EUR'},
        {label: 'USD', value:'USD'},
        {label: 'SGD', value:'SGD'},
        {label: 'GBP', value:'GBP'}
    ],

    OPTION_INCREASE_DECREASE:[
        {label: "Increase", value: "INC"},
        {label: "Decrease", value: "DEC"},
        {label: "Stop", value: "STOP"}
    ]

}