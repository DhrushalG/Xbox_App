const axios = require("axios");

const config = {
    'headers': {
        'X-Authorization': 'osookc8ow8g8okcg88gkgssg48o880cgw4s'
    }
}

module.exports.findProfile = (req, res) => {
    axios.get("https://xbl.io/api/v2/account", config)
        .then(profileInfo => {
            console.log(profileInfo.data)
            res.json({ results: profileInfo.data })
        })
        .catch(err => console.log(err));
}
module.exports.findActivity = (req, res) => {
    axios.get("https://xbl.io/api/v2/activity/feed", config)
        .then(activityInfo => {
            console.log(activityInfo.data)
            res.json({ results: activityInfo.data })
        })
        .catch(err => console.log(err));
}
module.exports.findAchievements = (req, res) => {
        axios.get("https://xbl.io/api/v2/achievements", config)
            .then(achievementInfo => {
                console.log(achievementInfo.data)
                res.json({ results: achievementInfo.data })
            })
            .catch(err => console.log(err));
    }
    // VARIABLE ROUTE 
    // module.exports.findGameAchievements = (req, res) => {
    //     axios.get("https://xbl.io/api/v2/achievements/title/:titleId", config)
    //     .then(gameAchievementInfo => {
    //         console.log(gameAchievementInfo.data)
    //         res.json({results: gameAchievementInfo.data})
    //     })
    //     .catch(err => console.log(err));
    // }
module.exports.findGameAchievements = (req, res) => {
    axios.get("https://xbl.io/api/v2/achievements/title/1892245301", config)
        .then(gameAchievementInfo => {
            console.log(gameAchievementInfo.data)
            res.json({ results: gameAchievementInfo.data })
        })
        .catch(err => console.log(err));
}
module.exports.findFriends = (req, res) => {
        axios.get("https://xbl.io/api/v2/friends", config)
            .then(friendsList => {
                console.log(friendsList.data)
                res.json({ results: friendsList.data })
            })
            .catch(err => console.log(err));
    }
    // module.exports.findMessages = (req, res) => {
    //     axios.get("https://xbl.io/api/v2/conversations", config)
    //     .then(chatList => {
    //         console.log(chatList.data)
    //         res.json({results: chatList.data})
    //     })
    //     .catch(err => console.log(err));
    // }
module.exports.findClips = (req, res) => {
    axios.get("https://xbl.io/api/v2/dvr/gameclips", config)
        .then(clipList => {
            console.log(clipList.data)
            res.json({ results: clipList.data })
        })
        .catch(err => console.log(err));
}















// Public URL --> https://xbl.io/app/auth/6d78d895-23e6-4de4-afa4-6dd76a8bf367
// ggwgkkkcg480wksoo00kwsws080scowow44 API KEY
// 6d78d895-23e6-4de4-afa4-6dd76a8bf367 APP KEY