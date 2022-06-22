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

        const code11 = await axios.post(URL_BASE + '/code', {
            'code': 'SSOFLE'
        });
        assert.equal(code11.status, 201);
        assert.equal(code11.statusText, 'Created');
        console.log(code11.data);
        

        const code12 = await axios.post(URL_BASE + '/code', {
            'code': 'M1TDNF'
        });
        assert.equal(code12.status, 201);
        assert.equal(code12.statusText, 'Created');
        console.log(code12.data);
        

        const code13 = await axios.post(URL_BASE + '/code', {
            'code': '88ZB42'
        });
        assert.equal(code13.status, 201);
        assert.equal(code13.statusText, 'Created');
        console.log(code13.data);
        

        const code14 = await axios.post(URL_BASE + '/code', {
            'code': 'MBZQIS'
        });
        assert.equal(code14.status, 201);
        assert.equal(code14.statusText, 'Created');
        console.log(code14.data);
        

        const code15 = await axios.post(URL_BASE + '/code', {
            'code': '5ALLH1'
        });
        assert.equal(code15.status, 201);
        assert.equal(code15.statusText, 'Created');
        console.log(code15.data);
        

        const code16 = await axios.post(URL_BASE + '/code', {
            'code': 'ECJLG1'
        });
        assert.equal(code16.status, 201);
        assert.equal(code16.statusText, 'Created');
        console.log(code16.data);
        

        const code17 = await axios.post(URL_BASE + '/code', {
            'code': '0MKQPX'
        });
        assert.equal(code17.status, 201);
        assert.equal(code17.statusText, 'Created');
        console.log(code17.data);
        

        const code18 = await axios.post(URL_BASE + '/code', {
            'code': '55VEP8'
        });
        assert.equal(code18.status, 201);
        assert.equal(code18.statusText, 'Created');
        console.log(code18.data);
        

        const code19 = await axios.post(URL_BASE + '/code', {
            'code': 'RU4IVO'
        });
        assert.equal(code19.status, 201);
        assert.equal(code19.statusText, 'Created');
        console.log(code19.data);
        

        const code20 = await axios.post(URL_BASE + '/code', {
            'code': '4DUQUY'
        });
        assert.equal(code20.status, 201);
        assert.equal(code20.statusText, 'Created');
        console.log(code20.data);
        

        const code21 = await axios.post(URL_BASE + '/code', {
            'code': 'NZ8D0W'
        });
        assert.equal(code21.status, 201);
        assert.equal(code21.statusText, 'Created');
        console.log(code21.data);
        

        const code22 = await axios.post(URL_BASE + '/code', {
            'code': 'SD10TG'
        });
        assert.equal(code22.status, 201);
        assert.equal(code22.statusText, 'Created');
        console.log(code22.data);
        

        const code23 = await axios.post(URL_BASE + '/code', {
            'code': 'NGM8XF'
        });
        assert.equal(code23.status, 201);
        assert.equal(code23.statusText, 'Created');
        console.log(code23.data);
        

        const code24 = await axios.post(URL_BASE + '/code', {
            'code': 'GKJPSM'
        });
        assert.equal(code24.status, 201);
        assert.equal(code24.statusText, 'Created');
        console.log(code24.data);
        

        const code25 = await axios.post(URL_BASE + '/code', {
            'code': 'TPF5LG'
        });
        assert.equal(code25.status, 201);
        assert.equal(code25.statusText, 'Created');
        console.log(code25.data);
        

        const code26 = await axios.post(URL_BASE + '/code', {
            'code': 'D6DYQ6'
        });
        assert.equal(code26.status, 201);
        assert.equal(code26.statusText, 'Created');
        console.log(code26.data);
        

        const code27 = await axios.post(URL_BASE + '/code', {
            'code': 'XE4Q0Z'
        });
        assert.equal(code27.status, 201);
        assert.equal(code27.statusText, 'Created');
        console.log(code27.data);
        

        const code28 = await axios.post(URL_BASE + '/code', {
            'code': 'FU8XRT'
        });
        assert.equal(code28.status, 201);
        assert.equal(code28.statusText, 'Created');
        console.log(code28.data);
        

        const code29 = await axios.post(URL_BASE + '/code', {
            'code': 'UQQEYO'
        });
        assert.equal(code29.status, 201);
        assert.equal(code29.statusText, 'Created');
        console.log(code29.data);
        

        const code30 = await axios.post(URL_BASE + '/code', {
            'code': 'TXPZJY'
        });
        assert.equal(code30.status, 201);
        assert.equal(code30.statusText, 'Created');
        console.log(code30.data);
        

        const code31 = await axios.post(URL_BASE + '/code', {
            'code': 'MYXZ0J'
        });
        assert.equal(code31.status, 201);
        assert.equal(code31.statusText, 'Created');
        console.log(code31.data);
        

        const code32 = await axios.post(URL_BASE + '/code', {
            'code': '6DXPJU'
        });
        assert.equal(code32.status, 201);
        assert.equal(code32.statusText, 'Created');
        console.log(code32.data);
        

        const code33 = await axios.post(URL_BASE + '/code', {
            'code': 'KJV676'
        });
        assert.equal(code33.status, 201);
        assert.equal(code33.statusText, 'Created');
        console.log(code33.data);
        

        const code34 = await axios.post(URL_BASE + '/code', {
            'code': '1WWFP0'
        });
        assert.equal(code34.status, 201);
        assert.equal(code34.statusText, 'Created');
        console.log(code34.data);
        

        const code35 = await axios.post(URL_BASE + '/code', {
            'code': 'S7XX4K'
        });
        assert.equal(code35.status, 201);
        assert.equal(code35.statusText, 'Created');
        console.log(code35.data);
        

        const code36 = await axios.post(URL_BASE + '/code', {
            'code': '952RBB'
        });
        assert.equal(code36.status, 201);
        assert.equal(code36.statusText, 'Created');
        console.log(code36.data);
        

        const code37 = await axios.post(URL_BASE + '/code', {
            'code': 'AMIKBS'
        });
        assert.equal(code37.status, 201);
        assert.equal(code37.statusText, 'Created');
        console.log(code37.data);
        

        const code38 = await axios.post(URL_BASE + '/code', {
            'code': 'D5KXG8'
        });
        assert.equal(code38.status, 201);
        assert.equal(code38.statusText, 'Created');
        console.log(code38.data);
        

        const code39 = await axios.post(URL_BASE + '/code', {
            'code': '8RYXCI'
        });
        assert.equal(code39.status, 201);
        assert.equal(code39.statusText, 'Created');
        console.log(code39.data);
        

        const code40 = await axios.post(URL_BASE + '/code', {
            'code': 'A94T7L'
        });
        assert.equal(code40.status, 201);
        assert.equal(code40.statusText, 'Created');
        console.log(code40.data);
        

        const code41 = await axios.post(URL_BASE + '/code', {
            'code': 'OXCGWS'
        });
        assert.equal(code41.status, 201);
        assert.equal(code41.statusText, 'Created');
        console.log(code41.data);
        

        const code42 = await axios.post(URL_BASE + '/code', {
            'code': 'OE89RR'
        });
        assert.equal(code42.status, 201);
        assert.equal(code42.statusText, 'Created');
        console.log(code42.data);
        

        const code43 = await axios.post(URL_BASE + '/code', {
            'code': '3P3BC5'
        });
        assert.equal(code43.status, 201);
        assert.equal(code43.statusText, 'Created');
        console.log(code43.data);
        

        const code44 = await axios.post(URL_BASE + '/code', {
            'code': 'MY6JCV'
        });
        assert.equal(code44.status, 201);
        assert.equal(code44.statusText, 'Created');
        console.log(code44.data);
        

        const code45 = await axios.post(URL_BASE + '/code', {
            'code': 'MCBHPE'
        });
        assert.equal(code45.status, 201);
        assert.equal(code45.statusText, 'Created');
        console.log(code45.data);
        

        const code46 = await axios.post(URL_BASE + '/code', {
            'code': 'RHWN59'
        });
        assert.equal(code46.status, 201);
        assert.equal(code46.statusText, 'Created');
        console.log(code46.data);
        

        const code47 = await axios.post(URL_BASE + '/code', {
            'code': 'HDDYNJ'
        });
        assert.equal(code47.status, 201);
        assert.equal(code47.statusText, 'Created');
        console.log(code47.data);
        

        const code48 = await axios.post(URL_BASE + '/code', {
            'code': 'IKTSIU'
        });
        assert.equal(code48.status, 201);
        assert.equal(code48.statusText, 'Created');
        console.log(code48.data);
        

        const code49 = await axios.post(URL_BASE + '/code', {
            'code': 'R2ELWF'
        });
        assert.equal(code49.status, 201);
        assert.equal(code49.statusText, 'Created');
        console.log(code49.data);
        

        const code50 = await axios.post(URL_BASE + '/code', {
            'code': 'EI65UY'
        });
        assert.equal(code50.status, 201);
        assert.equal(code50.statusText, 'Created');
        console.log(code50.data);
        

        const code51 = await axios.post(URL_BASE + '/code', {
            'code': '66HSP5'
        });
        assert.equal(code51.status, 201);
        assert.equal(code51.statusText, 'Created');
        console.log(code51.data);
        

        const code52 = await axios.post(URL_BASE + '/code', {
            'code': 'FKUVGO'
        });
        assert.equal(code52.status, 201);
        assert.equal(code52.statusText, 'Created');
        console.log(code52.data);
        

        const code53 = await axios.post(URL_BASE + '/code', {
            'code': 'ASAARE'
        });
        assert.equal(code53.status, 201);
        assert.equal(code53.statusText, 'Created');
        console.log(code53.data);
        

        const code54 = await axios.post(URL_BASE + '/code', {
            'code': 'UP0TXV'
        });
        assert.equal(code54.status, 201);
        assert.equal(code54.statusText, 'Created');
        console.log(code54.data);
        

        const code55 = await axios.post(URL_BASE + '/code', {
            'code': 'IXAYPE'
        });
        assert.equal(code55.status, 201);
        assert.equal(code55.statusText, 'Created');
        console.log(code55.data);
        

        const code56 = await axios.post(URL_BASE + '/code', {
            'code': 'V6BGQP'
        });
        assert.equal(code56.status, 201);
        assert.equal(code56.statusText, 'Created');
        console.log(code56.data);
        

        const code57 = await axios.post(URL_BASE + '/code', {
            'code': '6WNUVH'
        });
        assert.equal(code57.status, 201);
        assert.equal(code57.statusText, 'Created');
        console.log(code57.data);
        

        const code58 = await axios.post(URL_BASE + '/code', {
            'code': 'EYA2B5'
        });
        assert.equal(code58.status, 201);
        assert.equal(code58.statusText, 'Created');
        console.log(code58.data);
        

        const code59 = await axios.post(URL_BASE + '/code', {
            'code': '1NMRJT'
        });
        assert.equal(code59.status, 201);
        assert.equal(code59.statusText, 'Created');
        console.log(code59.data);
        

        const code60 = await axios.post(URL_BASE + '/code', {
            'code': 'ENTNYK'
        });
        assert.equal(code60.status, 201);
        assert.equal(code60.statusText, 'Created');
        console.log(code60.data);

        const code61 = await axios.post(URL_BASE + '/code', {
            'code': 'E9BOD2'
        });
        assert.equal(code61.status, 201);
        assert.equal(code61.statusText, 'Created');
        console.log(code61.data);
        

        const code62 = await axios.post(URL_BASE + '/code', {
            'code': 'RUH5TL'
        });
        assert.equal(code62.status, 201);
        assert.equal(code62.statusText, 'Created');
        console.log(code62.data);
        

        const code63 = await axios.post(URL_BASE + '/code', {
            'code': '4FZ2IY'
        });
        assert.equal(code63.status, 201);
        assert.equal(code63.statusText, 'Created');
        console.log(code63.data);
        

        const code64 = await axios.post(URL_BASE + '/code', {
            'code': '7Y85UM'
        });
        assert.equal(code64.status, 201);
        assert.equal(code64.statusText, 'Created');
        console.log(code64.data);
        

        const code65 = await axios.post(URL_BASE + '/code', {
            'code': '5TIFKW'
        });
        assert.equal(code65.status, 201);
        assert.equal(code65.statusText, 'Created');
        console.log(code65.data);
        

        const code66 = await axios.post(URL_BASE + '/code', {
            'code': 'BM3WZJ'
        });
        assert.equal(code66.status, 201);
        assert.equal(code66.statusText, 'Created');
        console.log(code66.data);
        

        const code67 = await axios.post(URL_BASE + '/code', {
            'code': 'KYF4ED'
        });
        assert.equal(code67.status, 201);
        assert.equal(code67.statusText, 'Created');
        console.log(code67.data);
        

        const code68 = await axios.post(URL_BASE + '/code', {
            'code': 'XI8WXC'
        });
        assert.equal(code68.status, 201);
        assert.equal(code68.statusText, 'Created');
        console.log(code68.data);
        

        const code69 = await axios.post(URL_BASE + '/code', {
            'code': 'CMWA4P'
        });
        assert.equal(code69.status, 201);
        assert.equal(code69.statusText, 'Created');
        console.log(code69.data);
        

        const code70 = await axios.post(URL_BASE + '/code', {
            'code': '5EW9BJ'
        });
        assert.equal(code70.status, 201);
        assert.equal(code70.statusText, 'Created');
        console.log(code70.data);
        

        const code71 = await axios.post(URL_BASE + '/code', {
            'code': 'B47C8G'
        });
        assert.equal(code71.status, 201);
        assert.equal(code71.statusText, 'Created');
        console.log(code71.data);
        

        const code72 = await axios.post(URL_BASE + '/code', {
            'code': '5LYPR3'
        });
        assert.equal(code72.status, 201);
        assert.equal(code72.statusText, 'Created');
        console.log(code72.data);
        

        const code73 = await axios.post(URL_BASE + '/code', {
            'code': 'Q8QI9E'
        });
        assert.equal(code73.status, 201);
        assert.equal(code73.statusText, 'Created');
        console.log(code73.data);
        

        const code74 = await axios.post(URL_BASE + '/code', {
            'code': 'B9GESE'
        });
        assert.equal(code74.status, 201);
        assert.equal(code74.statusText, 'Created');
        console.log(code74.data);
        

        const code75 = await axios.post(URL_BASE + '/code', {
            'code': 'W4JL3U'
        });
        assert.equal(code75.status, 201);
        assert.equal(code75.statusText, 'Created');
        console.log(code75.data);
        

        const code76 = await axios.post(URL_BASE + '/code', {
            'code': '50CV5J'
        });
        assert.equal(code76.status, 201);
        assert.equal(code76.statusText, 'Created');
        console.log(code76.data);
        

        const code77 = await axios.post(URL_BASE + '/code', {
            'code': 'CFBMTD'
        });
        assert.equal(code77.status, 201);
        assert.equal(code77.statusText, 'Created');
        console.log(code77.data);
        

        const code78 = await axios.post(URL_BASE + '/code', {
            'code': '5TVCI1'
        });
        assert.equal(code78.status, 201);
        assert.equal(code78.statusText, 'Created');
        console.log(code78.data);
        

        const code79 = await axios.post(URL_BASE + '/code', {
            'code': 'JD0FBW'
        });
        assert.equal(code79.status, 201);
        assert.equal(code79.statusText, 'Created');
        console.log(code79.data);
        

        const code80 = await axios.post(URL_BASE + '/code', {
            'code': '5BP9UR'
        });
        assert.equal(code80.status, 201);
        assert.equal(code80.statusText, 'Created');
        console.log(code80.data);
        

        const code81 = await axios.post(URL_BASE + '/code', {
            'code': 'KN9KCA'
        });
        assert.equal(code81.status, 201);
        assert.equal(code81.statusText, 'Created');
        console.log(code81.data);
        

        const code82 = await axios.post(URL_BASE + '/code', {
            'code': 'EHZNXS'
        });
        assert.equal(code82.status, 201);
        assert.equal(code82.statusText, 'Created');
        console.log(code82.data);
        

        const code83 = await axios.post(URL_BASE + '/code', {
            'code': '06VIAZ'
        });
        assert.equal(code83.status, 201);
        assert.equal(code83.statusText, 'Created');
        console.log(code83.data);
        

        const code84 = await axios.post(URL_BASE + '/code', {
            'code': '1ON80W'
        });
        assert.equal(code84.status, 201);
        assert.equal(code84.statusText, 'Created');
        console.log(code84.data);
        

        const code85 = await axios.post(URL_BASE + '/code', {
            'code': 'C1ZLNZ'
        });
        assert.equal(code85.status, 201);
        assert.equal(code85.statusText, 'Created');
        console.log(code85.data);
        

        const code86 = await axios.post(URL_BASE + '/code', {
            'code': 'I2W9Y6'
        });
        assert.equal(code86.status, 201);
        assert.equal(code86.statusText, 'Created');
        console.log(code86.data);
        

        const code87 = await axios.post(URL_BASE + '/code', {
            'code': 'DOXAES'
        });
        assert.equal(code87.status, 201);
        assert.equal(code87.statusText, 'Created');
        console.log(code87.data);
        

        const code88 = await axios.post(URL_BASE + '/code', {
            'code': '0ZVDPT'
        });
        assert.equal(code88.status, 201);
        assert.equal(code88.statusText, 'Created');
        console.log(code88.data);
        

        const code89 = await axios.post(URL_BASE + '/code', {
            'code': 'INBSE3'
        });
        assert.equal(code89.status, 201);
        assert.equal(code89.statusText, 'Created');
        console.log(code89.data);
        

        const code90 = await axios.post(URL_BASE + '/code', {
            'code': 'ROU921'
        });
        assert.equal(code90.status, 201);
        assert.equal(code90.statusText, 'Created');
        console.log(code90.data);
        

        const code91 = await axios.post(URL_BASE + '/code', {
            'code': 'O41ED0'
        });
        assert.equal(code91.status, 201);
        assert.equal(code91.statusText, 'Created');
        console.log(code91.data);
        

        const code92 = await axios.post(URL_BASE + '/code', {
            'code': '4UZB9Z'
        });
        assert.equal(code92.status, 201);
        assert.equal(code92.statusText, 'Created');
        console.log(code92.data);
        

        const code93 = await axios.post(URL_BASE + '/code', {
            'code': 'QJ5CWM'
        });
        assert.equal(code93.status, 201);
        assert.equal(code93.statusText, 'Created');
        console.log(code93.data);
        

        const code94 = await axios.post(URL_BASE + '/code', {
            'code': '62NR9M'
        });
        assert.equal(code94.status, 201);
        assert.equal(code94.statusText, 'Created');
        console.log(code94.data);
        

        const code95 = await axios.post(URL_BASE + '/code', {
            'code': 'QTL94Q'
        });
        assert.equal(code95.status, 201);
        assert.equal(code95.statusText, 'Created');
        console.log(code95.data);
        

        const code96 = await axios.post(URL_BASE + '/code', {
            'code': '5NB57J'
        });
        assert.equal(code96.status, 201);
        assert.equal(code96.statusText, 'Created');
        console.log(code96.data);
        

        const code97 = await axios.post(URL_BASE + '/code', {
            'code': 'N0CL3J'
        });
        assert.equal(code97.status, 201);
        assert.equal(code97.statusText, 'Created');
        console.log(code97.data);
        

        const code98 = await axios.post(URL_BASE + '/code', {
            'code': 'WCJ8SZ'
        });
        assert.equal(code98.status, 201);
        assert.equal(code98.statusText, 'Created');
        console.log(code98.data);
        

        const code99 = await axios.post(URL_BASE + '/code', {
            'code': 'ZKOQ75'
        });
        assert.equal(code99.status, 201);
        assert.equal(code99.statusText, 'Created');
        console.log(code99.data);
        

        const code100 = await axios.post(URL_BASE + '/code', {
            'code': 'YR150X'
        });
        assert.equal(code100.status, 201);
        assert.equal(code100.statusText, 'Created');
        console.log(code100.data);

    } catch (e) {
        console.log(e);
    }
})();



// ["55B681","814C7B","D403B8","55F651","8ADCDC","9ABBEB","D53727","CF433E","6ECE0C","CEAA18","SSOFLE","M1TDNF","88ZB42","MBZQIS","5ALLH1","ECJLG1","0MKQPX","55VEP8","RU4IVO","4DUQUY","NZ8D0W","SD10TG","NGM8XF","GKJPSM","TPF5LG","D6DYQ6","XE4Q0Z","FU8XRT","UQQEYO","TXPZJY","MYXZ0J","6DXPJU","KJV676","1WWFP0","S7XX4K","952RBB","AMIKBS","D5KXG8","8RYXCI","A94T7L","OXCGWS","OE89RR","3P3BC5","MY6JCV","MCBHPE","RHWN59","HDDYNJ","IKTSIU","R2ELWF","EI65UY","66HSP5","FKUVGO","ASAARE","UP0TXV","IXAYPE","V6BGQP","6WNUVH","EYA2B5","1NMRJT","ENTNYK","E9BOD2","RUH5TL","4FZ2IY","7Y85UM","5TIFKW","BM3WZJ","KYF4ED","XI8WXC","CMWA4P","5EW9BJ","B47C8G","5LYPR3","Q8QI9E","B9GESE","W4JL3U","50CV5J","CFBMTD","5TVCI1","JD0FBW","5BP9UR","KN9KCA","EHZNXS","06VIAZ","1ON80W","C1ZLNZ","I2W9Y6","DOXAES","0ZVDPT","INBSE3","ROU921","O41ED0","4UZB9Z","QJ5CWM","62NR9M","QTL94Q","5NB57J","N0CL3J","WCJ8SZ","ZKOQ75","YR150X"]