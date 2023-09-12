const validarIp = /\d{1,3}\.\d{1,3}.\d{1,3}\.\d{1,3}/;
console.log(validarIp.test("192.168.1.1"));
console.log(validarIp.test("8.8.8.8"));
console.log(validarIp.test("192.0.0.1"));
console.log(validarIp.test("192.168.0"));
console.log(validarIp.test("192.168.0.77"));
console.log(validarIp.test("sdfwercv"));
console.log(validarIp.test("12345789"));
console.log(validarIp.test("1262.13336.23.36524"));