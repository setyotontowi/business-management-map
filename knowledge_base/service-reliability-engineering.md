# SERVICE RELIABILITY ENGINEERING: Quick Reference Guide

## What It Is

Service Reliability Engineering (SRE) is a discipline that treats operations and reliability as an engineering problem. Instead of hoping systems stay up, SRE teams measure, predict, and design reliability into systems. It bridges the gap between software development (speed of change) and operations (stability), using data-driven approaches to balance innovation with reliability.

**Why It Matters:**
- **Reliability is a feature**: Downtime costs money, reputation, customer trust; reliability enables growth
- **Operations is engineering work**: Same rigor applied to code should apply to systems, monitoring, and runbooks
- **Sustainable pace**: Without SRE discipline, teams burn out on constant firefighting and on-call stress
- **Data drives decisions**: Instead of "we need better reliability," SRE says "we need to reduce latency p99 from 500ms to 200ms based on customer impact data"
- **Efficiency from clarity**: SRE principles (error budgets, blameless postmortems) reduce waste and enable faster velocity

---

## Key Dimensions

| Dimension | Meaning | Example |
|---|---|---|
| **Availability** | Percentage of time service is usable | 99.9% uptime (8.6 hours downtime/year) vs. 99.99% (52 min/year) |
| **Latency** | How fast service responds | p50 (median) vs. p99 (worst-case for 1% of requests) |
| **Error Rate** | Percentage of requests that fail | 0.1% error rate = 1 in 1000 requests fails |
| **Throughput** | Requests per second system handles | Can serve 10K req/sec at acceptable latency? |
| **Saturation** | How full is the system? | CPU at 80%, memory at 90%, network at 50% |

---

## Research Foundation

**Key Sources:**
- **Google SRE Book** (Beyer, Jones, Petoff, Murphy): Foundational framework; defines SRE culture and practices
- **John Allspaw & Tom Limoncelli**: Blameless postmortems and operational excellence
- **Charity Majors**: Observability and SRE's role in modern systems (honeycomb.io principles)
- **Will Larson**: *An Elegant Puzzle* - SRE as organizational capability

---

## Core Framework: SRE Pillars & Practices

### Pillar 1: Service Level Objectives (SLOs)
- Define reliability targets based on user needs (not "five nines")
- **SLI (Service Level Indicator)**: Measurable metric (% of requests <200ms)
- **SLO (Service Level Objective)**: Target (99.9% of requests <200ms)
- **Error Budget**: If SLO is 99.9%, you can afford 0.1% failures per month (43 minutes)
- **Use error budget**: Allows dev teams to move fast when error budget exists; forces caution when budget is consumed
- **Goal**: Align reliability targets with actual user needs (don't over-engineer)

### Pillar 2: Monitoring & Observability
- **Metrics**: System health (CPU, memory, requests/sec, error rate, latency)
- **Logs**: Detailed events showing what happened
- **Traces**: Request flow through system components
- **Alerting**: When SLO is at risk, alert immediately (not when already breached)
- **Dashboards**: Real-time view of system health for on-call engineers
- **Goal**: Know immediately when system is degrading; have data to investigate

### Pillar 3: On-Call Rotations & Incident Response
- **On-call schedules**: Engineers rotate responsibility for production issues
- **Incident response**: Rapid detection → diagnosis → remediation → postmortem
- **Runbooks**: Documented procedures for common issues (don't rely on memory)
- **Escalation paths**: Clear decision tree for when to escalate
- **Sustainable on-call**: Limit on-call burden; compensation for after-hours; no burnout
- **Goal**: Rapid response when issues occur; learning to prevent recurrence

### Pillar 4: Automation & Infrastructure
- **Infrastructure as Code**: Systems defined in code, version controlled, reproducible
- **Automated deployment**: Code merged to main branch → automatically deployed
- **Automated testing**: Tests run before deployment; catch issues before production
- **Automated remediation**: Some issues fixed automatically without human intervention
- **Goal**: Reduce manual effort; increase consistency; faster recovery

### Pillar 5: Learning & Continuous Improvement
- **Blameless postmortems**: Analyze what went wrong systemically, not who caused it
- **Knowledge sharing**: Postmortems shared widely; runbooks updated; best practices documented
- **Disaster recovery testing**: Regularly practice recovery to ensure processes work
- **Capacity planning**: Monitor growth trends; provision before hitting limits
- **Goal**: Prevent recurring issues; build organizational memory

---

## SRE vs. Traditional Ops

| Dimension | Traditional Ops | SRE |
|---|---|---|
| **Work** | Reactive (fix problems) | Proactive (prevent problems) |
| **Changes** | Resist change (stability risk) | Embrace change (enable innovation) |
| **On-Call** | "On-call forever" (burnout) | Bounded (sustainable pace) |
| **Metrics** | Uptime percentage | Error budgets + SLOs |
| **Automation** | Manual runbooks | Automated remediation |
| **Failures** | Root cause analysis (blame) | Blameless postmortems (learning) |
| **Scaling** | Add more people | Automate work |

---

## Case Study 1: Google's SRE Culture (Pioneer & Practitioner)

**What They Did:**
Google formalized SRE as a discipline in the late 1990s when scaling Gmail, Search, and other services. They defined SLOs (what reliability is good enough?), error budgets (when can we move fast vs. when must we be cautious?), blameless postmortems (how do we learn?), and automation (how do we scale without hiring forever?). SRE teams weren't separate from engineers—they were engineers focused on reliability problems.

**Result:**
- Gmail: 99.99% availability while handling explosive growth
- Search: Maintained ranking quality while indexing trillions of pages
- Incident response: Mean Time to Recovery (MTTR) measured in minutes, not hours
- Culture: Engineers felt safe reporting issues (blameless culture); postmortems became learning, not blame

**Key Lesson:**
Reliability at scale requires engineering discipline, not just hope. Defining SLOs, measuring against them, and building feedback loops (error budgets) creates incentives aligned with user needs.

**Why It Worked:**
- **SLOs grounded in user needs**: Reliability targets matched what users actually cared about
- **Error budgets enabled speed**: When error budget existed, teams deployed multiple times/day
- **Automation at scale**: Systems engineered for reliability required less manual intervention
- **Blameless postmortems**: People reported issues immediately; organization learned from failures
- **Sustainability**: SRE on-call wasn't "be on-call forever"; it was bounded (pager duty rotations)

---

## Case Study 2: Etsy's Transformation From "Moving Slowly" to "Continuous Deployment"

**What They Did:**
Etsy (2010s) had a monolithic codebase and painful deployments (weeks between releases). They transformed by adopting SRE principles: automated testing, continuous deployment (deploy multiple times/day), blameless postmortems, and monitoring. They hired SREs to work alongside engineers, not as separate operations team.

**Result:**
- Deployment frequency: From quarterly to 50+ deploys/day
- Mean Time to Recovery: From hours to minutes
- Incident detection: From customer reports to automated alerts
- Employee satisfaction: Less on-call stress, more learning culture
- Business: Faster feature velocity enabled competitive advantage

**Key Lesson:**
Organizations that fear change and do rare, big deployments have more outages and slower recovery. Organizations that deploy frequently with strong reliability practices recover faster and innovate more.

**Why It Worked:**
- **Automation reduced risk**: Automated tests meant deploys were safer, enabling frequency
- **Continuous deployment enabled learning**: Small changes make root causes obvious; big changes hide them
- **Monitoring enabled confidence**: Metrics showed whether deployment made things better or worse
- **Blameless culture**: Engineers felt safe deploying; failures were learning opportunities, not career risk
- **Alignment**: Dev teams owned reliability; weren't separate from ops

---

## Do's & Don'ts (Combined Format)

### DO 1: Define SLOs Based on User Needs, Not Arbitrary Targets
**What:** Ask "what reliability do users actually need?" not "what's the highest number we can achieve?"
**Why:** Over-engineering reliability is expensive; under-engineering causes customer impact; SLOs align incentives
**Example:**
- ✅ **Good**: "Users tolerate occasional latency spikes. SLO: 99.9% of requests <500ms. Error budget: 0.1% failures/month."
- ❌ **Bad**: "We'll target five nines (99.999%) to be safe." (Costs 10x more; users don't need it; wastes resources)

---

### DO 2: Measure Against SLOs Continuously; Use Error Budgets
**What:** Track actual reliability vs. SLO target; when error budget is consumed, pause new deployments
**Why:** Creates feedback loop; forces prioritization between speed and stability; prevents death spiral
**Example:**
- ✅ **Good**: "SLO: 99.9% availability. February: 99.5% actual. Error budget depleted. Pause new features; fix stability."
- ❌ **Bad**: "Deploy every day regardless of stability." (Deployments cause instability; cycle worsens)

---

### DO 3: Automate Runbooks; Don't Rely on Memory or Tribal Knowledge
**What:** Document common procedures (restart service, handle database failover, etc.) as code/scripts
**Why:** Reduces MTTR (Mean Time To Recovery); prevents human error; scales across team
**Example:**
- ✅ **Good**: "Database is slow. Run: `./runbooks/db_slow.sh`. Script analyzes logs, restarts if needed, pages engineers if not fixable."
- ❌ **Bad**: "Database is slow. Hope the on-call engineer remembers what to do." (Slow recovery; inconsistent)

---

### DO 4: Implement Automated Testing Before Deployments
**What:** Tests run automatically; if tests fail, deployment blocked (not deployed to production for humans to discover)
**Why:** Catches bugs in minutes (test run), not hours (customer discovery → MTTR)
**Example:**
- ✅ **Good**: "Code commit → tests run → if pass, auto-deploy; if fail, email author."
- ❌ **Bad**: "Deploy to production → rely on monitoring to catch issues." (Users discover problems first)

---

### DO 5: Conduct Blameless Postmortems Within 48 Hours
**What:** Review what happened, why systems/processes allowed it, what we'll fix (not who made the mistake)
**Why:** Psychological safety enables fast incident reporting; prevents cover-ups; builds organizational memory
**Example:**
- ✅ **Good**: "Database crashed. Postmortem: Monitoring was insufficient. We'll add alerts for disk space. No blame for engineer."
- ❌ **Bad**: "Database crashed because engineer didn't check space. Fire them." (People hide future issues; organization doesn't learn)

---

### DO 6: Limit On-Call Scope & Burden; Enable Sustainable Pace
**What:** On-call engineers have clear scope (which systems?), reasonable rotation (weekly, not constant), compensation for after-hours
**Why:** Prevents burnout; people do better work when rested
**Example:**
- ✅ **Good**: "On-call: One engineer, one week at a time. After-hours page < 2x/week average. Compensated if paged."
- ❌ **Bad**: "Everyone is on-call all the time. No compensation. People burn out." (High turnover; quality suffers)

---

### DON'T 1: Separate SRE Teams From Engineering Teams
**What:** Don't create "ops team" separate from "engineering team" (SRE must be integrated)
**Why:** Separation creates silos; engineers write code without thinking about operability; ops blames engineers
**Example:**
- ✅ **Good**: "SREs embedded in engineering teams. SRE owns reliability, engineers own features. Together they decide trade-offs."
- ❌ **Bad**: "Separate ops team responsible for uptime. Engineers just ship code." (Conflict; poor designs; burnout)

---

### DON'T 2: Pursue Infinite Reliability (Five Nines)
**What:** Don't target 99.999% uptime without understanding actual user needs or cost
**Why:** Diminishing returns; cost increases exponentially; users don't need it
**Example:**
- ✅ **Good**: "Users tolerate 1 hour downtime/year. SLO: 99.9%. Cost: manageable. Trade-off clear."
- ❌ **Bad**: "We'll target five nines." (Costs 10x more; users don't need it; maintenance burden is extreme)

---

### DON'T 3: Rely on Manual Runbooks or Memory During Incidents
**What:** Don't assume on-call engineers will remember procedures; document and automate
**Why:** Under stress, memory fails; automation is consistent and fast
**Example:**
- ✅ **Good**: "Common issue documented in runbook. Runbook executable (script). On-call runs: `./runbooks/issue.sh`. Fixed in 2 min."
- ❌ **Bad**: "Hope the on-call engineer remembers what to do from last time." (30 min investigation; inconsistent)

---

### DON'T 4: Blame Engineers for Failures; Reward Reporting
**What:** Don't punish people for causing incidents; reward them for reporting issues early
**Why:** Blame culture hides incidents; reporting culture catches issues before customer impact
**Example:**
- ✅ **Good**: "Engineer causes issue. Postmortem: Why didn't systems catch it? What monitoring/testing gaps exist?"
- ❌ **Bad**: "Engineer caused issue. Discipline them. Reduce their on-call responsibilities." (People hide issues; same problem repeats)

---

### DON'T 5: Deploy Without Testing or Monitoring
**What:** Don't deploy changes without automated tests or without monitoring to detect issues
**Why:** Untested code is unpredictable; unmonitored systems hide problems
**Example:**
- ✅ **Good**: "Code has tests. Tests pass. Monitoring alerts configured. Deploy. Metrics show health."
- ❌ **Bad**: "Deploy and hope. Monitor after users complain." (Long MTTR; customer impact)

---

### DON'T 6: Ignore Capacity Planning; Overload System Until It Breaks
**What:** Don't wait until system is at 100% capacity (broken); provision before saturation
**Why:** Systems under saturation become unpredictable; latency spikes; errors occur; recovery is harder
**Example:**
- ✅ **Good**: "Monitor capacity trends. When approaching 80%, provision more. Smooth, predictable performance."
- ❌ **Bad**: "Keep using system until it breaks. Then emergency provision." (Outages; poor customer experience; firefighting)

---

## SRE Metrics Dashboard (What to Track)

| Metric | Purpose | Action |
|---|---|---|
| **SLO Attainment** | Are we meeting reliability targets? | If missing: pause new features, prioritize fixes |
| **Error Rate** | % of requests failing | Alert if > SLO threshold; investigate root cause |
| **Latency (p50, p99)** | How fast is the service? | Alert if p99 > threshold; investigate bottlenecks |
| **Saturation** | How full is the system? (CPU, memory, disk) | Alert if approaching 80%; provision before hitting 100% |
| **MTTR** | Mean Time To Recovery | Track improvements; faster recovery = better SRE practice |
| **Deployment Frequency** | How often do we deploy? | Higher frequency = lower risk per deployment = faster iteration |

---

## Key References

- **Beyer, Jones, Petoff, Murphy**: *Site Reliability Engineering: How Google Runs Production Systems* - foundational SRE book
- **Charity Majors**: "The Three Pillars of Observability" - metrics, logs, traces for modern SRE
- **John Allspaw**: "Blameless Postmortems" - psychological safety in incident response

---

## Quick Summary

| Aspect | Key Point |
|---|---|
| **Core Goal** | Balance speed of innovation with reliability through engineering practices |
| **Key Framework** | SLOs (what), Error budgets (when to move fast), Monitoring (know what's happening), Automation (scale) |
| **Critical Principle** | Reliability targets based on user needs, not arbitrary targets |
| **On-Call Model** | Sustainable (bounded rotation, compensation), supported (runbooks, automation, alerts) |
| **Culture** | Blameless postmortems; fast incident response; continuous learning |
| **Metrics That Matter** | SLO attainment, error rate, latency, capacity, MTTR, deployment frequency |
| **Biggest Mistake** | Separating SRE from engineering; targeting infinite reliability; manual operations at scale |