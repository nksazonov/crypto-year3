const rc4 = require('./rc4');

const msg = 'Hey there, it is Nikita Sazonov!';
console.log('message:', msg);

const key = 'password';
console.log('key:', key);

const encrypted = rc4.encrypt(msg, key);
console.log('enctypted:', '0x' + Buffer.from(encrypted, 'utf8').toString('hex'));

const decrypted = rc4.decrypt(encrypted, key);
console.log('enctypted:', decrypted);
