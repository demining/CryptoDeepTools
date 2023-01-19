with open('privkey.txt') as fin:
    nums = map(int, fin.read().split('\n'))
    nums = list(map(str, map(hex, nums)))
    for i, num in enumerate(nums):
        len_num = len(num)
        if len_num < 66:
            need_add = 66 - len_num
            nums[i] = f'0x{"0"*need_add}{num[2:]}'
 
with open('privkey2hex.txt', 'a') as fout:
    fout.write('\n'.join(nums))