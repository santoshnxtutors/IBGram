import sys,re,json
f=sys.argv[1]; reps=json.load(open(sys.argv[2],encoding='utf8'))
s=open(f,encoding='utf8',newline='').read()
for old,new in reps:
    if s.count(old)!=1: print("MISS/DUP",s.count(old),old[:60]); continue
    s=s.replace(old,new)
open(f,'w',encoding='utf8',newline='').write(s)
