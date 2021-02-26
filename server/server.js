var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require("path");
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
const fs = require('fs')
const multer = require('multer')
const admin = require("firebase-admin");

var { userModle, shopCartModel } = require("./dbrepo/modles");
var authRoutes = require("./routes/auth")
console.log(userModle, shopCartModel)

var { SERVER_SECRET } = require("./core/index");

const PORT = process.env.PORT || 5000;


var app = express()
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use("/", express.static(path.resolve(path.join(__dirname, "public"))));
app.use('/', authRoutes)

app.use(function (req, res, next) {
    console.log('cookie', req.cookies)

    if (!req.cookies.jToken) {
        res.status(401).send("include http-only credentials with every request")
        return;
    }

    jwt.verify(req.cookies.jToken, SERVER_SECRET, function (err, decodedData) {
        if (!err) {
            const issueDate = decodedData.iat * 1000
            const nowDate = new Date().getTime()
            const diff = nowDate - issueDate

            if (diff > 30000) {
                res.status(401).send('Token Expired')

            } else {
                var token = jwt.sign({
                    id: decodedData.id,
                    name: decodedData.name,
                    email: decodedData.email,
                    role: decodedData.role
                }, SERVER_SECRET)
                res.cookie('jToken', token, {
                    maxAge: 86_400_000,
                    httpOnly: true
                })
                req.body.jToken = decodedData
                next()
            }
        } else {
            res.status(401).send('invalid Token')
        }

    });

})



app.get('/profile', (req, res, next) => {

    console.log(req.body)


    userModle.findById(req.body.jToken.id, "name email phone role gender cratedOn",
        function (err, data) {
            console.log(data)
            if (!err) {
                res.send({
                    profile: data
                })
            } else {
                res.status(404).send({
                    message: "server err"
                })
            }

        })

})



/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


const storage = multer.diskStorage({
    destination: './upload/',
    filename: function (req, file, cb) {
        cb(null, `${new Date().getTime()}-${file.filename}.${file.mimetype.split("/")[1]}`)
    }
})
var upload = multer({ storage: storage })
// console.log(upload)

//==============================================


var SERVICE_ACCOUNT = {
    "type": "service_account",
    "project_id": "sweet-shop-95e0d",
    "private_key_id": "3ea06691d2be23f79fb5e7eaa937740356c223d1",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDFZsb9Db0GhjyM\neBQyTlCbr34HHI1MChdyRPXcNKmb7hvdI0QiG2sS1Z3QPWC5qwkU4XigjAU5GNLq\n1CYU0h7nncSY0h2zLaByPVx+EjgkvtWQX+2t9EeDdEIgpmG3aRt7Yb1k2/EjezHY\nakQ5Q0boppsMDUo209DeEv32QKE2Ppgle07J5al1nclqTTE3u8qVc+FlJ8uVFxH2\n+3J/NGY322c72tAH3EvW1N8so/oqw+1wHe2xWCOB+H0JbaE1kJg7bNxtnXIn8STy\nyeTgaZEs/ruJOxfNamXx6a55Jr8L3YgUH8+lSI2O4nI4dfv1/iDP9yX1+gvls68Q\nGuK/mba9AgMBAAECggEAAmukdsDJlirGTW7r+c8svSS6C0jl++CWkALTE+TM8KhR\nLm8xrCGtUQbghkq+kPOuxPGcDuzbpw+mE5Kh8WHwMhK3GJPyy4TeHC9Zt3CZCX8S\nBFD3qhhcluJcRR8f0xaNWTcGGDr1gq0UulyuEgBAZhKFe0X+KJBgMUrQFiWNupe9\nWGD2OQBih2BTdQmFMu7uZhZQdOCPSw23CoVR0JrEa006a539RQdGPCrmGEX4Toio\n9ojWcmg88Lrbb2LqqktA6nJ57j43B+cX1Z1b9+NzL27q6n3HqlEnsrE4yvUCevv+\nLck2hG8pXA/9q2iavz9vw5Xst53YJGd9BVh4yHfQywKBgQD7xXgSRSue5/1+0AC0\nytUp6foorjYXsmEGTgRUOAcg6aKL4j4CeWosp46n5CMJpTsFjMbn4U0azajitnO5\nmzTyIRYgh8IbpcAR0XWrC9jwqTpSMNNYlZ70kDcv0QoATJCy/v4W6ouhsh6h98vE\nt61exGCmMYYrAX7SVl0Tn2zafwKBgQDIt4lKgGwQ1XTaMRJ8BeLQEeknR8BDQiKI\njgHZqnfYmUQp3aCOPyddLBtM0qC/g5SzkNGAw0GxvODRQp/uPbAlkJuH01VcZwsm\ndXAHV34DRSqF01U+KrjsWDQiUjEtGF0YeiMehKshy8ECTMJRFE/nm0NFfJDHNoet\nB/er81y4wwKBgEKx9/HXEwwgZp2+WkGKbdeRnOxD4h566YrzBeCNiw3j9mRaBZVA\nNqknpfnBzKpUdAMvXM22eGd+TZvpO1TS0b7Glwb9D6WlTfEqbKJoHAr8uW9mccZI\ntHgS8Buho6WaosZYGFVXwq+N8OF1NCyjf7DYEsZT3jfsSH1N1ZBKLlrfAoGAHXsn\nxTObq9VOdoXiqyjKKbmXv1dAnCBophoFl4z8UWohouyUmpAYHg1ObTg6uCaBfuZ0\nfy8uxQZzFwlsKDgTWVEmJwsZbJsN/jYdoFZvgdd06Xci/CCWTNCfx7K+2lrLwb6e\nzeq6oBonXUkc+X+8RM5/UQN82GXgA8A51p3GLrUCgYBv1y5jjayP7kicYL8DqQbN\nGt7gQN909gvr6UiavvwoaAujrJpOqWbKBNMhzwCVScQlJlcqxXAuvxgYyiiHbRGm\nrPlnw5e9F+p116faHHApEa0npDR26+dgiw/dB6sXL+P3EdNpedrE4xxaM1OKsnI2\nJqj6l87fXdk8TE8Qf9Gp7A==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-7txwc@sweet-shop-95e0d.iam.gserviceaccount.com",
    "client_id": "102029618289672997610",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7txwc%40sweet-shop-95e0d.iam.gserviceaccount.com"
}



admin.initializeApp({
    credential: admin.credential.cert(SERVICE_ACCOUNT),
    DATABASE_URL: "https://sweet-shop-95e0d-default-rtdb.firebaseio.com/"
});

const bucket = admin.storage().bucket("gs://sweet-shop-95e0d.appspot.com");

//==============================================




app.post("/uploadcart", upload.any(), (req, res, next) => {

    // console.log("req.body: ", req.body);
    // console.log("req.body: ", JSON.parse(req.body.myDetails));
    // console.log("req.files: ", req.files);

    // console.log("uploaded file name: ", req.files[0].originalname);
    // console.log("file type: ", req.files[0].mimetype);
    // console.log("file name in server folders: ", req.files[0].filename);
    // console.log("file path in server folders: ", req.files[0].path);

    bucket.upload(
        req.files[0].path,

        function (err, file, apiResponse) {
            if (!err) {
                console.log("api resp: ", apiResponse);

                file.getSignedUrl({
                    action: 'read',
                    expires: '03-09-2491'
                }).then((urlData, err) => {
                    // console.log(req.body.email)
                    if (!err) {
                        // console.log("public downloadable url: ", urlData[0]) // this is public downloadable url 
                        console.log(req.body.email)
                        userModle.findById(req.headers.jToken.id, 'email role', (err, users) => {
                            console.log("Adminperson ====> ", user.email)
                            if (!err) {
                                shopCartModel.create({
                                    "title": req.body.title,
                                    "price": req.body.price,
                                    "availability": req.body.availability,
                                    "cartimage": urlData[0],
                                    "description": req.body.description
                                })
                                    .then((data) => {
                                        console.log(data)
                                        res.send({
                                            status: 200,
                                            message: "Product add successfully",
                                            data: data
                                        })

                                    }).catch(() => {
                                        console.log(err);
                                        res.status(500).send({
                                            message: "Not added, " + err
                                        })
                                    })
                            }
                            else {
                                res.send({
                                    message: "error"
                                });
                            }
                        })
                        try {
                            fs.unlinkSync(req.files[0].path)
                            //file removed
                        } catch (err) {
                            console.error(err)
                        }
                    }
                })
            } else {
                console.log("err: ", err)
                res.status(500).send();
            }
        });
})



app.listen(PORT, () => {
    console.log("surver is running on : ", PORT)
});







