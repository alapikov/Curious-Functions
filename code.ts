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

export function sumDigitsOfNumber(num: number): number {
    return num.toString().split('').map(Number).reduce((prev, curr) => prev + curr);
}

export function getUrlDomain(url: string) {
    const cutUrl = url.replace(/https?:\/\/|www\./g, '');
    const idx = cutUrl.indexOf('/');
    return idx !== -1 ? cutUrl.substring(0, idx) : cutUrl;
}