const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    //console.log(req.headers.authorization);
    try {
        const token = req.headers.authorization.split(" ")[1];
        const verifiedtoken = jwt.verify(token, "Scaler_BMS");
        //console.log(verifiedtoken);
        req.body.userId = verifiedtoken.userId;
        next();
    } catch (error) {
        res.status(404).send({ success: false, message: "Token Invalid" });
    }
}