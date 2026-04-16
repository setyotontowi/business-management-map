# INSTRUCTIONS: Creating Strategic Framework Guides Efficiently

## OBJECTIVE

Create comprehensive yet token-efficient strategic framework guides for organizational learning and reference. Documents serve as learning materials, reference guides, and building blocks for additional content.

---

## PART 1: TOKEN EFFICIENCY STRATEGY

### Problem Statement
- Comprehensive framework guides = 10K+ tokens each
- Creating all domains (20-30 frameworks) = 200K-300K+ tokens (expensive)
- Need: High-quality, reusable content at lower token cost

### Solution: Tiered Approach

#### Tier 1: Comprehensive Frameworks (10K tokens)
**When:** For foundational, frequently-used frameworks
**Examples:** Corporate Strategy, Lean Management, Knowledge Capture & Transfer
**Format:** Full treatment—multiple case studies, deep do's/don'ts, multiple frameworks per domain

**Use Case:** Learning deeply, understanding complexity, reference for team discussions

#### Tier 2: Quick Reference (2-3K tokens)
**When:** For specific concepts, tactical guidance, support frameworks
**Examples:** Psychological Safety, Culture, Process Optimization
**Format:** Template-based—1-2 case studies, combined do's/don'ts, brief explanations with bullets

**Use Case:** Quick understanding, tactical application, onboarding reference

#### Tier 3: Modular Components (1-2K tokens each)
**When:** For reusable concepts used across multiple domains
**Examples:** Ansoff Matrix, BCG Matrix, Porter Five Forces, PDCA, Nonaka Spiral
**Format:** Framework only—definition, key concepts, 1 brief example, 3-4 bullets on application

**Use Case:** Reference, linking across domains, teaching specific concept

---

## PART 2: TEMPLATE FOR TIER 2 (QUICK REFERENCE)

Use this structure for 2-3K token guides:

```markdown
# [FRAMEWORK NAME]: Quick Reference Guide

## What It Is
[1-2 paragraph definition]
[Why it matters: 4-5 bullet points]

## Key Dimensions / Core Concepts
[Table format: Dimension | Meaning | Example]

## Research Foundation / Academic Base
[2-3 key researchers/books, brief]

## Core Framework / Pillars
[4-5 main concepts with brief descriptions]

## Case Studies (2 ONLY)
### Case 1: [Company/Example]
[What they did, result, psychological safety driver / key lesson]

### Case 2: [Company/Example]
[What they did, result, psychological safety driver / key lesson]

## Do's & Don'ts (Combined Format)

### DO [#]: [Action]
**What:** [Brief description]
**Why:** [Impact/reason]
**Example:** ✅ [Good] vs. ❌ [Bad]

### DON'T [#]: [Action]
**What:** [Brief description]
**Why:** [Impact/reason]
**Example:** ✅ [Good] vs. ❌ [Bad]

## [Misconceptions Table / Build Plan / Measurement / Summary Table]
[1 supporting table for quick reference]

## Key References
[2-3 books/articles]

## Quick Summary
[Summary table: Aspect | Key Point]
```

**Token Budget Allocation (2-3K total):**
- Definition + dimensions: 300 tokens
- Framework/pillars: 400 tokens
- Case 1: 400 tokens
- Case 2: 400 tokens
- Do's & don'ts (6 pairs): 400 tokens
- Supporting table + references: 200 tokens

---

## PART 3: TEMPLATE FOR TIER 1 (COMPREHENSIVE)

Use this structure for 10K token guides:

```markdown
# [FRAMEWORK NAME]: Comprehensive Framework Guide

## Overview
[What it is, why it matters, scope]

## PART 1: BASIC KNOWLEDGE & FRAMEWORKS

### 1.1 What is [Framework]?
- Definition
- Types/Categories
- Why It Matters
- [vs. Other approaches] (comparison table)

### 1.2 Core Frameworks (3-4 major frameworks)
[Each framework:]
- Definition
- How it works
- Components/modes
- Why it matters
- Strengths/weaknesses

### 1.3 Strategic Choices / Models (2-3 models)
[Each model:]
- Definition
- Options/choices
- Pros/cons
- When to use

## PART 2: MAJOR COMPANY CASE STUDIES

### 2.1 [Company]: [Story arc]
- The story
- Corporate strategy lessons
- What they did right / wrong
- Why it worked

### 2.2 [Company]: [Story arc]
[Same structure]

### 2.3+ [More cases]
[Same structure]

## PART 3: DO'S & DON'TS & WHY

### 3.1 DO'S (Best Practices)
[7-8 do's, each with:]
- What (action)
- How (method)
- Why (reasoning)
- Example

### 3.2 DON'T'S (Common Mistakes)
[7-8 don'ts, each with:]
- Mistake (what companies do wrong)
- Why it happens (reasoning)
- Why it fails (consequences)
- What to do instead (example)

### 3.3 Why These Rules Exist
[Deeper reasoning for the rules]

## Summary Table
[Framework overview table]

## Recommended Reading
[5-10 books/articles]
```

**Token Budget Allocation (10K total):**
- Part 1 (frameworks): 4K tokens
- Part 2 (cases): 3.5K tokens
- Part 3 (do's/don'ts): 2K tokens
- Summary + references: 0.5K tokens

---

## PART 4: TOKEN OPTIMIZATION TECHNIQUES

### Technique 1: Use Tables (Save 20%)
**Inefficient:** Detailed prose for each concept
**Efficient:** Table format with Concept | Definition | Example

```
INSTEAD OF:
"Transportation waste occurs when materials are moved unnecessarily. 
For example, parts at one end of factory must move to other end, 
taking time and risk of damage..."

USE:
| Waste Type | Definition | Example |
|---|---|---|
| Transportation | Unnecessary movement | Parts moved between distant workstations |
```

### Technique 2: Remove Repetitive Explanations (Save 15%)
**Inefficient:** Explain concept, then examples repeat explanation
**Efficient:** Explain once, examples are brief illustrations

```
INSTEAD OF:
"Lean eliminates waste. There are 8 types of waste.
Transportation waste eliminates unnecessary movement...
Inventory waste eliminates excess stock..."

USE:
"8 types of waste: Transportation, Inventory, Motion, Waiting, 
Overproduction, Over-processing, Defects, Underutilized Talent
[Definitions in table, not repeated]"
```

### Technique 3: Use Summaries, Not Full Explanations (Save 25%)
**Inefficient:** Full explanation of each concept
**Efficient:** Brief description with key points as bullets

```
INSTEAD OF:
"Code review is a process where engineers examine each other's code. 
This serves multiple purposes: it transfers knowledge between engineers, 
ensures quality of code, maintains architectural consistency..."

USE:
"Code review → knowledge transfer, quality assurance, 
architectural consistency"
```

### Technique 4: Link Instead of Repeat (Save 40% for cross-domain)
**Inefficient:** Explain framework in each domain that uses it
**Efficient:** Create once, link from multiple places

```
File: /frameworks/ansoff_matrix.md (2K, created once)

Then in other files:
"Uses Ansoff Matrix for growth strategies. See [Ansoff Matrix reference]"
```

### Technique 5: Use Bullets for Details (Save 20%)
**Inefficient:** Full paragraphs explaining each point
**Efficient:** Clear bullet points, save prose for key insights

```
INSTEAD OF:
"The first principle is to specify value. This means understanding 
what the customer actually values. You should interview customers, 
observe them, and understand their needs from their perspective. 
This is important because..."

USE:
"Principle 1: SPECIFY VALUE
- Interview customers (what do you pay for?)
- Observe them (what problems do they have?)
- Distinguish value from nice-to-have
- Document clearly (not assumptions)"
```

### Technique 6: Case Studies - Brief Versions (Save 30%)
**Inefficient:** Long narrative with all details
**Efficient:** Story + Result + Key lesson (300 words max per case)

```
STRUCTURE (per case):
- What they did (brief narrative, 80 words)
- Result (specific, measurable, 50 words)
- Lesson (key insight for framework, 50 words)
- Why it worked (framework connection, 50 words)
```

---

## PART 5: CONTENT ORGANIZATION STRATEGY

### Priority Tiers (Tier 1 → Tier 2 → Tier 3)

#### TIER 1: Create Comprehensive (10K tokens each)
These are foundational, frequently-referenced, and worth deep treatment:
- ✅ Corporate Strategy (Ansoff, BCG, diversification)
- ✅ Lean Management (8 wastes, 5 principles, tools)
- ✅ Knowledge Capture & Transfer (Nonaka spiral, CoP, AAR)
- ✅ Vision & Mission Frameworks (BHAG, MBO, Golden Circle, North Star)

**Total Tier 1: ~40K tokens**

#### TIER 2: Create Quick Reference (2-3K tokens each)
Specific concepts, tactical, support frameworks:
- ✅ Psychological Safety (4 pillars, do's/don'ts)
- Agile & Iterative Delivery (sprints, standups, retrospectives)
- Process Optimization (value stream mapping, continuous improvement)
- Change Management (resistance, leadership, communication)
- Organizational Structure (functional, matrix, flat)

**Total Tier 2: ~15K tokens (5 frameworks)**

#### TIER 3: Create Modular Components (1-2K tokens each)
Reusable concepts, used across multiple domains:
- Ansoff Matrix (2x, in corporate strategy + elsewhere)
- BCG Matrix (2x, in corporate strategy + elsewhere)
- Porter Five Forces (used in multiple strategy contexts)
- PDCA Cycle (used in Lean, change management, continuous improvement)
- Nonaka Spiral (used in knowledge capture, learning)
- 5S Methodology (Lean tool, used in process optimization)

**Total Tier 3: ~10K tokens (created once, linked everywhere)**

**Total All: ~65K tokens** (vs. 200K+ for comprehensive all)

### Linking Strategy

```
/outputs/
├── /frameworks/ (Tier 3: reusable)
│   ├── ansoff_matrix.md
│   ├── bcg_matrix.md
│   ├── porter_five_forces.md
│   ├── pdca_cycle.md
│   └── nonaka_spiral.md
│
├── /tier1_comprehensive/ (Tier 1: foundational)
│   ├── corporate_strategy.md
│   ├── lean_management.md
│   ├── knowledge_capture_transfer.md
│   └── vision_mission_frameworks.md
│
├── /tier2_quick_reference/ (Tier 2: tactical)
│   ├── psychological_safety.md
│   ├── agile_iterative.md
│   ├── process_optimization.md
│   ├── change_management.md
│   └── organizational_structure.md
│
└── INDEX.md (links all, shows relationships)
```

**Linking Example:**
```
In corporate_strategy.md:
"For growth strategies, see Ansoff Matrix framework: /frameworks/ansoff_matrix.md"

In multiple files:
"Uses PDCA for continuous improvement. See /frameworks/pdca_cycle.md"
```

---

## PART 6: CREATION WORKFLOW

### Step 1: Define Scope
- [ ] Which framework? (What problem does it solve?)
- [ ] Tier? (Comprehensive, quick reference, or modular component?)
- [ ] Key concepts? (What MUST be included?)
- [ ] Cases? (How many, which companies?)
- [ ] Token budget? (How many tokens can we spend?)

### Step 2: Outline Structure
- [ ] Use appropriate template (Tier 1 or Tier 2)
- [ ] Identify sections needed
- [ ] Plan token allocation (don't exceed budget)
- [ ] Identify cases (2 for Tier 2, 3-4 for Tier 1)

### Step 3: Draft Content
- [ ] Core framework first (most important)
- [ ] Add case studies (stories + lessons)
- [ ] Add do's & don'ts (practical guidance)
- [ ] Add supporting table (summary)
- [ ] Review token count (within budget?)

### Step 4: Optimize for Tokens
- [ ] Replace prose with tables (save 20%)
- [ ] Remove repetition (save 15%)
- [ ] Use bullets instead of full sentences (save 20%)
- [ ] Shorten case studies to essentials (save 30%)
- [ ] Link to existing content instead of recreate (save 40%)

### Step 5: Quality Check
- [ ] All key concepts covered?
- [ ] Cases clearly illustrate framework?
- [ ] Do's & don'ts actionable?
- [ ] Token count acceptable?
- [ ] References provided?

---

## PART 7: PROMPT TEMPLATES FOR EFFICIENT CREATION

### Template A: Quick Reference (2-3K tokens)

```
Create a quick reference guide for [FRAMEWORK NAME]:

Format: Use template-based approach (2-3K tokens)
Cases: Include 2 detailed cases (300 words each)
Do's & Don'ts: 6 combined pairs (brief + example)
Style: Combination—key concepts explained + bullets for details

Structure:
1. What it is (definition + why matters)
2. Key dimensions (table format)
3. Research foundation (brief)
4. Core framework (4-5 pillars/concepts)
5. Case 1: [COMPANY] - what they did, result, why it worked
6. Case 2: [COMPANY] - what they did, result, why it worked
7. Do's & Don'ts (6 pairs: what, why, examples)
8. Supporting table (misconceptions / build plan / summary)
9. Key references

Don't include: Multiple frameworks, extensive explanations, more than 2 cases

Target token count: 2-3K
No organization context: Pure knowledge for learning
```

### Template B: Comprehensive (10K tokens)

```
Create a comprehensive framework guide for [FRAMEWORK NAME]:

Format: Use full template approach (10K tokens)
Cases: Include 3-4 detailed case studies
Do's & Don'ts: 7-8 of each with full reasoning
Style: Full explanations with case depth

Structure:
PART 1: Basic Knowledge & Frameworks
- Definition, types, why it matters
- 3-4 major frameworks with full explanation
- 2-3 strategic models
- Comparison tables

PART 2: Major Company Case Studies
- 3-4 cases with: story arc, lessons, what worked/didn't, why

PART 3: Do's & Don'ts & Why
- 7-8 do's (what, how, why, example)
- 7-8 don'ts (mistake, why it happens, why it fails, what to do instead)
- Why these rules exist (deeper reasoning)

Summary table + Recommended reading

Target token count: 10K
No organization context: Pure knowledge for learning
```

---

## PART 8: QUALITY STANDARDS

### For All Guides

**Content Quality:**
- ✅ Academically grounded (research/books cited)
- ✅ Practical (examples, do's/don'ts, actionable)
- ✅ Clear (jargon explained, concepts defined)
- ✅ Structured (easy to navigate, consistent)

**Case Study Quality:**
- ✅ Real companies / actual examples
- ✅ Clear narrative (what happened, why, results)
- ✅ Linked to framework (why this case illustrates framework?)
- ✅ Lessons learned (what does this teach about framework?)

**Do's & Don'ts Quality:**
- ✅ Actionable (not abstract, but specific)
- ✅ Reasoned (why, not just "do this")
- ✅ Contrasted (good example vs. bad example)
- ✅ Connected (how does this help/hurt the framework?)

### Token Accountability

**Tier 2 (Quick Reference):**
- Budget: 2-3K tokens
- Variance: +/- 0.5K acceptable
- If exceeding: Remove case details or combine do's/don'ts

**Tier 1 (Comprehensive):**
- Budget: 10K tokens
- Variance: +/- 1K acceptable
- If exceeding: Reduce case count or shorten framework explanations

---

## PART 9: WHAT NOT TO DO

### ❌ DON'T: Create All Frameworks Comprehensive
**Problem:** 20-30 frameworks × 10K tokens = 200K+ tokens
**Solution:** Tier them; create only most important comprehensive

### ❌ DON'T: Repeat Frameworks Across Files
**Problem:** Ansoff Matrix explained in 3 different files = 6K wasted tokens
**Solution:** Create once, link from multiple places

### ❌ DON'T: Write Long Prose When Table Works
**Problem:** 200 words of explanation vs. 30-word table
**Solution:** Use tables, bullets, structured formats

### ❌ DON'T: Include Multiple Cases for Small Concepts
**Problem:** Quick reference with 5 case studies = 8-10K tokens
**Solution:** 2 cases max for quick reference

### ❌ DON'T: Over-Explain Do's & Don'ts
**Problem:** Full paragraph per do/don't = token waste
**Solution:** What (1 line) + Why (1 line) + Example (1 line)

### ❌ DON'T: Add Organization Context
**Problem:** "At your company SIMRS..." = wasted tokens on specific
**Solution:** Pure knowledge; user applies to their context

---

## PART 10: CURRENT PROGRESS & NEXT STEPS

### Completed (40.8K tokens used)

| File | Tier | Tokens | Status |
|---|---|---|---|
| corporate_strategy.md | 1 | 10K | ✅ Done |
| lean_management.md | 1 | 10K | ✅ Done |
| knowledge_capture_transfer.md | 1 | 10K | ✅ Done |
| vision_mission_frameworks.md | 1 | 8K | ✅ Done |
| psychological_safety.md | 2 | 2.8K | ✅ Done |

### Next: Tier 2 Quick References (15K tokens planned)

Suggested order (in descending priority):
1. **Agile & Iterative Delivery** (2-3K)
   - Sprints, standups, retrospectives
   - 2 cases: Software team, manufacturing adaptation
   - Metrics: velocity, cycle time, throughput

2. **Process Optimization** (2-3K)
   - Value stream mapping, bottlenecks, constraints
   - 2 cases: Hospital workflow, IT operations
   - Tools: flow analysis, metrics, improvement

3. **Change Management** (2-3K)
   - Resistance, leadership, communication
   - 2 cases: Large transformation, failed change
   - Model: Kotter's 8 steps, resistance factors

4. **Organizational Structure** (2-3K)
   - Functional, matrix, flat, pod-based
   - 2 cases: Spotify's model, traditional hierarchy
   - Trade-offs: Centralization vs. autonomy

5. **Governance & Decision-Making** (2-3K)
   - Decision frameworks, escalation, accountability
   - 2 cases: Distributed decision-making, centralized
   - Models: RACI, OKR alignment

---

## USING THESE DOCUMENTS

### For Learning
1. Start with **Tier 1 Comprehensive** (deep understanding)
2. Supplement with **Tier 2 Quick Reference** (specific tactics)
3. Reference **Tier 3 Components** (reusable concepts)

### For Reference
- **Index**: Navigate all frameworks
- **Quick Reference**: Fast lookup for specific concepts
- **Comprehensive**: Deep dive when needed

### For Building On Top
1. Use frameworks as foundation
2. Apply to your context (create SIMRS-specific guides)
3. Link to case studies (show how others did it)
4. Create playbooks (how to implement in your org)

### For Team
1. Share relevant guides with team
2. Discuss case studies in team meetings
3. Apply do's/don'ts to current projects
4. Build psychological safety (allow questions about frameworks)

---

## TOKEN EFFICIENCY SUMMARY

**Total Tokens Used (Strategic Approach):**
- Tier 1 (4 frameworks): 38K tokens
- Tier 2 (1 framework): 2.8K tokens
- **Total: 40.8K tokens**

**If Comprehensive Approach:**
- 5 frameworks × 10K = 50K tokens (23% more)

**Future Savings (With Modular Strategy):**
- Next 5 Tier 2 frameworks: ~15K tokens (efficient)
- Linking to existing frameworks: -40% per file (reuse Tier 3)
- **Estimated total when complete: ~70K tokens** (vs. 200K+ without strategy)

**Cost at $0.01/1K output tokens:**
- Current: $0.41
- Projected final: $0.70 (all domains, efficient approach)
- **Vs. inefficient: $2.00+**

---

## FINAL PRINCIPLE

**Quality over Quantity.**

Better to have 5 excellent, well-understood frameworks than 30 mediocre, poorly-integrated guides.

Focus on:
- ✅ Deep understanding (Tier 1 for fundamentals)
- ✅ Practical application (do's/don'ts, case studies)
- ✅ Reusable components (link, don't recreate)
- ✅ Team learning (discussed, applied, reflected upon)

Not on:
- ❌ Covering every possible framework
- ❌ Maximum comprehensiveness
- ❌ Impressing with volume

**Start with core frameworks (Strategy, Lean, Learning), build on those as needed.**