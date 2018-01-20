function doCurrencyChange() {
nextPage = configfrm.currency[configfrm.currency.selectedIndex].value
if (nextPage == "") {
configfrm.currencytype.value='';
configfrm.currencysymbol.value='';
configfrm.currencytype.readOnly=false;
configfrm.currencysymbol.readOnly=false;
} else {
configfrm.currencytype.value=nextPage;
if (nextPage == "GBP") { configfrm.currencysymbol.value='£'; }
if (nextPage == "USD") { configfrm.currencysymbol.value='$'; }
if (nextPage == "AUD") { configfrm.currencysymbol.value='$'; }
if (nextPage == "CAD") { configfrm.currencysymbol.value='$'; }
if (nextPage == "EUR") { configfrm.currencysymbol.value='€'; }
if (nextPage == "JPY") { configfrm.currencysymbol.value='¥'; }
configfrm.currencytype.readOnly=true;
configfrm.currencysymbol.readOnly=true;
}}

function doCurrencyActivate() {
nextPage = configfrm.currency[configfrm.currency.selectedIndex].value
if (nextPage == "") {
} else {
configfrm.currencytype.readOnly=true;
configfrm.currencysymbol.readOnly=true;
}
}