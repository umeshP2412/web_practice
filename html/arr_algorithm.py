arr = [3,2,66,34,67,2,6]

def findNum(arr, Num):
    for i in arr:
        if i == Num:
            return True
    return False

#print(findNum(arr, 66))

#Program to rotate array by given d Number:

def rotateArray(arr, d):
    for i in range(d):
        rotateArraybyOne(arr)

def rotateArraybyOne(arr):
    temp = arr[0]
    for i in range(len(arr)-1): #not giving direct only len(arr) to avoid index out of range, as last element will be duplicated
        arr[i] = arr[i+1]
    arr[len(arr)-1] = temp

rotateArray(arr, 2)
print(arr)

