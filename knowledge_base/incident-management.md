# INCIDENT MANAGEMENT: Quick Reference Guide

## What It Is

Incident Management is a structured process for detecting, responding to, and learning from service disruptions or failures. It transforms chaos into coordinated action, minimizes business impact, and captures knowledge for prevention.

**Why It Matters:**
- **Speed matters**: Fast response prevents cascading failures and customer impact
- **Communication prevents confusion**: Clear roles eliminate blame and finger-pointing
- **Root causes prevent recurrence**: Understanding "why" reduces future incidents
- **Learning embeds knowledge**: Post-incident reviews build organizational resilience
- **Trust matters**: Transparent processes build psychological safety in incident response

---

## Key Dimensions

| Dimension | Meaning | Example |
|---|---|---|
| Detection | How quickly issues are identified | Monitoring alerts vs. customer reports |
| Response | Coordinated action to minimize impact | War room activation, communication cascade |
| Root Cause | Understanding what actually failed | Not just "database was slow" but "query plan changed" |
| Resolution | Returning to normal operations | Rollback, hotfix, or workaround deployment |
| Learning | Capturing insights to prevent recurrence | Post-incident review, blameless culture |

---

## Research Foundation

**Key Sources:**
- **John Allspaw & Tom Limoncelli**: "**Blameless postmortems**" and learning culture (pioneered by Google)
- **Gene Kim, Jez Humble**: *The DevOps Handbook* - incident response as organizational capability
- **Etsy**: **Blameless postmortem** culture, reducing **mean time to recovery (MTTR)**

---

## Core Framework: 5 Phases

### Phase 1: Incident Detection & Alerting
- Proactive monitoring (metrics, logs, synthetic tests)
- Customer reports as early warning
- Clear definition of "incident" vs. "issue"
- **Goal**: Minimize time-to-detection

### Phase 2: Incident Response & **Triage**
- Rapid **war room** activation (clear communication channel)
- **Incident commander** (single point of coordination)
- Stakeholder notification (customers, leadership)
- Initial assessment (scope, severity, impact)
- **Goal**: Establish order, prevent panic

### Phase 3: Incident Resolution
- Parallel investigation + remediation
- Clear escalation paths for blocked decisions
- Temporary fixes vs. permanent fixes (trade-off clarity)
- **Goal**: Return to normal operations as fast as safely possible

### Phase 4: Post-Incident Review
- **Blameless analysis** of what happened (not who caused it)
- Timeline reconstruction (when did each thing happen?)
- **Root cause analysis** (**5 Whys** or similar)
- Contributing factors (systems, processes, human decisions)
- **Goal**: Understand the full story, not assign blame

### Phase 5: Knowledge Capture & Prevention
- Document findings and action items
- Implement improvements (monitoring, alerting, process, design)
- Track remediation (don't let improvements slip)
- Share learnings across organization
- **Goal**: Reduce probability or severity of recurrence

---

## Case Study 1: Google's SRE Culture (Detection & Learning)

**What They Did:**
Google formalized **Incident Management** as a core discipline (**Site Reliability Engineering** / **SRE**). They invested in monitoring, alerting, and crucially—**blameless postmortems**. When incidents happened, the focus was purely on "what systems, processes, or decisions led to this?" not "who made a mistake?"

**Result:**
- **Mean Time to Recovery (MTTR)** reduced from hours to minutes
- Incident frequency decreased as prevention mechanisms accumulated
- Teams moved faster because they reported incidents immediately (no fear of blame)
- Knowledge spread across the organization (postmortems were shared widely)

**Key Lesson:**
Psychological safety in incident response is an organizational capability. When people fear blame, they hide incidents, slow down recovery, and prevent learning. When blameless culture exists, incidents become data points for improvement, not career threats.

**Why It Worked:**
- **Clear process**: Everyone knew the incident response protocol (who, what, when)
- **Incident commander role**: Single point of coordination prevented chaos
- **Blameless postmortems**: Focus on systems, not people, encouraged honesty
- **Public sharing**: Postmortems were shared openly, spreading knowledge company-wide

---

## Case Study 2: Hospital Emergency Response (Detection & Response)

**What They Did:**
A major hospital implemented structured Incident Response protocols for critical patient events (code blues, medication errors). They adopted the Incident Command System (ICS) from emergency response: one commander, clear roles (triage, treatment, documentation, family communication), parallel workflows, and post-incident reviews.

**Result:**
- Response time to critical events dropped from 15+ minutes to 3-5 minutes (detection + triage)
- Medication error frequency decreased 40% within 1 year (from learning/prevention)
- Staff confidence increased because they knew the protocol (reduced hesitation)
- Near-misses were reported immediately (psychological safety), allowing prevention

**Key Lesson:**
Formal process + clear roles + psychological safety = faster response + better learning. The hospital didn't have better doctors, but they had better coordination and fewer hidden incidents.

**Why It Worked:**
- **Incident Commander**: One person coordinated (no confusion, no duplicate work)
- **Clear roles**: Everyone knew their job (**triage**, treatment, comms, documentation)
- **Parallel work**: Multiple things happened at once (faster overall response)
- **No blame**: Post-incident review asked "what can we change?" not "who failed?"

---

## Do's & Don'ts (Combined Format)

### DO 1: Activate a Single Incident Commander Immediately
**What:** One person coordinates all response activities (not a consensus-based discussion)
**Why:** Reduces decision paralysis, prevents duplicated work, maintains clear authority chain
**Example:** 
- ✅ **Good**: "Sarah is incident commander. Engineering, start diagnostics. Product, prepare customer communication. Finance, estimate impact."
- ❌ **Bad**: "Everyone jump in. Who knows what's happening? Let's discuss options." (30 minutes pass, no decision made)

---

### DO 2: Establish Clear Communication Channels (War Room)
**What:** All responders in one channel (Slack, conference bridge, war room); no side conversations about incident
**Why:** Prevents information silos, ensures everyone sees decisions, reduces repeated questions
**Example:**
- ✅ **Good**: War room bridge line with all stakeholders; Slack channel with live updates; everyone sees timeline
- ❌ **Bad**: PMs discussing with execs separately, engineers discussing with ops separately; conflicting information spreads

---

### DO 3: Notify Customers Early, Even With Partial Information
**What:** Communicate status, impact, and **ETA** within first 5 minutes; update every 15 minutes
**Why:** Reduces panic, prevents rumor mill, builds trust, gives customers action items if needed
**Example:**
- ✅ **Good**: "We detected an issue at 2:15 PM affecting login for 15% of users. Engineers are investigating. Estimated update in 15 minutes."
- ❌ **Bad**: Complete silence for 30 minutes; customers assume it's much worse

---

### DO 4: Separate Investigation From Resolution
**What:** Parallel workflows: one team investigates **root cause**; one team fixes and restores service
**Why:** **Faster recovery** (don't wait for root cause understanding); resolution time independent of learning
**Example:**
- ✅ **Good**: Ops team rolls back deployment (5 min). **SRE** team investigates what went wrong (45 min investigation, separate from fix)
- ❌ **Bad**: Wait for full root cause analysis before rolling back (service is down for 45 minutes)

---

### DO 5: Document Timeline During Incident, Not After
**What:** Real-time log: "2:15 PM - Alert fired", "2:18 PM - **War room** activated", "2:22 PM - Rollback started"
**Why:** Prevents false memories, speeds postmortem, creates accurate record for learning
**Example:**
- ✅ **Good**: Dedicated **scribe** in war room adds events to timeline in real-time
- ❌ **Bad**: Try to recreate timeline from memory days later ("I think it was around 2:20?")

---

### DO 6: Conduct Blameless Postmortems Within 48 Hours
**What:** Review what happened, why systems/processes/decisions led to incident, what we'll change
**Why:** Fresh memories, captures learning while details are clear, builds psychological safety
**Example:**
- ✅ **Good**: "The code passed tests because test coverage was insufficient. We'll add tests for this scenario. No blame for whoever wrote the code."
- ❌ **Bad**: "John deployed bad code. John is an idiot." (John hides future incidents instead of reporting them)

---

### DON'T 1: Wait for Perfect Information Before Acting
**What:** Don't delay response waiting for complete root cause analysis
**Why:** Business impact compounds every minute; temporary fix + investigation faster than perfect fix after analysis
**Example:**
- ✅ **Good**: Symptoms point to database; roll back latest change (2 min fix) while investigating DB queries
- ❌ **Bad**: "We can't fix anything until we know exactly what's wrong." (Service down for 1 hour while investigating)

---

### DON'T 2: Focus on Who Made the Mistake Instead of What Failed
**What:** Don't ask "who deployed this?" or "who wrote this code?"; ask "what systems allowed this to happen?"
**Why:** Blame culture hides incidents, prevents learning, reduces future reporting, damages trust
**Example:**
- ✅ **Good**: "Deploys are manual, which allows mistakes. We'll automate deployment process."
- ❌ **Bad**: "Sarah made a typo in config. We should fire Sarah or reduce her access." (People get scared, hide incidents)

---

### DON'T 3: Assume Single Root Cause
**What:** Don't stop at "database was slow"; dig for why database was slow, why alerts missed it, why backup wasn't available
**Why:** Single root causes are rare; multiple contributing factors prevent recurrence better than patching one thing
**Example:**
- ✅ **Good**: "Root causes: (1) Query plan changed due to schema modification, (2) Monitoring didn't alert on slow queries, (3) Read replicas were misconfigured"
- ❌ **Bad**: "Root cause: Query was slow. We'll rewrite the query." (Doesn't address monitoring gap or replica misconfiguration)

---

### DON'T 4: Close Postmortem Without Action Items and Owners
**What:** Don't say "we'll improve monitoring" without assigning to someone with a deadline
**Why:** Action items without owners disappear; improvements don't get implemented; same incident recurs
**Example:**
- ✅ **Good**: "Alex will implement query-performance alerts by Friday. Sarah will add test coverage by next Wednesday."
- ❌ **Bad**: "We should improve monitoring someday." (Never happens)

---

### DON'T 5: Keep Postmortems Internal
**What:** Don't restrict postmortems to incident responders; share broadly with engineering, ops, product, leadership
**Why:** Organization learns from the incident, same mistakes prevented across multiple teams, transparency builds trust
**Example:**
- ✅ **Good**: Share postmortem in Slack. Discuss in weekly engineering all-hands. Add lessons to runbook library.
- ❌ **Bad**: Postmortem stays in small email. Most of org never learns the lesson.

---

### DON'T 6: Confuse Incident Severity With Blame Intensity
**What:** Don't blame people more if incident was severity-1 (major) vs. severity-3 (minor)
**Why:** Blame discourages honesty; high-severity incidents often have obvious contributing factors that should have been caught by systems/process
**Example:**
- ✅ **Good**: Severity-1 incident review asks "what systems failed?" with same blameless approach as severity-3
- ❌ **Bad**: "This was critical. Someone's head will roll." (Creates fear, prevents learning)

---

## Incident Response Severity & Escalation

| Severity | Definition | Response Time | Communication |
|---|---|---|---|
| **Severity 1** | Major service outage; customers cannot use product | Incident commander + all hands | Customer update every 15 min; leadership involved |
| **Severity 2** | Significant degradation; some customers affected | Incident commander + on-call team | Customer update every 30 min; escalate if unresolved in 1 hour |
| **Severity 3** | Minor issue; workaround available; most customers unaffected | On-call engineer | Internal update; may not require customer communication |
| **Severity 4** | Bug or issue requiring investigation; no customer impact | Standard support process | No incident response protocol; normal work |

---

## Key References

- **John Allspaw**: "Blameless Postmortems" (Etsy blog & talks) - foundational work on psychological safety in incident response
- **Gene Kim, Jez Humble, Patrick Debois, John Willis**: *The DevOps Handbook* - Chapter on incident response as organizational capability
- **Google SRE Book**: "Managing Incidents" chapter - practical incident response protocols at scale

---

## Quick Summary

| Aspect | Key Point |
|---|---|
| **Core Goal** | Detect fast → Respond coordinated → Learn systematically |
| **Critical Role** | Incident Commander (one person, clear authority) |
| **Key Mindset** | Blameless; focus on systems and processes, not people |
| **Recovery vs. Learning** | Parallel workflows: fix fast, investigate thoroughly |
| **Psychological Safety** | Culture where people report incidents immediately without fear |
| **Prevention** | Action items with owners; postmortems shared widely |
| **Timeline** | Detection (min), Response (min-hours), Postmortem (within 48 hrs) |