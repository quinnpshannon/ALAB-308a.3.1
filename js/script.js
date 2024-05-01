/*
A promise object has three statuses

Amazon 2 day delivery 

Pending - Hasn't arrived just yet. 2 day window isn't closed yet.
Fulfilled - Package arrived in two days
Rejected - Didn't arrive for some reason (too many packages, Driver got sick, etc)

the Promise says "This will be handles by this time"

*/

// const myPromise = new Promise((Resolve, reject) => {
//     setTimeout(() => {
//         Resolve("Guess this worked!");
//     }, 1000);
// });

function resolveAfterSeconds(message, t) {
    const myPromise = new Promise(resolve => {
        setTimeout(() => {
            resolve(message);
        }, t * 1000);
    });

    return myPromise;
}

async function testAwait() {
    let result = await resolveAfterSeconds('Success!',1);
    result += await resolveAfterSeconds(' Again?',0);
    result += await resolveAfterSeconds(' Third Time!?',0);
    result += await resolveAfterSeconds(' Promises are cool.',0);
    console.log(result);
}

testAwait();