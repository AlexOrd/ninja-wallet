exports.checkAuthorization = (req, res) => {
    console.log('checkAuth')
    return res.status(200).send({success: true})
}