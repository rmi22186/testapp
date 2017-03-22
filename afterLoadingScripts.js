/* eslint-disable*/
// TEST APP
mParticle.configureForwarder({
        "name":"Amplitude",
        "moduleId":53,
        "isDebug":true,
        "isVisible":true,
        "isDebugString":"true",
        "hasDebugString":"false",
        "settings":{
            "apiKey":"04c5e771c7f0222f886df7ef18c82998",
            "includeEmailAsUserProperty":"True",
            "userIdentification":"customerId",
            "instanceName": "instance1"
        },
        "screenNameFilters":[],
        "screenAttributeFilters":[],
        "userIdentityFilters":"",
        "userAttributeFilters":[],
        "eventNameFilters":[],
        "eventTypeFilters":[],
        "attributeFilters":[],
        "githubPath":null,
        "filteringEventAttributeValue":null
});

mParticle.configureForwarder({"name":"MixpanelEventForwarder","moduleId":10,"isDebug":true,"isVisible":true,"isDebugString":"true","hasDebugString":"false","settings":{"token":"c2769f762f35f53758c27e4e421c05da","useMixpanelPeople":"True","includeUserAttributes":"True","includeAttributionInfo":"False","useCustomerId":"True","forwardSessionStartEnd":"True","createProfileOnlyIfLoggedIn":"False","includeIpAddress":"True","sessionEndEventName":"session-end","sessionStartEventName":"session-start"},"screenNameFilters":[],"screenAttributeFilters":[],"userIdentityFilters":"","userAttributeFilters":[],"eventNameFilters":[],"eventTypeFilters":[],"attributeFilters":[],"githubPath":null,"filteringEventAttributeValue":null});


// //Another Test App
mParticle.configureForwarder({
        "name":"Amplitude",
        "moduleId":53,
        "isDebug":true,
        "isVisible":true,
        "isDebugString":"true",
        "hasDebugString":"false",
        "settings":{
            "apiKey":"1d9ab59e57cb183da22710de5eb970fa",
            "includeEmailAsUserProperty":"True",
            "userIdentification":"customerId",
            "instanceName": "instance2"
        },
        "screenNameFilters":[],
        "screenAttributeFilters":[],
        "userIdentityFilters":"",
        "userAttributeFilters":[],
        "eventNameFilters":[],
        "eventTypeFilters":[],
        "attributeFilters":[],
        "githubPath":null,
        "filteringEventAttributeValue":null
});

mParticle.init('e9ea8a9ba0c5bd48828e4cac23be681b')
