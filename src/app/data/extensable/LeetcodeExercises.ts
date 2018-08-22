import { LeetcodeProblem } from '../../classes/LeetcodeProblem';


export const exercises: Array<LeetcodeProblem> = [{
    exercise: 1,
    title: 'Two Sum',
    problemURL: 'https://leetcode.com/problems/two-sum/',
    solutionURL: 'https://leetcode.com/submissions/detail/170909979/',
    runtime: 184,
    percentile: 22.56,
    code: [
        '/**',
        '* @param {number[]} nums',
        '* @param {number} target',
        '* @return {number[]}',
        '*/',
        'var twoSum = function(nums, target) {',
        'var pair = [];',
        'for (var j = 0; j < nums.length; j++) {',
        '    for (var k = j + 1; k < nums.length; k++) {',
        '        if (nums[j] + nums[k] === target) {',
        '            pair[0] = j;',
        '            pair[1] = k;',
        '            break;',
        '        }',
        '    }',
        '}',
        '',
        'return pair;',
        '};'
    ]
}, {
    exercise: 2,
    title: 'Add Two Numbers',
    problemURL: 'https://leetcode.com/problems/add-two-numbers/',
    solutionURL: 'https://leetcode.com/submissions/detail/170898763/',
    runtime: 108,
    percentile: 100,
    code: [
        '/**',
        ' * Definition for singly-linked list.',
        ' * function ListNode(val) {',
        ' *     this.val = val;',
        ' *     this.next = null;',
        ' * }',
        ' */',
        '/**',
        ' * @param {ListNode} l1',
        ' * @param {ListNode} l2',
        ' * @return {ListNode}',
        ' */',
        'var addTwoNumbers = function(l1, l2) {',
        '    var answer = [];',
        '    ',
        '    addTwoNumbersHelper(l1, l2, 0, answer)',
        '    ',
        '    return answer;',
        '};',
        '',
        'var addTwoNumbersHelper = function(l1, l2, overflow, answer) {',
        '    var v1;',
        '    var v2;',
        '    if (l1 == null) {',
        '        v1 = 0;',
        '    } else {',
        '        v1 = l1.val;',
        '        l1 = l1.next;',
        '    }',
        '    if (l2 == null) {',
        '        v2 = 0;',
        '    } else {',
        '        v2 = l2.val;',
        '        l2 = l2.next;',
        '    }',
        '    ',
        '    var out = v1 + v2 + overflow;',
        '    if (out >= 10) {',
        '        overflow = out/10 | 0;',
        '        out = out % 10;',
        '    } else {',
        '        overflow = 0;',
        '    }',
        '    answer.push(out);',
        '    ',
        '    if (l1 != null || l2 != null || overflow >= 1) {',
        '        addTwoNumbersHelper(l1, l2, overflow, answer)',
        '    }',
        '    ',
        '    return;',
        '}'
    ]
}];
