import {longestCommonPrefix} from './index';

test("最长公共前缀",()=>{
    expect(longestCommonPrefix([])).toEqual('');
    expect(longestCommonPrefix(["flower","flow","flight"])).toEqual("fl");
    expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("");
})