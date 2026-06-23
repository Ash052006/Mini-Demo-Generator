# Tailored Mini-Demo Generator

## Overview

This project automates the creation of personalized automation proposals for prospective businesses.

Given a company's website URL, the workflow researches the business, identifies a realistic manual process that could benefit from automation, and generates a tailored one-page artifact titled:

**"The Automation We'd Build for [Company]"**

The artifact includes:

* Identified operational pain point
* Proposed automation solution
* Workflow diagram / process outline
* Personalized outreach hook
* Cold email snippet

The system is designed to prioritize **grounding and relevance** over generic AI-generated suggestions. Recommendations are based on information extracted from the prospect's website rather than assumptions.

---

## Sample Workflow

Prospect URL

↓

Website Scraping

↓

Content Cleaning

↓


Automation Opportunity Identification

↓

Artifact Generation

↓

HTML Output

↓

Save to Output Folder

---

## Architecture Decisions

### Where I Used Deterministic Workflows

The following steps are predictable and rule-based, so they are implemented using standard workflow logic:

#### Website Scraping

Responsible for extracting content from the prospect's website.

Reason:

* No reasoning required
* Simple data collection task
* Lower cost and more reliable than using an LLM

#### Content Cleaning

Removes navigation links, boilerplate text, repeated content, and formatting noise.

Reason:

* Structured transformation task
* Faster and cheaper than an agent

#### HTML Generation

Converts generated content into a standardized artifact template.

Reason:

* Consistent output structure
* No need for autonomous reasoning

---

### Where I Used an LLM Agent

#### Automation Opportunity Identification

This is the only stage where an LLM is required.

Responsibilities:

* Understand the business model
* Identify a likely manual process
* Evaluate whether automation would provide value
* Generate a realistic proposal
* Create a personalized outreach hook

Reason:
This step requires contextual reasoning and business understanding, making it a good candidate for an agent.

---

## Grounding Strategy

To avoid hallucinated recommendations:

* The agent only receives cleaned website content.
* Recommendations must reference information found on the prospect's website.
* The workflow prefers a smaller, well-supported recommendation over a speculative one.
* If insufficient information exists, the workflow generates a conservative proposal rather than inventing problems.

---

## Error Handling

The workflow is designed so that a single failed prospect does not stop the entire batch.

Implemented safeguards:

* Independent processing per prospect
* Continue-on-error behavior
* Fallback outputs for failed analyses
* Output logging for troubleshooting

---

## Cost Controls

To keep execution inexpensive:

* Only one LLM analysis pass per prospect
* Website content is cleaned before being sent to the model
* Deterministic tasks do not use AI
* Limited context size to reduce token usage

---

## Technologies Used

### Workflow Automation

* n8n

### AI Model

* Google Gemini
* Groq (alternative model support)
* OpenRouter (optional)

### Scripting

* JavaScript

### Output Format

* HTML

---

## Project Structure

```text
.
├── workflow.json
├── prospects.json
├── outputs/
│   ├── company1.html
│   ├── company2.html
│   └── company3.html
├── screenshots/
│   └── workflow.png
└── README.md
```

---

## How to Run

### 1. Import Workflow

Import `workflow.json` into n8n.

### 2. Configure Credentials

Add the required API credentials:

* Gemini API Key
* Groq API Key (optional)
* OpenRouter API Key (optional)

### 3. Provide Prospect List

Update `prospects.json` with company website URLs.

### 4. Execute Workflow

Run the workflow from the trigger node.

### 5. View Outputs

Generated artifacts will be written to the output directory.

---

## Example Output

For each prospect the workflow generates:

### The Automation We'd Build for [Company]

* Company Summary
* Identified Pain Point
* Proposed Automation
* Workflow Diagram
* Outreach Hook
* Cold Email Snippet

---

## Future Improvements

If given additional time, I would add:

* LinkedIn enrichment
* Company size detection
* Multi-page website research
* Lead scoring
* CRM integration (HubSpot/Salesforce)
* Automated outreach generation
* PDF export support
* Human review workflow before sending

---

## Key Takeaway

The primary goal of this project was not to maximize AI usage but to apply it selectively where reasoning adds value. Deterministic workflow steps handle data collection and transformation, while the agent is reserved for business analysis and automation opportunity identification.
