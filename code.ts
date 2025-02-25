export function getRepeatingChars(arrOfChars: string[] | number[]): {[key: string]: number} {
    let stats: {[key: string]: number}  = {};
    for (const item of arrOfChars) {
        if (stats.hasOwnProperty(item)) {
            stats[item]++;
        } else {
            stats[item] = 1;
        }
    }
    return Object.fromEntries(Object.entries(stats).sort(([, a], [, b]) => {
        return b - a;
    }));
}