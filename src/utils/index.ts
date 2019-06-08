// Random integer from <low, high> interval
export function randInt(low: number, high: number): number {
    return low + Math.floor(Math.random() * (high - low + 1));
}

// Javascript mod fix
export function mod(n: number, m: number): number {
    return (n % m + m) % m;
}
