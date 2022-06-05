const axios = require("axios");
const assert = require("node:assert");

const URL_BASE = process.env.URL || "http://localhost:3000";

(async () => {
    try {
        const user1 = await axios.post(URL_BASE + "/user", {
            "first_name": "Luis Miguel",
            "last_name": "Báez Aponte",
            "id_type": "CC",
            "id": 1032503371,
            "incentive": [
                {
                    "point": 15,
                    "weight": 1000
                }
            ],
            "username": "lmbaeza",
            "password": "password"
        });
        assert.equal(user1.status, 201);
        assert.equal(user1.statusText, "Created");
        console.log(user1.data);

        const user2 = await axios.post(URL_BASE + "/user", {
            "first_name": "administrator",
            "last_name": "I",
            "id_type": "CC",
            "id": 123,
            "role": "ADMIN",
            "incentive": [],
            "username": "admin",
            "password": "password"
        });
        assert.equal(user2.status, 201);
        assert.equal(user2.statusText, "Created");
        console.log(user2.data);




        const container1 = await axios.post(URL_BASE + "/container", {
            "capacity": 1000,
            "location": "Universidad Nacional"
        });
        assert.equal(container1.status, 201);
        assert.equal(container1.statusText, "Created");
        console.log(container1.data);



        const company1 = await axios.post(URL_BASE + "/company", {
            "name": "H&M",
            "location": "Carrera x N° y - z"
        });
        assert.equal(company1.status, 201);
        assert.equal(company1.statusText, "Created");
        console.log(company1.data);
    } catch (e) {
        console.log(e);
    }
})();