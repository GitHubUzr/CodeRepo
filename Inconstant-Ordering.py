t = int(input())
for x in range (1,t+1):
    n = int(input())
    blocks = list(map(int, input().split()))
    string = "A"
    c = 65
    for a,b in enumerate(blocks):
        if (a+1)%2==1:
            for i in range(1,b+1):
                c = c+1
                string += chr(c)
        else:
            if ((c-64) <= b+1):
                m = len(string)
                c = b+65
                string = string[:m-1] + chr(c) + string[m:]
            else:
                c = 65 + b
            for i in range(1,b+1):
                c = c-1
                string += chr(c)
    print("Case #{}: {}".format(x,string))
