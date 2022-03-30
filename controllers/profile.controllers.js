const Profile = require("../models/profile.models");

const getProfile = async (req, res) => {
    try {
        const profile = req.profile;
        return res.status(200).json(profile);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getMyProfile = async (req, res) => {
    const myProfileId = req.verifiedUser.profile;
    try {
        const myProfile = await Profile.findById(myProfileId);
        return res.status(200).json(myProfile);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const updateMyProfile = async (req, res) => {
    const profile = req.verifiedUser.profile;
    try {
        const updatedProfile = await Profile.findByIdAndUpdate(
            profile,
            req.body,
            { new: true }
        );
        return res.status(200).json(updatedProfile)
    } catch (err) {
        return res.status(500).json(err)
    }
};


module.exports.getProfile = getProfile;
module.exports.updateMyProfile = updateMyProfile;
module.exports.getMyProfile = getMyProfile;
