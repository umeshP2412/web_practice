def convertBinValue(num, k):
    solid = int(num)
    inPart = num
    frac = inPart-solid
    print(frac)
    v=""
    while(solid):
        b=solid%2
        v=v+str(b)
        solid=solid//2
    v = v[::-1]
    fb=""
    while(k):
        frac= frac*2
        print(frac)
        fbp = str(frac).split(".")
        frac = frac-int(fbp[0])
        fb=fb+str(fbp[0])
        k = k-1


    return ".".join((str(v),str(fb)))



if __name__ == '__main__':
    num = float(input('Give Value: '))
    prec = int(input('Give upto Deciml place: '))
    print(convertBinValue(num, prec))

