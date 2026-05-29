import { test, expect, request } from '@playwright/test';

test("POST one Object", async ({ request }) => {

    const response = await request.post('https://api.restful-api.dev/objects',
        {
            headers: { "Content-Type": "application/json" },
            data: {
                "name": "MacBook Pro 19",
                "data": {
                    "year": 2019,
                    "price": 1999.99,
                    "CPU model": "Intel Core i19",
                    "Hard disk size": "2 TB"
                },
            }
        }
    );

    console.log(response.status()); // 200
    console.log(response.statusText()); // OK

    const responseJson = await response.json();
    console.log(responseJson);

    console.log(responseJson.id);
    console.log(responseJson.name);
    console.log(responseJson.createdAt);
    console.log(responseJson.data.year);
    console.log(responseJson.data.price);

    let cpuModel = "CPU model";
    let hardDiskSize = 'Hard disk size';

    console.log(responseJson.data[cpuModel]);
    console.log(responseJson.data[hardDiskSize]);

});

//  ff8081819d82fab6019dadb7eea43166

test("PUT one Object", async ({ request }) => {

    const response = await request.put('https://api.restful-api.dev/objects/ff8081819d82fab6019dadb7eea43166',
        {
            headers: { "Content-Type": "application/json" },
            data: {
                "name": "MacBook Pro 2021",
                "data": {
                    "year": 2021,
                    "price": 1599.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                },
            }
        }
    );

    console.log(response.status()); // 200
    console.log(response.statusText()); // OK

    const responseJson = await response.json();
    console.log(responseJson);

    console.log(responseJson.id);
    console.log(responseJson.name);
    console.log(responseJson.updatedAt);
    console.log(responseJson.data.year);
    console.log(responseJson.data.price);

    let cpuModel = "CPU model";
    let hardDiskSize = 'Hard disk size';

    console.log(responseJson.data[cpuModel]);
    console.log(responseJson.data[hardDiskSize]);

});

//  ff8081819d82fab6019dadb7eea43166

test("PATCH one Object", async ({ request }) => {

    const response = await request.patch('https://api.restful-api.dev/objects/ff8081819d82fab6019dadb7eea43166',
        {
            headers: { "Content-Type": "application/json" },
            data: {
                "name": "MacBook Pro 19 - Updated",
            }
        }
    );

    console.log(response.status()); // 200
    console.log(response.statusText()); // OK

    const responseJson = await response.json();
    console.log(responseJson);

    console.log(responseJson.id);
    console.log(responseJson.name);
    console.log(responseJson.updatedAt);
    console.log(responseJson.data.year);
    console.log(responseJson.data.price);

    let cpuModel = "CPU model";
    let hardDiskSize = 'Hard disk size';

    console.log(responseJson.data[cpuModel]);
    console.log(responseJson.data[hardDiskSize]);

});

//  ff8081819d82fab6019dadb7eea43166


test("DELETE one Object", async ({ request }) => {

    const response = await request.delete('https://api.restful-api.dev/objects/ff8081819d82fab6019dadb7eea43166');

    console.log(response.status()); // 200
    console.log(response.statusText()); // OK

    const responseJson = await response.json();
    console.log(responseJson);

    console.log(responseJson.message);

});

//  ff8081819d82fab6019dadb7eea43166





