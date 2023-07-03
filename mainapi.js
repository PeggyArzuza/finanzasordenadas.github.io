
fetch('https://api.currencyapi.com/v3/latest?apikey=YFyNPcfnl8IU2L9PefacNdlUgp74yZlUqCf0N0BN&currencies=EUR%2CUSD%2CCAD')
.then((response) => response.json())
.then((data) => {
    console.log(data)
})
.catch((error) => {
	console.log(error);
});
