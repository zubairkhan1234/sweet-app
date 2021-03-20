


var url = window.location.href.split(":");
if (BaseURL[0] === "https") {
    BaseURL = 'https://m-sweet-app.herokuapp.com/'
}
else {
    BaseURL = "http://localhost:5000"
}
export default url;