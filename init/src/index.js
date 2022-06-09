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
                    "point": 200,
                    "weight": 234
                },
                {
                    "point": 20,
                    "weight": 22
                },
                {
                    "point": 35,
                    "weight": 30
                },
                {
                    "point": 50,
                    "weight": 60
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
            "location": "UNAL 0001"
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



        const code1 = await axios.post(URL_BASE + "/code", {
            "code": "55B681"
        });
        assert.equal(code1.status, 201);
        assert.equal(code1.statusText, "Created");
        console.log(code1.data);

        const code2 = await axios.post(URL_BASE + "/code", {
            "code": "814C7B"
        });
        assert.equal(code2.status, 201);
        assert.equal(code2.statusText, "Created");
        console.log(code2.data);

        const code3 = await axios.post(URL_BASE + "/code", {
            "code": "D403B8"
        });
        assert.equal(code3.status, 201);
        assert.equal(code3.statusText, "Created");
        console.log(code3.data);

        const code4 = await axios.post(URL_BASE + "/code", {
            "code": "55F651"
        });
        assert.equal(code4.status, 201);
        assert.equal(code4.statusText, "Created");
        console.log(code4.data);

        const code5 = await axios.post(URL_BASE + "/code", {
            "code": "8ADCDC"
        });
        assert.equal(code5.status, 201);
        assert.equal(code5.statusText, "Created");
        console.log(code5.data);

        const code6 = await axios.post(URL_BASE + "/code", {
            "code": "9ABBEB"
        });
        assert.equal(code6.status, 201);
        assert.equal(code6.statusText, "Created");
        console.log(code6.data);


        const code7 = await axios.post(URL_BASE + "/code", {
            "code": "D53727"
        });
        assert.equal(code7.status, 201);
        assert.equal(code7.statusText, "Created");
        console.log(code7.data);

        const code8 = await axios.post(URL_BASE + "/code", {
            "code": "CF433E"
        });
        assert.equal(code8.status, 201);
        assert.equal(code8.statusText, "Created");
        console.log(code8.data);


        const code9 = await axios.post(URL_BASE + "/code", {
            "code": "6ECE0C"
        });
        assert.equal(code9.status, 201);
        assert.equal(code9.statusText, "Created");
        console.log(code9.data);


        const code10 = await axios.post(URL_BASE + "/code", {
            "code": "CEAA18"
        });
        assert.equal(code10.status, 201);
        assert.equal(code10.statusText, "Created");
        console.log(code10.data);
    } catch (e) {
        console.log(e);
    }
})();