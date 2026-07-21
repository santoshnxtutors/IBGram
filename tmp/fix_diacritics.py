# -*- coding: utf-8 -*-
p = "backend/src/modules/tutor-profile/tutor-profile.service.ts"
lines = open(p, encoding="utf-8").read().split("\n")
out = []
for l in lines:
    if any(0x300 <= ord(c) <= 0x36F for c in l):
        out.append('      .replace(/[\\u0300-\\u036f]/g, "")')
    else:
        out.append(l)
with open(p, "w", encoding="utf-8", newline="\n") as f:
    f.write("\n".join(out))
    f.flush()
check = open(p, encoding="utf-8").read()
print("marks remaining:", sum(1 for c in check if 0x300 <= ord(c) <= 0x36F))
print("has escape:", "\\u0300-\\u036f" in check)
