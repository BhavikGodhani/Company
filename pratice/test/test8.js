function difference(arr) {

        let max = -Infinity;
        let min = Infinity;

        for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] === "number") {
                        if (arr[i] > max) {
                                max = arr[i];
                        }
                        else if (arr[i] < min) {
                                min = arr[i];
                        }
                }

        }
        return max - min;
}
console.log(difference([1, 6, 7, 2, "", null, 2, 7, 9, 1, 3, 4]));
