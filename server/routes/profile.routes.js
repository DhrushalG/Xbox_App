const ProfileController = require("../controllers/profile.controller")


module.exports = (app) => {
    app.get("/api/profile", ProfileController.findProfile)
    app.get("/api/activity/feed", ProfileController.findActivity)
    app.get("/api/achievements", ProfileController.findAchievements)
        // app.get("/api/game_achievements/:titleId", ProfileController.findGameAchievements)  VARIABLE ROUTE
    app.get("/api/game_achievements", ProfileController.findGameAchievements)
    app.get("/api/friends", ProfileController.findFriends)
        // app.get("/api/conversations", ProfileController.findMessages)  
    app.get("/api/gameclips", ProfileController.findClips)
}