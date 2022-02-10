export const generatePushID = (function () {
    var PUSH_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    var lastPushTime = 0;

    var lastRandChars = [];

    return function () {
        var now = new Date().getTime();
        var duplicateTime = (now === lastPushTime);
        lastPushTime = now;

        var timeStampChars = new Array(3);
        for (var i = 2; i >= 0; i--) {
            timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
            now = Math.floor(now / 64);
        }

        var id = timeStampChars.join('');

        if (!duplicateTime) {
            for (i = 0; i < 2; i++) {
                lastRandChars[i] = Math.floor(Math.random() * 64);
            }
        } else {
            for (i = 1; i >= 0 && lastRandChars[i] === 63; i--) {
                lastRandChars[i] = 0;
            }
            lastRandChars[i]++;
        }
        for (i = 0; i < 2; i++) {
            id += PUSH_CHARS.charAt(lastRandChars[i]);
        }
        if (id.length != 5) throw new Error('Length should be 5.');

        return id;
    };
})();