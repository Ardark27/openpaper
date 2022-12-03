// lets create a fuction that will make a get request to an url
// and return the response in json format
async function get_data() {
    // create a new url
    let doi = document.getElementById("doi").value;
    let email = document.getElementById("email").value;
    let url = 'https://api.unpaywall.org/v2/' + doi + '?email=' + email;
    // make a get request to the url
    let response = await fetch(url,{method: 'GET'})
    .then(text => text.json())
    .then(text => text.best_oa_location.url_for_pdf);
    // return the response in json format
    console.log(response);
    return response;
    
}
// extract from the response the "best_oa_location" key
// and from that key extract the "url_for_pdf" key
// and redirect the user to that url
function redirect_to_pdf(response) {
    //use the response promise
    response.then(function(result) {
        // redirect the user to the pdf url
        window.location.href = result;
    });
}
