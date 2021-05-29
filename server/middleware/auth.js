import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // const token = req.headers["authorization"];
        const isCustomAuth = token.length < 500;
        
        let decodedData;

        if (token && isCustomAuth) {
            // console.log(token + " - here1");
            decodedData = jwt.verify(token, 'test');
            req.userId = decodedData?.id;
        } else {
            // console.log(token + " - here2");
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log();
    }
};

export default auth;