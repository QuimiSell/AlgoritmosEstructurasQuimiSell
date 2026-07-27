import re

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    def replace_snippet(match):
        raw_code = match.group(1).strip()
        raw_code = raw_code.replace('"""', '').strip()
        while raw_code.startswith('`'):
            raw_code = raw_code[1:].strip()
        while raw_code.endswith('`'):
            raw_code = raw_code[:-1].strip()
        return 'codeSnippet: `' + raw_code + '`,\n      quiz: ['
    
    fixed_text = re.sub(r'codeSnippet:\s*([\s\S]*?)\s*,\s*quiz:\s*\[', replace_snippet, text)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(fixed_text)

fix_file('courses/aiEngineerCourse.ts')
fix_file('courses/cleanCodeCourse.ts')
print("Successfully fixed code snippets!")
