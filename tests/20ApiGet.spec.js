import { test, expect, request } from '@playwright/test';

test("GET All Objects", async ({ request }) => {
    const response = await request.get('https://api.restful-api.dev/objects');
    const responseJson = await response.json();

    console.log(responseJson);

    console.log(responseJson[5]);
    console.log(responseJson[5].id); //1
    console.log(responseJson[5].name); //Google Pixel 6 Pro
    console.log(responseJson[5].data);
    console.log(responseJson[5].data.generation);
    console.log(responseJson[5].data.price);

    expect(await response.status()).toBe(200);
    expect(await response.statusText()).toBe('OK');

});

test("GET Obe Object", async ({ request }) => {

    const response = await request.get('https://api.restful-api.dev/objects/ff8081819d82fab6019dadb7eea43166');
    const responseJson = await response.json();
    console.log(responseJson);

    console.log(responseJson.id);
    console.log(responseJson.name);
    console.log(responseJson.data);
    console.log(responseJson.data.year);
    console.log(responseJson.data.price);
    // console.log(responseJson.createdAt);

    let cpuModel = "CPU model";
    let hardDisk = "Hard disk size";

    console.log(responseJson.data[cpuModel]);
    console.log(responseJson.data[hardDisk]);


    console.log(await response.status()); //  200
    console.log(await response.statusText()); //  OK

    expect(await response.status()).toBe(200);
    expect(await response.statusText()).toBe('OK');

});



