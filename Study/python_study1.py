# -*- coding=utf-8

print ("-----start study Python----")
import time 
# a = 10 
# b = 20
# list = [1,2,3,4,5,6];

# if(a in list):
#     print "a in list "
# else:
#     print "a not in list"

# if(b in list):
#     print "b in list "
# else:
#     print "b not in list"

# a = 2;
# if(a in list):
#     print "a in list"
# else:
#     print 'a not in list'
    
# i = 2;
# while(i<15):
#     j = 2
#     while(j<=(i/j)):
#         if not(i%j): break
#         j = j + 1
#     if (j > (i/j)):
#         print (i), "" 
#     i = i + 1 

# for letter in 'Python':
#     if letter == 'h':
#         pass
#         print 'this is h'
#     print letter
    
# def sample(n_sample):
#     pass

# var1 = 1
# var2 = 10
# print var1,var2

# del var1,var2
# var1 = "hello word"
# var2 = "ottatwetoo"

# print "var1[0]:" ,var1[0]
# print "var2[1:5]:" ,var2[1:5]

# list1 = ['physics','chemistry',1999,1998]
# list2 = [1,2,3,4,5,6,7,8]

# print "list1[0]:",list1[0]
# print "list2[1:5]:",list2[1:5]

# list1.append('Google')
# print list1

# del list1[2]
# print list1

# # 长度
# print len(list1)

# # 组合
# print list1 + list2

# # 重复
# print list1 * 2 

# # 是否存在
# print 1998 in list1

# # 迭代
# for x in list1:
#     print x
# # 截取
# print "Cut"
# print list1[2],list1[-2],list1[1:]


# #元组
# tup1 = ('phy','che','quti')
# tup2 = (1,2,3,4,5)
# tup3 = "a","m","s","w"

# print tup1
# print tup2[0]
# print tup3[2:]

# # 不可修改
# print tup2+tup3

# # 删除
# # del tup1
# # print tup1

# # 长度
# print len(tup1)
# # 重复
# print tup1 * 2
# # 是否存在
# print 3 in tup2
# # 迭代
# for y in tup3:
#     print y
# # 截取
# print tup1[2],tup1[-2],tup2[1:]


# Dictionary 字典
# dict = {'a':1,'b':2,'Name':'Lusong','Bath':'1923'}
# print dict
# print dict['b']
# print dict['Name']
# dict['Age'] = '22'
# dict['Bath'] = '1111'
# print dict
# del dict['a']
# print 'delete dict[\'a\']', dict
# dict.clear()
# print dict 
# dict['array'] = [1,2,3,45]
# print dict.items()

# Python 时间&日期
# ticks = time.time()
# print 'now TIME is :',ticks

# # 获取当前时间
# localTimes = time.localtime(time.time())
# print 'localTime is :', localTimes

# # 获取格式化的时间
# localTimes = time.asctime(time.localtime(time.time()))
# print 'format localTime is :',localTimes

# 格式化日期
print time.strftime("%Y-%m-%d %H:%M:%S",time.localtime())
# print time.strftime("%a %b %d %H:%M:%S %Y", time.localtime()) 
# 将格式字符串转换为时间戳
# a = "Sat Mar 28 22:24:24 2016"
# print time.mktime(time.strptime(a,"%a %b %d %H:%M:%S %Y"))


# string , tuples , numbers 是不可更改的对象
# list , dict 是可以修改的对象
# def ChangeInt(a):
#     a = 10

# b = 2
# ChangeInt(b)
# print b

# def ChangeList(list):
#     list.append([1,2,34,56])
#     print list
#     return

# alist = [22,344]
# ChangeList(alist)
# print alist 

# 默认参数
# def  printInfo (str ="name",age =18):
#     print str,age
    
# printInfo("miki")

#不定参数
def printInfo(arg1,*vartuple):
    print "输出: "
    print arg1
    for var in vartuple:
        print var
    return

printInfo( 10 )
printInfo( 70, 60, 50 )