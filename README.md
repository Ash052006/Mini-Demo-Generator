# Tailored Mini-Demo Generator

## What the System Generates

For each prospect, the workflow creates a one-page artifact titled:

**"The Automation We'd Build for [Company]"**

The artifact contains:

* Spotted Pain Point
* Proposed Automation
* Workflow Diagram / Process Flow
* Call-to-Action (CTA)
* Personalized Cold Email Snippet

The recommendations are generated using information extracted from the prospect's website and are designed to be specific to the business rather than generic automation suggestions.

---

## High-Level Workflow

```text
Input Prospect URL
        │
        ▼
 Website Research
        │
        ▼
 Content Extraction
        │
        ▼
 Content Cleaning
        │
        ▼
 Automation Opportunity Identification
        │
        ▼
 Artifact Generation
        │
        ▼
 HTML Report Creation
        │
        ▼
 Output Storage
```

---

## Agent vs Workflow Decisions

### Workflow Components

#### Website Research

Responsible for:

* Fetching website content
* Extracting relevant text

Reason:

No reasoning is required. The task is purely data collection.

---

#### Content Cleaning

Responsible for:

* Removing navigation text
* Removing duplicate content
* Filtering irrelevant sections
* Preparing context for the model

Reason:

This is a deterministic transformation problem and does not require an agent.

---

#### HTML Generation

Responsible for:

* Formatting the final artifact
* Applying templates
* Generating standardized reports

Reason:

Output structure is fixed and predictable.

---

### Agent Component

#### Automation Opportunity Identification

Responsibilities:

* Understanding website content
* Identifying a realistic manual process
* Proposing a relevant automation
* Creating a personalized CTA
* Generating a cold email snippet

Reason:

This requires contextual reasoning and judgment, making it the only stage where an LLM is necessary.

---

## Sample Output Structure

### The Automation We'd Build for [Company]

#### Spotted Pain Point

Manual process identified from website content.

#### Proposed Automation

Suggested automation workflow.

#### Process Flow

Simple workflow diagram or step sequence.

#### CTA

One-line personalized outreach hook.

#### Cold Email Snippet

Personalized email referencing the generated proposal.

---

## Key Takeaway

The primary goal of this project was not to maximize AI usage but to apply it selectively where reasoning adds value. Deterministic workflow steps handle data collection and transformation, while the agent is reserved for business analysis and automation opportunity identification.
