errorMessage = (req) => {
    let message = {
        status: 'ERROR',
        date: new Date(),
        param: req.query,
        response: 'Invalid query param',
    }
    return message
}

module.exports = errorMessage