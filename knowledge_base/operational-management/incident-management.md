# INCIDENT MANAGEMENT: Quick Reference Guide

## What It Is

Incident Management is a structured process for detecting, responding to, and learning from service disruptions or failures. It transforms chaos into coordinated action, minimizes business impact, and captures knowledge for prevention.

**Why It Matters:**
- **Speed matters**: Fast response prevents cascading failures and customer impact
- **Communication prevents confusion**: Clear roles eliminate blame and finger-pointing
- **Root causes prevent recurrence**: Understanding "why" reduces future incidents
- **Learning embeds knowledge**: Post-incident reviews build organizational resilience
- **Trust matters**: Transparent processes build psychological safety in incident response
- **Incident vs. Issue**: An **Incident** is an unplanned disruption to a service (e.g., website down). An **Issue** (or Problem in ITIL) is the underlying cause that requires long-term resolution (e.g., insufficient memory). An **Issue** can also refer to a tracking ticket for a bug that isn't yet causing a service disruption.

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
- **Karl Weick & Kathleen Sutcliffe**: **High Reliability Organizations (HRO)** - Managing the unexpected in high-stakes environments.
- **Erik Hollnagel**: **Resilience Engineering** and **Safety-II** - focusing on how systems succeed, not just how they fail.
- **Dave Snowden**: **Cynefin Framework** - situational awareness for decision-making in complexity.
- **Diane Vaughan**: **Normalization of Deviance** - why organizations gradually accept lower standards until disaster strikes.

---

## Academic Frameworks

### 1. The Cynefin Framework (Decision Support)
Developed by Dave Snowden, this framework helps responders identify the "domain" of an incident to choose the right strategy:
- **Chaotic Domain**: (Major Outage) No clear cause-effect. **Act → Sense → Respond**. Establish order first (Incident Commander).
- **Complex Domain**: (Intermittent Bug) Cause-effect only visible in retrospect. **Probe → Sense → Respond**. Safe-to-fail experiments.
- **Complicated Domain**: (Performance Issues) Requires expertise. **Sense → Analyze → Respond**. Use specialists.

### 2. High Reliability Organizations (HRO) Principles
Weick & Sutcliffe identified 5 principles that allow organizations to manage complex systems with very few accidents:
1. **Preoccupation with Failure**: Treating near-misses as data points for potential systemic collapse.
2. **Reluctance to Simplify**: Resisting simple explanations for complex failures (avoiding "human error" as root cause).
3. **Sensitivity to Operations**: Maintaining a high level of situational awareness on the front lines.
4. **Commitment to Resilience**: Developing capabilities to detect, contain, and bounce back from errors.
5. **Deference to Expertise**: During an incident, authority shifts to those with the most relevant knowledge, not the highest rank.

### 3. Resilience Engineering (Safety-II)
Erik Hollnagel distinguishes between **Safety-I** (preventing things from going wrong) and **Safety-II** (understanding how things normally go right).
- **Graceful Extensibility**: The ability of a system to stretch its performance under pressure.
- **Sustaining Adaptability**: Ensuring the organization has the "margin" to handle the unexpected.
- **Local Rationality**: Understanding that people make decisions that make sense to them at the time, given their context and goals.

### 4. Normalization of Deviance
Coined by Diane Vaughan (studying the Challenger disaster), this describes how small deviations from standard operating procedures (SOPs) become the "new normal" until a tipping point is reached.
- **The Warning**: Incidents are often the result of long-term erosion of safety margins, not a single point-of-failure.

---

## IT Service Management (ITSM) & ITIL

Modern incident management often borrows from established enterprise frameworks:

- **ITSM (IT Service Management)**: The overarching discipline of designing, delivering, managing, and improving the way IT is used within an organization. It focuses on aligninig IT services with business needs.
- **ITIL (Information Technology Infrastructure Library)**: A specific, widely-adopted set of best practices for ITSM.
    - **Incident Management in ITIL**: Focuses on restoring service as quickly as possible.
    - **Problem Management in ITIL**: Focuses on identifying and removing the root cause to prevent future incidents.
    - **Change Management in ITIL**: Ensures that changes to the system are handled efficiently and safely to avoid creating new incidents.

> [!TIP]
> While DevOps and SRE focus on automation and speed, ITIL provides a structured language for service ownership and lifecycle management that is valuable in large organizations.

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

### Recommended Practices (DO)

| Action | Why & Example |
|---|---|
| **1. Activate a Single Incident Commander Immediately** | **Why**: Reduces decision paralysis, prevents duplicated work, maintaining clear authority. <br> ✅ **Good**: "Sarah is incident commander. Engineering, start diagnostics." <br> ❌ **Bad**: "Everyone jump in. Let's discuss options." |
| **2. Establish Clear Communication Channels (War Room)** | **Why**: Prevents information silos, ensures everyone sees decisions, reduces repeated questions. <br> ✅ **Good**: War room bridge line with all stakeholders; live Slack updates. <br> ❌ **Bad**: Side conversations between PMs/Execs siphoning information. |
| **3. Notify Customers Early** | **Why**: Reduces panic, builds trust, gives customers action items if needed. <br> ✅ **Good**: "We detected an issue at 2:15 PM. Estimated update in 15 minutes." <br> ❌ **Bad**: Silence for 30 minutes; customers assume the worst. |
| **4. Separate Investigation From Resolution** | **Why**: Faster recovery; resolution time stays independent of deep root cause learning. <br> ✅ **Good**: Ops team rolls back deployment (5 min fix) while SRE team investigates. <br> ❌ **Bad**: Wait for full root cause analysis before rolling back. |
| **5. Document Timeline During Incident** | **Why**: Prevents false memories, speeds postmortem, creates accurate record for learning. <br> ✅ **Good**: Dedicated scribe in war room log events in real-time. <br> ❌ **Bad**: Recreate timeline from memory days later. |
| **6. Conduct Blameless Postmortems Within 48 Hours** | **Why**: Fresh memories, captures learning while clear, builds psychological safety. <br> ✅ **Good**: "Test coverage was insufficient. We'll add tests. No blame for the author." <br> ❌ **Bad**: "John deployed bad code. John is an idiot." |

### Practices to Avoid (DON'T)

| Action | Why & Example |
|---|---|
| **1. Wait for Perfect Information Before Acting** | **Why**: Business impact compounds every minute; temporary fix + investigation is faster. <br> ✅ **Good**: Roll back latest change (2 min fix) while investigating queries. <br> ❌ **Bad**: "We can't fix anything until we know exactly what's wrong." |
| **2. Focus on Who Made the Mistake** | **Why**: Blame culture hides incidents, prevents learning, and damages trust. <br> ✅ **Good**: "Deploys are manual. We'll automate the process." <br> ❌ **Bad**: "Sarah made a typo. We should fire or restrict her access." |
| **3. Assume Single Root Cause** | **Why**: Multiple contributing factors exist; patching one thing rarely prevents recurrence. <br> ✅ **Good**: Identifying query change + monitoring gap + replica misconfig. <br> ❌ **Bad**: "Root cause: Query was slow. We'll rewrite the query." |
| **4. Close Postmortem Without Action Items** | **Why**: Action items without owners disappear; improvements slip; same incident recurs. <br> ✅ **Good**: "Alex will implement alerts by Friday. Sarah will add tests by next Wed." <br> ❌ **Bad**: "We should improve monitoring someday." |
| **5. Keep Postmortems Internal** | **Why**: Organization learns from the incident; same mistakes prevented across multiple teams. <br> ✅ **Good**: Share postmortem in Slack; discuss in engineering all-hands. <br> ❌ **Bad**: Postmortem stays in a closed email thread. |
| **6. Confuse Severity With Blame** | **Why**: Blame discourages honesty; high-severity incidents often reveal systemic gaps. <br> ✅ **Good**: Severity-1 review asks "what system failed?" with same blamelessness. <br> ❌ **Bad**: "This was critical. Someone's head will roll." |
| **7. Ignore "Near-Misses"** | **Why**: Free lessons; reveal systemic weaknesses without the cost of a full outage. <br> ✅ **Good**: "Primary DB failed, secondary took over. Investigate why primary failed." <br> ❌ **Bad**: "No one noticed, so it doesn't matter." |
| **8. Communicate in Siloes** | **Why**: Leads to conflicting customer communications and executive panic. <br> ✅ **Good**: Shared status page or automated Slack updates for all stakeholders. <br> ❌ **Bad**: Engineers fixing issue while Support tells customers "everything is fine." |
| **9. Skip Postmortem for "Simple" Fixes** | **Why**: "Simple" fixes often mask complex underlying issues that will recur. <br> ✅ **Good**: "We restarted the server, but we'll review why it ran out of memory." <br> ❌ **Bad**: "Just restart it and move on. It happens." |

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
- **Snowden, D. J., & Boone, M. E. (2007)**: "A Leader’s Framework for Decision Making." *Harvard Business Review*. (The foundational Cynefin paper).
- **Weick, K. E., & Sutcliffe, K. M. (2001)**: *Managing the Unexpected: Assuring High Performance in an Age of Complexity*. Jossey-Bass.
- **Hollnagel, E. (2014)**: *Safety-I and Safety-II: The Past and Future of Safety Management*. Ashgate Publishing.
- **Vaughan, D. (1996)**: *The Challenger Launch Decision: Risky Technology, Culture, and Deviance at NASA*. University of Chicago Press.
- **Dekker, S. (2014)**: *The Field Guide to Understanding Human Error*. Ashgate. (Critique of "human error" as a root cause).

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