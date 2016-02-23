module.exports = {
    /*open: function (success, failure) {
        cordova.exec(success, failure, "FileChooser", "open", []);
    }*/
    open: function (success, failure) {
        cordova.exec(success, failure, "FileUtil", "open", []);
    }
};
