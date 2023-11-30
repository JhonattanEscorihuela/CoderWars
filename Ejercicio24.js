function formatDuration(seconds) {
    // Complete this 
    if (seconds === 0) return "now";

    const time = {
        year: 31536000,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };

    const duration = {};
    let remainingSeconds = seconds;

    for (const unit in time) {
        duration[unit] = Math.floor(remainingSeconds / time[unit]);
        remainingSeconds %= time[unit];
    }

    const formattedDuration = [];
    for (const unit in duration) {
        if (duration[unit] !== 0) {
            if (duration[unit] === 1) {
                formattedDuration.push(`${duration[unit]} ${unit}`);
            } else {
                formattedDuration.push(`${duration[unit]} ${unit}s`);
            }
        }
    }

    return formattedDuration.join(", ").replace(/,([^,]*)$/, " and$1");

}

console.log(formatDuration(62));