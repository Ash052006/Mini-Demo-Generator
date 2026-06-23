# Tailored Mini-Demo Generator

## Overview

This project generates personalized automation proposals for prospects based on their website content.

Given a website URL, the workflow researches the prospect, identifies a realistic manual process that could be automated, and generates a one-page artifact titled:

**"The Automation We'd Build for [Company]"**

Each artifact includes:

* Spotted pain point
* Proposed automation
* Workflow diagram / process flow
* CTA line
* Personalized cold email snippet

The goal was to create recommendations that are grounded in the prospect's actual business rather than generic automation suggestions.

---

## My Approach

I used **n8n as the orchestration layer** and kept the workflow as simple as possible.

### Workflow

Prospect URL
→ Website Research
→ Content Cleaning
→ Automation Opportunity Identification
→ Artifact Generation
→ HTML Output

I intentionally used AI only for identifying the automation opportunity and generating personalized messaging.

Website scraping, content cleaning, formatting, and HTML generation are deterministic tasks and were implemented as workflow logic rather than agent steps.

This keeps the workflow more reliable, easier to debug, and cheaper to run.

---

## Key Decisions

### Where I Used an Agent

* Identifying automation opportunities
* Generating personalized outreach content

These tasks require contextual reasoning and judgment.

### Where I Did Not Use an Agent

* Website scraping
* Content extraction
* Content cleaning
* HTML generation

These tasks are deterministic and do not benefit from AI.

---

## What I Scoped Out

To keep the project focused, I deliberately did not implement:

* Deep website crawling
* CRM integrations
* Automated email sending
* Multi-agent architecture
* Lead scoring
* Prospect enrichment from LinkedIn or external sources

The assignment emphasized approach and reasoning, so I focused on delivering a working core system.

---

## What I'd Build Next

Given more time, I would add:

* Multi-page website research
* LinkedIn and company enrichment
* Lead prioritization and scoring
* CRM integrations (HubSpot/Salesforce)
* PDF export
* Human review before outreach
* Performance tracking for generated recommendations

---

## Running the Project

### Prerequisites

* n8n
* Gemini API Key (or equivalent LLM provider)

### Steps

1. Import `workflow.json` into n8n.
2. Configure API credentials.
3. Provide a list of prospect URLs.
4. Execute the workflow.
5. Generated HTML artifacts will be written to the output folder.

---

## Deliverables

* `workflow.json`
* Sample prospect inputs
* Generated HTML artifacts
* Workflow screenshot
* README

The project prioritizes grounded recommendations, bounded research costs, and clear separation between workflow logic and agent reasoning.
