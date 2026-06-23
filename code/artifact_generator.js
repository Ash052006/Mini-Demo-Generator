let text = $json.text || "";

text = text
  .replace(/^```json\s*/i, "")
  .replace(/^```\s*/i, "")
  .replace(/```$/i, "")
  .trim();

const data = JSON.parse(text);

const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body{
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  line-height: 1.7;
  color:#1f2937;
}

h1{
  color:#1e3a8a;
  font-size:38px;
}

h2{
  color:#4f46e5;
  text-transform:uppercase;
  margin-top:35px;
  font-size:22px;
}

.workflow{
  display:flex;
  gap:10px;
  margin-top:20px;
  flex-wrap:wrap;
}

.step{
  border:2px solid #6366f1;
  border-radius:10px;
  padding:15px;
  width:150px;
  text-align:center;
  background:#f8fafc;
}

.cta{
  background:#eef2ff;
  padding:20px;
  border-radius:12px;
  margin-top:30px;
  font-size:24px;
  font-weight:bold;
  color:#4f46e5;
}

.email{
  border:1px solid #ddd;
  border-radius:12px;
  padding:20px;
  background:#fafafa;
}
</style>
</head>
<body>

<h1>The Automation We'd Build for ${data.company}</h1>

<h2>Pain We Spotted</h2>
<p>${data.pain_spotted}</p>

<h2>The Automation We'd Build</h2>
<p>${data.proposed_automation}</p>

<h2>How It Would Work</h2>

<div class="workflow">
${(data.workflow_steps || []).map(step => `<div class="step">${step}</div>`).join('')}
</div>

<h2>Expected Benefits</h2>

<ul>
${(data.benefits || []).map(b => `<li>${b}</li>`).join('')}
</ul>

<div class="cta">
${data.outreach_hook || ""}
</div>

<h2>Cold Email Snippet</h2>

<div class="email">
${data.cold_email || ""}
</div>

</body>
</html>
`;

return {
  json: {
    company: data.company,
    html: html
  }
};