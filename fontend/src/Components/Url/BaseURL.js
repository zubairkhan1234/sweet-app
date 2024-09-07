


var  BaseURL = window.location.href.split(":");
if (BaseURL[0] === "https") {
    BaseURL = 'https://new-sweet-app.herokuapp.com'
}
else {
    BaseURL = "http://localhost:8001"
}

export default BaseURL;