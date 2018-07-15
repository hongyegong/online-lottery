import web3 from './web3';

const address = '0xff3a14ca7a3EfaF40aFcaAfd10a4420F68402E12';

const abi = [{"constant":true,"inputs":[],"name":"manager","outputs":[{"name
":"","type":"address"}],"payable":false,"stateMutability":"view","type":"f
unction"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"
payable":false,"stateMutability":"nonpayable","type":"function"},{"constan
t":true,"inputs":[],"name":"random","outputs":[{"name":"","type":"uint256"
}],"payable":false,"stateMutability":"view","type":"function"},{"constant"
:false,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"addre
ss[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
{"constant":false,"inputs":[],"name":"enter","outputs":[],"payable":true,"
stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{
"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type"
:"address"}],"payable":false,"stateMutability":"view","type":"function"},{
"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constru
ctor"}]

export default new web3.eth.Contract(abi, address);
