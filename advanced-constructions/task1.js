const getSumAndCount = arr => {
    const count = arr.filter(item => item < 0).length;
    const sum = arr.reduce((acc, curr) => {
        return acc + curr;
    })

    return {
        count: count,
        sum: sum,
    }
};

const getSumAndCount2 = arr => {
    return arr.reduce((acc, curr) => {
        if (curr < 0) {
            acc.count += 1;
        }

        acc.sum = acc.sum + curr;

        return acc;
    }, {sum: 0, count: 0});
};
