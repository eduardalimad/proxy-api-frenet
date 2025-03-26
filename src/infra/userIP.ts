const os = require('os');

const interfaces = os.networkInterfaces();
let localIp  : any ;
console.log('aaa')

for (let interfaceName in interfaces) {
  for (let i = 0; i < interfaces[interfaceName].length; i++) {
    const iface = interfaces[interfaceName][i];
    if (iface.family === 'IPv4' && !iface.internal) {
      localIp = iface.address;
      break;
    }
  }
}


export {localIp};