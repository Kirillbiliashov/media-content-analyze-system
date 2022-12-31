const RESP = {
    SERVER_ERROR: 500,
    SUCCESS: 200
};

module.exports = (errorMsg, resp) => (err, res) => {
    if (err) resp.status(RESP.SERVER_ERROR).send(errorMsg);
    resp.status(RESP.SUCCESS).send(res);
};
