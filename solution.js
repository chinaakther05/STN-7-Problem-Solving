
"use strict";

// Problem 1 Staircase
var staircase = function(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        result += " ".repeat(n - i) + "#".repeat(i);

        if (i < n) {
            result += "\n";
        }
    }

    return result;
};


// Problem 2 Grading Students
var gradingStudents = function(grades) {
    let result = [];

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];

        if (grade >= 38) {
            let nextMultiple = Math.ceil(grade / 5) * 5;

            if (nextMultiple - grade < 3) {
                grade = nextMultiple;
            }
        }

        result.push(grade);
    }

    return result;
};


// Problem 3 Time Conversion
var timeConversion = function(s) {
    let hour = Number(s.slice(0, 2));
    let period = s.slice(-2);

    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    } else {
        if (hour !== 12) {
            hour += 12;
        }
    }

    let result = String(hour).padStart(2, "0");

    return result + s.slice(2, 8);
};


// Problem 4 String Repeat
var repeatStr = function(n, s) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += s;
    }

    return result;
};


// Problem 5 Reversed Strings
var solution = function(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
};


// Problem 6 Sum of Positive
var positiveSum = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
};


// Problem 7 Grasshopper - Summation
var summation = function(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
};



// Problem 8 Convert a Boolean to a String
var booleanToString = function(b) {
    return String(b);
};


// Problem 9 Fizz Buzz
var fizzBuzz = function(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }

    return result;
};


// Problem 10 Running Sum of 1D Array
var runningSum = function(nums) {
    let sum = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }

    return result;
};


// Problem 11 Richest Customer Wealth
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let total = 0;

        for (let j = 0; j < accounts[i].length; j++) {
            total += accounts[i][j];
        }

        if (total > maxWealth) {
            maxWealth = total;
        }
    }

    return maxWealth;
};


// Problem 12 Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};


// Problem 13 Contains Duplicate
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }

    return false;
};
