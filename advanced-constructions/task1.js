const arr = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];

const getSumAndCount = arr => {
    const count = arr.filter(item => item < 0).length;
    const sum = arr.reduce((acc, curr) => {
        return acc + curr;
    })

    return {
        count: count,
        sum: sum,
    }
}

const getSumAndCount2 = arr => {
    arr.reduce((acc, curr) => {
        let count;

        if (curr < 0) {
            count++;
        }

        const sum = acc + curr;

        return {
            sum: sum,
            count: count,
        };
    })
}