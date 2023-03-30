const secure = (req, res, next) => {
    // check if there is a query token with a value
    const token = req.query?.token;
    if (token)
        // pass on to next middleware - do NOT send response
        next()
    else 
        res.status(403).send("no token found");
}

export default secure;