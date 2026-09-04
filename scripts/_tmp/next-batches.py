import json,glob,os,sys
briefs={os.path.basename(f)[:-5] for f in glob.glob("tmp/seo/briefs/*.json")}
done={os.path.basename(f)[:-5] for f in glob.glob("tmp/seo/agent-out/*.json")}
disp=set(json.load(open("tmp/seo/dispatched.json")))
pend=sorted(k for k in briefs if "gurugram" in k and k not in done and k not in disp)
n=int(sys.argv[1]) if len(sys.argv)>1 else 5
batches=[pend[i:i+3] for i in range(0,len(pend),3)]
print(f"written={len([k for k in done if 'gurugram' in k])}/389  in-flight={len(disp-done)}  undispatched={len(pend)}  batches_left={len(batches)}\n")
for b in batches[:n]: print("  ".join(b))
