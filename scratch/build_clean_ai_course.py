import re

def clean_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    lines = content.splitlines()
    new_lines = []
    in_snippet = False
    snippet_lines = []

    for line in lines:
        if line.strip().startswith('codeSnippet:'):
            in_snippet = True
            snippet_lines = [line.split('codeSnippet:')[1].strip()]
        elif in_snippet:
            if line.strip().startswith('quiz:'):
                in_snippet = False
                raw = "\n".join(snippet_lines).strip()
                while raw.startswith('`') or raw.startswith('"') or raw.startswith("'"):
                    raw = raw[1:].strip()
                while raw.endswith('`') or raw.endswith('"') or raw.endswith("'") or raw.endswith(','):
                    raw = raw[:-1].strip()
                safe_code = raw.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')
                new_lines.append(f'      codeSnippet: `{safe_code}`,')
                new_lines.append(line)
            else:
                snippet_lines.append(line)
        else:
            new_lines.append(line)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(new_lines))

clean_file('courses/aiEngineerCourse.ts')
clean_file('courses/cleanCodeCourse.ts')
print("Cleaned both files successfully")
