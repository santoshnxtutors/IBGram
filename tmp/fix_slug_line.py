# -*- coding: utf-8 -*-
p = 'src/lib/seo/slug-utils.ts'
text = open(p, encoding='utf-8').read()
lines = text.split('\n')
# Clean regex: reject filename-illegal chars and whitespace. Hyphen is allowed
# (kebab-case slugs need it); \s covers spaces/tabs/newlines.
clean = r'const UNSAFE_SLUG_CHARS = /[<>:"/\\|?*]|\s/;'
fixed = False
for i, l in enumerate(lines):
    if l.lstrip().startswith('const UNSAFE_SLUG_CHARS'):
        lines[i] = clean
        fixed = True
        print('replaced line', i + 1)
open(p, 'w', encoding='utf-8', newline='\n').write('\n'.join(lines))
data = open(p, 'rb').read()
ctrl = [b for b in data if b < 9 or (13 < b < 32)]
print('fixed:', fixed, '| control bytes remaining:', len(ctrl))
print('new line repr:', repr(clean))
