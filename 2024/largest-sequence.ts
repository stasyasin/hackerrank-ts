function isSubsequence(s1: string, s2: string): boolean {
    const n = s1.length;
    const m = s2.length;

    // Створюємо DP-таблицю
    const dp: boolean[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

    // Базовий випадок
    for (let j = 0; j <= m; j++) {
        dp[0][j] = true; // Порожній s1 є підпослідовністю будь-якого s2
    }

    // Заповнення DP-таблиці
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // Символи співпадають
            } else {
                dp[i][j] = dp[i][j - 1]; // Пропускаємо символ у s2
            }
        }
    }
    console.log(dp);
    return dp[n][m];
}

// Приклад використання
const s1 = "abc";
const s2 = "ahbgdc";
console.log(isSubsequence(s1, s2)); // true

const s3 = "axc";
console.log(isSubsequence(s3, s2)); // false
