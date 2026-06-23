html = _item["json"].get("data", "")

# Remove script blocks
while "<script" in html.lower() and "</script>" in html.lower():
    lower_html = html.lower()
    start = lower_html.find("<script")
    end = lower_html.find("</script>", start)

    if end == -1:
        break

    html = html[:start] + html[end + 9:]

# Remove style blocks
while "<style" in html.lower() and "</style>" in html.lower():
    lower_html = html.lower()
    start = lower_html.find("<style")
    end = lower_html.find("</style>", start)

    if end == -1:
        break

    html = html[:start] + html[end + 8:]

# Remove nav blocks
while "<nav" in html.lower() and "</nav>" in html.lower():
    lower_html = html.lower()
    start = lower_html.find("<nav")
    end = lower_html.find("</nav>", start)

    if end == -1:
        break

    html = html[:start] + html[end + 6:]

# Remove footer blocks
while "<footer" in html.lower() and "</footer>" in html.lower():
    lower_html = html.lower()
    start = lower_html.find("<footer")
    end = lower_html.find("</footer>", start)

    if end == -1:
        break

    html = html[:start] + html[end + 9:]

# Remove all remaining HTML tags
text = []
inside_tag = False

for ch in html:

    if ch == "<":
        inside_tag = True

    elif ch == ">":
        inside_tag = False
        text.append(" ")

    elif not inside_tag:
        text.append(ch)

text = "".join(text)

# Normalize whitespace
text = " ".join(text.split())

# Limit content size
text = text[:5000]

return {
    "company": _item["json"].get("company", ""),
    "website": _item["json"].get("website", ""),
    "content": text
}