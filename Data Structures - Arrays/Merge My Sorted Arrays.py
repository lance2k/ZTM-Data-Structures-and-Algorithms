#def mergesortedarr(a,b):
#  x=a+b
#  x.sort()
#  return x

#a=[1,2,3,4]
#b=[3,7,9,12]
#qw=mergesortedarr(a,b)
#print(qw)

#In interview we must solve only like this

def mergedSortedArrays(arr1, arr2):
    if(len(arr1) == 0 or len(arr2) == 0):
        return arr1+arr2
    
    sortedArr = []
    i = 0
    j = 0

    while( i < len(arr1) and j < len(arr2) ):
        if( arr1[i] <= arr2[j] ):
            sortedArr.append( arr1[i] )
            i += 1
        elif arr2[j] < arr1[i]:
            sortedArr.append( arr2[j] )
            j += 1
    
    return sortedArr+arr1[i:]+arr2[j:]

a=[1,3,4,6,20]
b=[2,3,4,5,6,9,11,76]
x=mergedSortedArrays(a,b)
print(x)