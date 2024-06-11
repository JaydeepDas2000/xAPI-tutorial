const sendStatement = () => {
    
    let myFirstStatement = {
        "actor": {
            "mbox": "mailto:owlcity992@gmail.com",
            "name": "Jaydeep Das",
            "objectType": "Agent"
        },
        "verb": {
            "id": "http://adlnet.gov/expapi/verbs/attempted",
            "display": {
                "en-US": "attempted"
            }
        },
        "object": {
            "id": "http://adlnet.gov/expapi/activities/example/test-v1",
            "definition": {
                "name": {
                    "en-US": "Test Course v1"
                },
                "description": {
                    "en-US": "This is for test"
                }
            },
            "objectType": "Activity"
        }
    }

    ADL.XAPIWrapper.sendStatement(myFirstStatement);

    alert("btn clicked")
}