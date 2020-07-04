/*
    1. Fetch the results from this API: https://cat-fact.herokuapp.com/facts
       And console.log the first cat fact

    2. Fetch the results from this API: https://restcountries.eu/rest/v2/name/Great%20Britain?fullText=true
       And console.log the population of the UK

       Remember to open "index.html" using Live Preview, and test that you get the correct results in the console!
 */
fetch ("https://cat-fact.herokuapp.com/facts")
.then (function(result) {
return result.json();
})
.then (function(facts)
{
console.log(facts);
}
)

fetch ("https://restcountries.eu/rest/v2/name/Great%20Britain?fullText=true")
.then (function(result) {
return result.json();
})
.then (function(fact)
{
   //let ukPop = fact[0];
console.log(fact[0].population);
}
)