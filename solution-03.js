function delayedFetch(dataArray) {
    return dataArray.map((data, index) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 2000*(index+1));
        });
    });
}
async function executeedFetch(promisesArray) {
    for(let promise of promisesArray) {
        let result = await promise;
        console.log(result);
    }
}
let data = ["apple", "banana", "cherry"];
let promises = delayedFetch(data);
executeedFetch(promises);