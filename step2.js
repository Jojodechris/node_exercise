
// // url = 'http://google.com'
// async function webCat(url) {
//     try {
//       let resp = await axios.get(url);
//       console.log(resp.data);
//     } catch (err) {
//       console.error(`Error fetching ${url}: ${err}`);
//       process.exit(1);
//     }
//   }

// myscript.js
const args = process.argv.slice(2); // Remove the first two elements (node executable and script filename)
if (args.length === 0) {
    console.log("hey man do something");
} else {
    console.log("Arguments provided:");
    args.forEach((arg, index) => {
        console.log(`Argument ${index + 1}: ${arg}`);
    });
}
