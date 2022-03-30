module.exports.isProfileOwner = (req, res, next) => {
    if (req.user.profile == req.verifiedUser.profile) {
        next()
    } else {
        return res.status(403).json("not your profile")
    }
}

