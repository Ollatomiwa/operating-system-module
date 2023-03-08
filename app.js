var os = require ('os'); // built in module callled operating ssystem 'os'


// getting the user info through os module
const user = os.userInfo ()
console.log(user);

console.log(`The system uptime is ${os.uptime ()} seconds`);

// getting os modules with methods to get datas 

const data = {
    type: os.type(),
    freenem: os.freemem(),
    release: os.release(),
    totalnem: os.tmpdir(),
    version: os.version(),
    platform: os.platform(),
    machine: os.machine()
}
console.log(data);