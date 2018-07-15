# Lottery (React web app)
A react web-app frontend for an Ethereum lottery, integrated w/ smart contracts.  

## Setup + Installation  
1. Download lottery contract project [here](https://github.com/jdleo/Lottery)
2. Navigate to the contract source folder, and open up `deploy.js` in a text editor. Put both your wallet seed from Metamask, and your Infura API key link into line 6. (please note that the account behind this wallet seed will be the lottery manager. always test on rinkeby testnet first)  
3. Deploy the lottery contract to the Ethereum network:  
```
npm run deploy
```  
4. Check your console/terminal, and take note of two items. It will say "contract deployed to xxx" and also there will be some json known as the interface.  
5. Now in this React project (lottery-react), open up `src/lottery.js` and paste the address into `address` variable, and paste that json into `abi` variable.  
6. Start the web app:  
```
npm run start
```  

## Tests
```
npm run test
```
