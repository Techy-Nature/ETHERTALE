Setting.addHeader("Volume Settings", "Change the settings for all audio, as well as background audio and sound effects.")

// Setting up a mute control for the settings property 'masterMute' w/ callback
function masterMuteHandler() {
    SimpleAudio.mute(settings["masterMute"]);
}
Setting.addToggle("masterMute", {
    label    : "Master Mute.",
    desc     : "Mute control for all audio.",
    onInit   : masterMuteHandler,
    onChange : masterMuteHandler
}); // default value not defined, so false is used

// Setting up a volume control for the settings property 'masterVolume' w/ callback
function masterVolumeHandler() {
    SimpleAudio.volume(settings["masterVolume"] / 10);
}
Setting.addRange("masterVolume", {
    label    : "Master volume.",
    desc     : "Volume control for all audio.",
    min      : 0,
    max      : 10,
    step     : 1,
    onInit   : masterVolumeHandler,
    onChange : masterVolumeHandler
}); // default value not defined, so max value (10) is used

// Setting up a volume control for the settings property 'bgmVolume' w/ callback
function bgmVolumeInitHandler() {
    try {
        bgmVolumeHandler();
    }
    catch (ex) {
        setTimeout(bgmVolumeInitHandler, 50);
    }
}
function bgmVolumeHandler() {
    SimpleAudio.select(":bgm").volume(settings["bgmVolume"] / 10);
}
Setting.addRange("bgmVolume", {
    label    : "BGM volume.",
    desc     : "Volume control for background music.",
    min      : 0,
    max      : 10,
    step     : 1,
    onInit   : bgmVolumeInitHandler,
    onChange : bgmVolumeHandler
}); // default value not defined, so max value (10) is used

function bgmMuteHandler() {
    SimpleAudio.select(":bgm").mute(settings.bgmMute);
}
Setting.addToggle("bgmMute", {
    label    : "BGM Mute.",
    desc     : "Mute control for background audio.",
    onInit   : bgmMuteHandler,
    onChange : bgmMuteHandler
});

/*function SFXMuteHandler() {
    SimpleAudio.select(":sfx").mute(settings.SFXMute);
}
Setting.addToggle("SFXMute", {
    label    : "SFX Mute.",
    desc     : "Mute control for Sound Effects.",
    onInit   : battlesfxMuteHandler,
    onChange : battlesfxMuteHandler
});*/