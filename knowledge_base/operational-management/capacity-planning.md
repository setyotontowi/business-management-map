# CAPACITY PLANNING: Comprehensive Framework Guide

## Overview

Capacity Planning is the process of determining what resources (servers, engineers, database connections, bandwidth, etc.) an organization needs to meet current and future demand, while optimizing for cost and performance. In tech/SaaS environments, capacity planning is uniquely challenging: demand is variable and unpredictable, growth is exponential, infrastructure is elastic (scaling can happen in minutes), and costs scale with usage. Poor capacity planning results in either service degradation (insufficient capacity) or wasted spending (excessive capacity). Good capacity planning enables growth without crisis firefighting.

**Why It Matters in Tech/SaaS:**
- **Exponential growth**: What's adequate today is inadequate next quarter; static planning fails
- **Cost is consumption-linked**: Provisioning 10x more than needed 10x your cloud bill; provisioning too little causes outages
- **Speed of change**: You can scale infrastructure in minutes, but business decisions about capacity take weeks; timing matters
- **User experience is fragile**: Even small latency increases cause user dissatisfaction; capacity directly affects performance
- **Unpredictability is normal**: User growth, feature adoption, and traffic patterns are hard to predict; good planning accommodates uncertainty

**Scope:** This guide covers capacity planning fundamentals, frameworks for forecasting and provisioning, strategic models for cost-performance trade-offs, and practical implementation in tech/SaaS environments.

---

## PART 1: BASIC KNOWLEDGE & FRAMEWORKS

### 1.1 What is Capacity Planning?

**Definition:**
Capacity Planning is the systematic process of determining: (1) what demand will be (forecasting), (2) what resources are needed to meet that demand at acceptable performance (provisioning), and (3) how to manage the gap between current capacity and future demand (execution).

**Three Core Questions:**
1. **What will demand be?** (Forecasting)
2. **What resources do we need for that demand?** (Provisioning)
3. **When do we need them?** (Timing)

**Key Metrics in Tech/SaaS:**

| Metric | Definition | Example |
|---|---|---|
| **Demand** | Volume of work the system must handle | Requests per second (RPS), concurrent users, data processed/day |
| **Capacity** | Maximum work the system can handle at acceptable performance | 10K RPS at <200ms latency |
| **Utilization** | Percentage of capacity being used | Currently at 7K RPS = 70% utilization |
| **Headroom** | Buffer between current demand and capacity | 30% headroom = room to grow before upgrading |
| **Lead Time** | Time to provision new resources | AWS auto-scaling: 2 minutes; hiring engineers: 3 months |
| **Cost per Unit** | Price of one unit of capacity | $100/month for 1K RPS cloud capacity |

**Why Capacity Planning is Hard in Tech/SaaS:**
- **Demand is variable**: Day/night patterns, seasonal peaks (Black Friday, tax season), unexpected viral growth
- **Growth is exponential**: Today's 1K RPS might be 10K RPS in 6 months; linear forecasts fail
- **Uncertainty is high**: Predicting user growth, feature adoption, or viral moments is nearly impossible
- **Trade-offs are complex**: More headroom = better performance but higher cost; less headroom = lower cost but risk of outages
- **Infrastructure has different lead times**: Cloud auto-scaling (minutes) vs. hiring (months) vs. building features to reduce load (weeks)

---

### 1.2 Core Frameworks: Four Capacity Planning Models

#### Framework 1: The Demand Forecasting Model (How to Predict)

**Method 1: Historical Growth Extrapolation**
- Look at past growth rate; assume it continues
- **Formula**: Future Demand = Current Demand × (1 + Growth Rate)^Time
- **Example**: 1K RPS, 10% monthly growth → 1K × 1.1^3 = 1.33K RPS in 3 months
- **Strengths**: Simple; data-driven; works for stable businesses
- **Weaknesses**: Assumes past predicts future (fails in exponential growth); doesn't account for seasonality or shocks
- **When to use**: Mature, stable products with predictable growth

**Method 2: Trend Analysis + Seasonality**
- Decompose demand into trend (long-term direction) + seasonality (repeating patterns) + noise (random variation)
- **Example**: E-commerce site has baseline trend (growing 5% monthly) + seasonal spike (holiday season 3x higher)
- **Formula**: Forecast = Trend + Seasonal Factor + Buffer for Uncertainty
- **Strengths**: Accounts for repeating patterns; more accurate than simple extrapolation
- **Weaknesses**: Requires historical data; breaks if patterns change (new product launch disrupts season)
- **When to use**: Businesses with clear seasonal patterns (retail, tax software, travel)

**Method 3: Cohort-Based Forecasting**
- Predict behavior of new user cohorts; scale by number of cohorts
- **Example**: Each month we acquire ~10K new users. New users generate 1 RPS initially; grow to 5 RPS over 6 months. Total demand = sum of all cohorts.
- **Strengths**: Accounts for growth in user base; handles changing user behavior
- **Weaknesses**: Assumes user behavior doesn't change; requires tracking cohorts separately
- **When to use**: Rapidly growing products where understanding new user behavior matters

**Method 4: Capacity-Constrained Forecasting**
- Use business goals to reverse-engineer demand
- **Example**: "We want to serve 1M users by year-end. Each user generates 100 requests/day. Need 1B requests/day = 11.5K RPS."
- **Strengths**: Aligns forecasting with strategy; forces clarity about targets
- **Weaknesses**: Assumes business goals are realistic; doesn't account for actual market conditions
- **When to use**: Early-stage companies with ambitious targets; planning for new products

**Practical Approach:** Use multiple methods; compare results. If they align, confidence is high. If they diverge, investigate why.

---

#### Framework 2: The Utilization Model (How to Provision)

**Concept:**
Utilization = Current Demand / Maximum Capacity. The question: what utilization is safe?

**Safe Utilization Levels:**

| Utilization Level | Context | Reason |
|---|---|---|
| **30-50%** | Critical systems, zero-downtime requirement | Lots of headroom for demand spikes; acceptable cost premium |
| **50-70%** | Normal product environments | Balance of cost efficiency and safety; typical for SaaS |
| **70-80%** | Cost-optimized, predictable demand | Lower cost; higher risk of bottlenecks; works if demand is stable |
| **>80%** | Not recommended for capacity planning | Too little headroom; small demand increase causes degradation |

**Why 50-70% is Standard:**
- **Below 50%**: Wasting money (paying for unused capacity)
- **50-70%**: Comfortable margin; unexpected spikes handled; cost-efficient
- **70-80%**: Getting risky; normal variance in demand can hit limits
- **>80%**: Crisis mode; constant monitoring needed; small mistake causes outage

**The Utilization Curve:**
As you approach capacity, performance degrades non-linearly:
- 70% utilization: acceptable performance; minor latency increase
- 80% utilization: noticeable latency; user experience begins degrading
- 85% utilization: significant degradation; errors may occur
- 90%+: systems stressed; queuing; potential failures

**Example (Database CPU):**
- Current: 5K RPS, consuming 50% CPU (safe)
- Next quarter: Expect 7K RPS (+40% growth)
- At 7K RPS, CPU will be 70% (good; acceptable)
- Provision for: 10K RPS (100% safe headroom)
- Cost trade-off: Pay now for 10K RPS capacity; use 7K initially; headroom buys safety

---

#### Framework 3: The Bottleneck Analysis Model (What Constrains You)

**Concept:**
Every system has bottlenecks—the single constraint limiting throughput. Capacity planning means identifying and removing bottlenecks in sequence.

**Common Bottlenecks in Tech/SaaS:**

| Bottleneck | Indicator | Fix |
|---|---|---|
| **Database** | CPU or query latency high; throughput plateaus | Index queries, denormalize, shard, read replicas |
| **Network I/O** | Bandwidth near limit; latency increases with load | Optimize data serialization, cache, compress |
| **Memory** | Memory usage high; garbage collection pauses | Optimize memory usage, cache aggressively, increase RAM |
| **CPU** | CPU utilization > 80%; latency increases linearly with load | Optimize code, parallelize, increase instances |
| **Disk I/O** | Disk operations slow; throughput limited by I/O | SSD vs HDD, optimize queries, reduce writes |
| **Concurrency Limits** | Connection pooling maxed; queue building | Increase pool size, connection reuse, load balancing |

**How to Identify:**
1. Monitor metrics under load (synthetic testing or production)
2. Which metric hits limit first under increasing load?
3. That's your bottleneck

**Example:**
- Load test: increase RPS from 1K to 5K
- Database CPU goes: 10% → 50% (linear, healthy)
- Database latency goes: 10ms → 50ms (increasing, concerning)
- API response time goes: 15ms → 80ms (too high)
- **Bottleneck**: Database latency limiting throughput

**Strategy: Fix in Sequence**
1. Identify current bottleneck
2. Remove it (scale, optimize, redesign)
3. Retest; new bottleneck emerges
4. Repeat

**Why this matters:** Scaling the wrong resource wastes money. If database is the bottleneck, adding more application servers helps nothing. Identifying the actual bottleneck focuses investment.

---

#### Framework 4: The Cost-Performance Trade-off Model (How to Balance)

**Concept:**
More capacity = higher cost; less capacity = higher performance risk. This framework helps decide where to sit on that curve.

**The Trade-off Curve:**

```
High Cost (Overprovisioned)
    |
    |  More headroom = safer = higher cost
    |     (10K RPS capacity for 5K RPS demand)
    |
    | OPTIMAL ZONE (50-70% utilization)
    |     (7K RPS capacity for 5K RPS demand)
    |
    | Less headroom = riskier = lower cost
    |     (5.5K RPS capacity for 5K RPS demand)
    |
Low Cost (Underprovisioned)
```

**Decision Framework:**

| Factor | Decision Point |
|---|---|
| **Cost sensitivity** | If cost is critical (margins tight), run at 60-70% utilization; accept some risk |
| **Downtime cost** | If downtime is expensive (lost revenue), run at 40-60% utilization; pay for safety |
| **Demand predictability** | If demand is predictable, can run hotter (70%); if variable, need more headroom (50%) |
| **Auto-scaling capability** | If infrastructure auto-scales (cloud), can run hotter; if manual scaling, need headroom |
| **Reputation risk** | If downtime damages reputation, run cool (40-60%); if outages are recoverable, run hotter |

**Example:**

Company A (E-commerce, holiday season):
- Peak demand is 20x normal during Black Friday
- Auto-scaling is available but can't respond fast enough to lightning-spike
- Downtime during peak costs $1M/minute
- **Decision**: Provision for 5x normal demand (50% utilization normal time); sacrifice cost for safety during peak

Company B (Analytics tool, predictable workload):
- Demand grows 10% monthly, very predictable
- Downtime costs $10K (data refreshes next day anyway)
- Auto-scaling is fast and reliable
- **Decision**: Provision for 70% utilization; run hot; re-scale monthly; optimize for cost

---

### 1.3 Strategic Models: Capacity Planning by Growth Stage

#### Model 1: Capacity Planning in Growth Stage (Startup → Scale-up)

**Stage 1: Early Growth (Months 0-6 after launch)**
- **Characteristics**: Exponential growth; unpredictable; infrastructure is small
- **Challenge**: Doubling every month; static capacity planning is useless
- **Strategy**: 
  - Provision for 3-6 months out
  - Use auto-scaling aggressively (cloud resources, not fixed infrastructure)
  - Monitor metrics obsessively
  - Expect to be capacity-constrained occasionally (acceptable; cost-efficient)
- **Failure mode**: Underestimate growth; outages become common; lose users

**Stage 2: Rapid Growth (6-18 months)**
- **Characteristics**: Still growing fast (50-100% annually) but becoming more predictable
- **Challenge**: Growth is fast but slowing; forecasting becomes possible
- **Strategy**:
  - Plan 12 months out; break into quarters
  - Begin hiring ops/SRE team (they become bottleneck, not infrastructure)
  - Invest in monitoring and alerting
  - Identify and fix bottlenecks proactively
- **Failure mode**: Become bottleneck in hiring; ops team can't keep pace

**Stage 3: Scaling (18+ months)**
- **Characteristics**: Predictable growth (20-50% annually); infrastructure becomes complex
- **Challenge**: Coordination across multiple systems (database, cache, APIs, etc.)
- **Strategy**:
  - Formal capacity planning process (quarterly reviews)
  - Headroom targets (50-70% utilization)
  - Focus on cost optimization (cloud reserved instances, volume discounts)
  - Anticipate bottlenecks; plan fixes 6+ months ahead
- **Failure mode**: Lack of coordination; bottlenecks cascade; expensive panic scaling

#### Model 2: Capacity Planning by Infrastructure Layer

**Application Layer (Web servers, APIs)**
- **Lead time**: Minutes to hours (cloud auto-scaling)
- **Approach**: Auto-scale; don't pre-provision
- **Headroom needed**: 20-30% (system can scale fast)
- **Cost impact**: Medium (scales with demand)

**Database Layer (Database servers, connections)**
- **Lead time**: Hours to days (replication takes time; migration is careful)
- **Approach**: Pre-provision with headroom; upgrade before hitting limits
- **Headroom needed**: 50%+ (slow to scale; can't add replicas instantly)
- **Cost impact**: High (often largest cost)
- **Example**: At 70% utilization, plan upgrade. At 80%, you're in trouble.

**Cache Layer (Redis, Memcached)**
- **Lead time**: Minutes to hours (can add nodes quickly)
- **Approach**: Monitor eviction; scale before hitting memory limit
- **Headroom needed**: 30-40% (memory can't be expanded; need fresh capacity)
- **Cost impact**: Low (usually <10% of total)

**Storage (Object storage, file storage)**
- **Lead time**: Days (grows slowly; space is predictable)
- **Approach**: Monitor growth trends; provision well ahead
- **Headroom needed**: 20-30% (space grows slowly; easy to predict)
- **Cost impact**: Medium (depends on access patterns)

**Key Insight:** Different layers have different lead times. Database is slowest (most headroom needed); application is fastest (least headroom needed).

---

## PART 2: MAJOR COMPANY CASE STUDIES

### 2.1 Netflix: Capacity Planning in Streaming (Predictable + Seasonal)

**The Story:**
Netflix faced exponential growth while operating in a capital-intensive business (content rights, global infrastructure, peak-time capacity). They needed to handle North American peak capacity (millions of concurrent streams on Friday evenings) while remaining cost-efficient. Unlike tech startups, Netflix couldn't just "spin up servers"—they had to plan months ahead and negotiate with cloud providers.

**The Challenge:**
- **Massive baseline demand**: 50M+ subscribers globally
- **Extreme peaks**: 10x load difference between 3 AM and 8 PM
- **Predictable seasonality**: Holiday periods are 30% higher than baseline
- **Long planning lead time**: Negotiating cloud capacity for peak requires 6+ month planning
- **Cost sensitivity**: Streaming margins are thin; every percentage point of efficiency matters

**What They Did:**

1. **Sophisticated demand forecasting**:
   - Cohort analysis: New subscribers watch more initially; then stabilize
   - Seasonal models: Holiday periods forecast specifically
   - Content-driven peaks: Major releases drive additional load
   - Regional models: Different time zones have different peak patterns

2. **Utilization optimization**:
   - Peak periods: 80-90% utilization (acceptable because auto-scaling can't help; peak is predictable)
   - Off-peak periods: 30-40% utilization (waste is acceptable because peak coverage is critical)
   - Overall annual: ~50% (balanced cost and safety)

3. **Multi-year negotiations**:
   - Negotiate cloud capacity commitment 6+ months ahead
   - Lock in prices during off-peak; reserve capacity during peak
   - Run calculations: "What if our forecast is wrong by 20%?" (build in uncertainty)

4. **Continuous optimization**:
   - Video encoding optimization: More efficient encoding = less bandwidth
   - Content delivery: Cached content closer to users = less backbone capacity
   - Adaptive bitrate: Lower bitrate during peak = less bandwidth needed

**Result:**
- Handled 10x+ growth without outages (1 million → 200+ million subscribers)
- Maintained <2% cache miss rate (efficient delivery)
- Streaming quality remained consistent (despite peak load)
- Cost per stream decreased as they scaled (efficiency gains)

**Key Lessons:**
1. **Accept peak utilization if necessary**: Netflix runs hot during peak because they have no choice; plan for safety but accept efficiency trade-offs
2. **Forecasting sophistication pays off**: Accurate forecasting prevents emergency scaling and over-provisioning
3. **Long lead times require long planning**: Negotiating cloud capacity 6+ months ahead enabled growth without crisis
4. **Different utilization targets by context**: Peak periods have different targets than normal periods
5. **Optimization matters at scale**: 1% efficiency gain across global infrastructure = millions in savings

---

### 2.2 Stripe: Capacity Planning for Payment Processing (High Stakes + Predictable)

**The Story:**
Stripe processes billions in payments annually. Downtime = customer transactions fail = legal liability and lost trust. They needed to provision for absolute reliability (never drop payment due to capacity) while remaining cost-efficient. Unlike Netflix, Stripe couldn't have "acceptable peak utilization of 90%"—they needed near-zero risk of capacity issues.

**The Challenge:**
- **Zero tolerance for outages**: Payment failures are not acceptable
- **Highly variable traffic**: Black Friday, launch days, or partner campaigns spike traffic unexpectedly
- **Regulatory requirements**: Some jurisdictions require data redundancy and failover capacity
- **Financial impact of latency**: 1 second slower payment processing = measurable customer defection
- **Complex infrastructure**: Multiple payment processors, banks, and systems must coordinate

**What They Did:**

1. **Conservative capacity planning**:
   - Target: 40% utilization during normal times (leaves massive headroom)
   - Reason: Need to handle 2-3x traffic spikes without degradation
   - Accepted cost: Paying for capacity they won't use most of the time

2. **Sophisticated monitoring**:
   - Track latency percentiles (p50, p95, p99, p99.9)
   - Alert when p99 latency increases (early warning)
   - Don't wait until system is 90% utilized to scale

3. **Multi-region redundancy**:
   - Every system replicated across 3+ regions
   - Can route traffic between regions if one becomes constrained
   - Capacity planning per region: 50% utilization (can lose one region and stay safe)

4. **Load-aware routing**:
   - Route customers to least-loaded systems
   - Prevents hot spots; keeps utilization balanced
   - Adds complexity but ensures utilization headroom matters

5. **Graceful degradation**:
   - If capacity reached, fail safely (queue payment for later processing)
   - Don't reject payment or lose data
   - Retry with exponential backoff

**Result:**
- Stripe processed trillions in payments with 99.99%+ uptime
- Handled sudden 5-10x traffic spikes (viral products, Black Friday) without outages
- Payment latency remained <100ms even during extreme traffic
- Trust reputation: Stripe is known as reliable payment processor

**Key Lessons:**
1. **Nature of business determines utilization targets**: Payments require conservative provisioning; entertainment can run hotter
2. **Redundancy costs money but buys safety**: Stripe pays for 3-5x capacity they might not use; it buys reliability
3. **Monitoring ahead of limits is critical**: Alert on latency increase at 40% utilization; don't wait until 90%
4. **Graceful degradation beats binary outages**: Queue requests instead of rejecting them
5. **Cost of outage drives provisioning strategy**: If outage costs millions, provisioning costs thousand—clear choice

---

### 2.3 Uber: Capacity Planning for Unpredictable Demand (Handling Spikes)

**The Story:**
Uber's demand is fundamentally unpredictable (unlike Netflix's) and geographically concentrated (unlike Netflix's distributed). A rainstorm in San Francisco immediately increases requests 3-5x. A major event (concert, sports game) causes local spikes. They needed to handle unexpected 5-10x surges without degrading service or wasting money on idle capacity.

**The Challenge:**
- **Unpredictable spikes**: Can't forecast when/where they'll occur
- **Geographic concentration**: Demand is not evenly distributed; some cities spike while others are normal
- **Must respond immediately**: If a rainstorm hits, capacity must scale within minutes
- **Real-time matching**: System must match drivers to riders in real-time; latency kills business
- **Extreme peaks**: 10-15x baseline load possible during major events

**What They Did:**

1. **Aggressive auto-scaling**:
   - Infrastructure auto-scales within 60-90 seconds of demand increase
   - Don't wait for utilization targets; scale proactively based on demand signals
   - Better to over-provision briefly than under-provision

2. **Demand prediction + auto-scaling**:
   - Monitor demand trends (not just current load)
   - If demand increasing, pre-scale (before utilization hits)
   - Weather APIs: When rain detected, pre-scale for rainstorm surge
   - Event databases: When major event detected, pre-scale

3. **Circuit breakers + graceful degradation**:
   - If system reaches capacity, accept requests but queue them
   - Matching algorithm becomes faster (fewer options); fewer perfect matches
   - Users see longer wait times but system doesn't break
   - Better: Long wait time + system up > No wait time + system down

4. **Regional capacity planning**:
   - Cities with predictable patterns (NYC business district): Over-provision 50%
   - Cities with extreme spikes (Las Vegas events): Over-provision 200%
   - Small cities: Can afford to have capacity issues (smaller impact)

5. **Cost acceptance**:
   - Accept that some capacity will be idle (trade-off for reliability)
   - Cost of outage (can't match drivers) > cost of idle servers
   - Optimize for availability first, cost second

**Result:**
- Handled 10x demand spikes without major outages
- Rainstorms and major events were handled gracefully (long wait times but service available)
- Geographic coverage expanded (could provision new cities with confidence)
- Revenue protection: Availability enabled network effects and growth

**Key Lessons:**
1. **Unpredictability requires different strategies**: Predictable demand (Netflix) uses sophisticated forecasting; unpredictable demand (Uber) uses aggressive auto-scaling
2. **Demand signals matter as much as current load**: Pre-scale based on weather, events, time patterns; don't react after hitting limits
3. **Graceful degradation > binary availability**: Longer wait times acceptable; system unavailability unacceptable
4. **Cost acceptance is business decision**: If growth and network effects depend on availability, accept idle capacity cost
5. **Geographic disaggregation needed**: Plan capacity per region; don't average across geographies

---

### 2.4 Twitter: The "Fail Whale" Lesson (What Happens Without Capacity Planning)

**The Story (Cautionary Tale):**
Early Twitter experienced rapid growth faster than infrastructure could scale. From 2006-2009, Twitter frequently experienced outages. Their iconic "Fail Whale" graphic (error page) became synonymous with Twitter outages. The problem wasn't technical incompetence; it was that demand grew faster than they could provision.

**What Went Wrong:**

1. **Underestimated growth**: Exponential growth curve is hard to predict; they underestimated consistently
2. **Monolithic architecture**: Single database; single point of failure; couldn't scale parts independently
3. **Reactive scaling**: Waited until system was overloaded before scaling; always behind the curve
4. **Limited cloud capability**: Cloud wasn't mature (2006-2008); scaling required physical hardware with long lead times
5. **Technical debt**: Quick fixes and patches made system increasingly fragile; couldn't handle load
6. **No graceful degradation**: System either worked or didn't; no middle ground

**Result:**
- Frequent outages: "Twitter is over capacity" was common
- User frustration: Loss of brand reputation
- Lost monetization: Couldn't serve all traffic; missed ad revenue
- Engineering culture: Team spent all time fighting fires instead of building features

**What Changed:**

1. **Hired experienced ops/infrastructure team** (2008-2009): People who understood capacity planning
2. **Refactored architecture**: From monolithic to distributed (could scale parts)
3. **Adopted cloud infrastructure**: Shifted to cloud for faster scaling
4. **Formal capacity planning**: Quarterly reviews; forecasting process; headroom targets
5. **Graceful degradation**: If overloaded, return partial results instead of errors

**Recovery:**
- By 2010, outages became rare
- By 2012, Twitter achieved 99.9%+ uptime consistently
- Reputation recovered; growth accelerated

**Key Lessons:**
1. **Exponential growth requires planning**: Hoping infrastructure will scale is naive
2. **Architecture matters**: Monolithic systems can't scale; distributed architectures can
3. **Reactive scaling always loses**: You're always behind curve; scale proactively
4. **Graceful degradation is feature**: Don't let perfect be enemy of good; degraded service > no service
5. **Business cost of outages justifies ops team**: Twitter's lost revenue dwarfed infrastructure costs; investing in capacity planning was obvious

---

## PART 3: DO'S & DON'TS & WHY

### 3.1 DO'S (Best Practices)

#### DO 1: Use Multiple Forecasting Methods; Compare Results
**What:** Don't rely on single forecasting method; use 3-4 different approaches and compare
**How:**
- Historical extrapolation (simple trend)
- Trend + seasonality decomposition
- Cohort-based analysis (if applicable)
- Business-goal-based (reverse-engineer from targets)
**Why It Works:** Different methods catch different errors. If all methods agree, confidence is high. If they diverge, disagreement highlights areas of uncertainty worth investigating.
**Example:**
- Method 1: Historical 10% monthly growth → 5K RPS in 3 months
- Method 2: Trend + seasonal → 4.8K RPS in 3 months (accounting for off-season)
- Method 3: Cohort analysis → 5.2K RPS in 3 months
- Methods agree (4.8-5.2K range); provision for 5.5K (safe headroom)

---

#### DO 2: Set Explicit Utilization Targets by Infrastructure Layer
**What:** Different layers have different optimal utilization; define targets explicitly
**How:**
- Application layer: 50-70% (auto-scales fast)
- Database layer: 40-50% (slow to scale; needs headroom)
- Cache layer: 60-80% (can add capacity quickly)
- Storage layer: 40-60% (slow growth; predictable)
- Document targets; review quarterly
**Why It Works:** Prevents over-provisioning some layers and under-provisioning others. Clear targets drive consistent decisions.
**Example:**
- "We run app servers at 60% utilization; database at 45%; cache at 70%"
- Clarifies expectations; prevents accidental over-spending
- Makes tradeoffs explicit: Database costs more but runs cooler (acceptable for bottleneck layer)

---

#### DO 3: Identify Bottlenecks Explicitly; Plan Fixes Before Hitting Limit
**What:** Don't wait until system is at 80% utilization; identify bottleneck at 60% and plan fix
**How:**
- Load test regularly (quarterly or after major changes)
- Measure all resources (CPU, memory, I/O, connections, disk)
- Which resource hits limit first? That's bottleneck
- Plan fix 6+ months ahead if long lead time (hiring, redesign)
- Plan fix 1-2 months ahead if short lead time (optimization, adding capacity)
**Why It Works:** Proactive fixes prevent crises. Reactive fixes are expensive and risky.
**Example:**
- Q1 testing: Database CPU is bottleneck; hits 80% at 8K RPS
- Current demand: 5K RPS; safe today
- Plan: Add read replicas (2 months), optimize queries (1 month)
- Completion: Q2 database handles 12K RPS; new bottleneck emerges (plan next fix)

---

#### DO 4: Build Headroom; Don't Run Systems Hot
**What:** Provision for 50-70% utilization, not 90%; accept cost of headroom as safety premium
**How:**
- Target utilization: 50-70% for normal systems
- Emergency headroom: 20% additional for unexpected spikes (total: 70-80% max)
- Regularly review: If average utilization trending toward 70%, plan upgrade
- Cost trade-off: Accept 30-50% idle capacity; better than outages
**Why It Works:** Systems degrade non-linearly as they approach capacity. Small increase in load near 90% causes large increase in latency. 50-70% utilization keeps systems in linear performance zone.
**Example:**
- Database at 50% utilization: 10ms latency
- Database at 70% utilization: 12ms latency (small increase; acceptable)
- Database at 85% utilization: 30ms latency (large increase; users notice)
- Provision for 70%; never approach 85%

---

#### DO 5: Plan for Uncertainty; Stress-Test Against Worst-Case
**What:** Forecasts are wrong; plan for errors
**How:**
- Forecast demand: X
- Add uncertainty buffer: 20-50% (depends on forecast confidence)
- Stress-test for worst-case: 2x demand, 10x peak, cascading failures
- Provision for forecast + uncertainty, not average case
- Regularly review: Was forecast off? Adjust next time
**Why It Works:** Demand is unpredictable. Plans based on average fail when actual demand is worse. Plans based on worst-case succeed even when surprised.
**Example:**
- Forecast: 6K RPS
- Uncertainty buffer: 30% (forecast confidence is medium)
- Provision for: 7.8K RPS
- If actual is 6K (forecast was good): running at 77% (safe)
- If actual is 7K (forecast was low): running at 90% (tight but okay)
- If actual is 5K (forecast was high): running at 64% (safe, no waste)

---

#### DO 6: Monitor Metrics That Predict Bottlenecks (Not Just Current Load)
**What:** Monitor utilization AND latency AND error rate; latency rises before crashes
**How:**
- Alert on utilization at 70% (early warning)
- Alert on latency increase (system is struggling)
- Alert on error rate increase (system reaching limits)
- Alert on queue depth (requests backing up)
- Don't wait for availability to drop before reacting
**Why It Works:** Latency and errors are leading indicators; availability is lagging indicator. React early.
**Example:**
- Utilization at 75%: OK, still within headroom
- Latency p99 at 300ms (was 50ms): ALERT, system struggling
- Message: "Load expected to exceed capacity in 24 hours; scale now"
- Result: Scale before hitting crisis

---

#### DO 7: Plan Different Lead Times for Different Infrastructure
**What:** Build schedules based on actual lead times; don't treat everything the same
**How:**
- Database scaling: 6+ months ahead (redesign, sharding, migration)
- Major features (reduce load): 3-6 months (design, implementation, testing)
- Optimization (improve efficiency): 1-3 months (focused work)
- Cloud capacity (add servers): 1-2 months (negotiation, provisioning)
- Auto-scaling (dynamic): 0-30 minutes (already in place)
**Why It Works:** Mismatched timeline causes panic. Knowing actual lead times prevents surprises.
**Example:**
- Current database utilization: 60%
- Growth rate: +20% quarterly
- At current rate: 80% in 6 months
- Database redesign takes 6 months
- **Action**: Start redesign immediately; it will complete just as utilization approaches limit
- **Result**: Smooth transition; no crisis

---

#### DO 8: Align Capacity Planning With Product Roadmap
**What:** Coordinate with product team; capacity planning should influence product decisions
**How:**
- Product considering expensive feature? Capacity impact?
- Major marketing campaign coming? Brief capacity team (3+ months ahead)
- New geographic expansion? Plan capacity simultaneously
- New customer segment? Understand their load profile
- Product team should consult capacity; capacity should consult product
**Why It Works:** Product and infrastructure often plan independently; when they collide, surprises happen. Early alignment prevents crises.
**Example:**
- Product plans major feature launch; marketing plans $10M spend on ads
- Without coordination: Feature launches; ads drive 5x traffic; system overloads
- With coordination: Capacity team provisions 6 months ahead; system handles load smoothly

---

### 3.2 DON'T'S (Common Mistakes)

#### DON'T 1: Extrapolate Linear Growth in Exponential Environment
**Mistake:** Using simple linear extrapolation in company with exponential growth; always underestimate
**Why It Happens:** Linear forecasts are simplest; easy to understand; seem reasonable
**Why It Fails:** Exponential growth is counterintuitive; doubling every 6 months is hard to wrap head around. Plans based on linear growth are always behind reality.
**What to Do Instead:** Identify growth rate explicitly. "We're doubling every 6 months" → use exponential model. Compare forecast to historical growth; if consistently underestimating, adjust.
**Example (Bad):** "Last year we grew from 1K to 2K RPS. This year probably 2K to 3K." (Linear thinking; actually grows to 4K)
**Example (Good):** "We're doubling every year. So 2K → 4K → 8K." (Exponential model; matches reality)

---

#### DON'T 2: Run Systems at >80% Utilization for Extended Period
**Mistake:** Operating at 85-95% utilization thinking system is "efficient"; ignoring performance degradation
**Why It Happens:** Cost pressure; desire to minimize waste; ignorance of non-linear degradation
**Why It Fails:** At 85% utilization, system enters danger zone. Small load increase causes large latency increase. User experience suffers. Outages become likely.
**What to Do Instead:** Target 50-70% utilization. If cost is critical, 70% is acceptable. >80% is crisis-mode; justify it with specific business need (peak traffic only).
**Example (Bad):** "We're running at 85% utilization; very efficient." Latency triples when load increases 10%. User experience suffers.
**Example (Good):** "We're running at 65% normal time. During peaks, we scale to 80% briefly. Crisis-only go to 90%."

---

#### DON'T 3: Forecast Without Understanding What Drives Demand
**Mistake:** Extrapolating demand trends without understanding what's causing them; miss inflection points
**Why It Happens:** Lazy forecasting; just plot historical data and extrapolate
**Why It Fails:** If driver of demand changes (new product launches, competitor enters, market shifts), extrapolation breaks. Forecast becomes useless.
**What to Do Instead:** Understand drivers. "Growth due to new customer acquisition? Increased usage per customer? New geographic market? Feature adoption?" Different drivers have different futures.
**Example (Bad):** "We grew 30% last year; assume 30% this year." If growth due to marketing spend, and marketing budget stays same, forecast is right. If growth due to viral feature, and adoption plateaus, forecast is wrong.
**Example (Good):** "Growth is 50% new customers (acquisition marketing) + 20% increased usage per customer (feature adoption). Marketing budget constant. Usage growth slowing. Revised forecast: 35% total growth."

---

#### DON'T 4: Ignore Seasonal Demand; Fail to Plan for Peaks
**Mistake:** Averaging demand across year; under-provisioning for seasonal peaks
**Why It Happens:** Simplicity; desire to minimize cost; lack of data analysis
**Why It Fails:** During peak season (holiday, tax season, quarter-end), system overloads. Revenue opportunity missed or lost to competitors.
**What to Do Instead:** Identify seasonality; forecast peaks; provision separately for peak vs. normal.
**Example (Bad):** "Average demand is 5K RPS; provision for 5.5K." During holiday season (3x baseline), system at 300%+ utilization; crashes.
**Example (Good):** "Baseline 5K RPS; holiday season 3x = 15K RPS. Provision for 17K capacity (headroom). Run at 5K most of year; scale up for peak."

---

#### DON'T 5: Treat All Capacity Layers the Same; Ignore Different Lead Times
**Mistake:** Applying same planning horizon to all infrastructure; some scale fast, some don't
**Why It Happens:** Laziness; lack of understanding of infrastructure; unified planning system
**Why It Fails:** Database redesign takes 6 months; auto-scaling takes 5 minutes. Can't use same planning timeline for both. Database bottleneck goes unaddressed while app servers are over-provisioned.
**What to Do Instead:** Classify infrastructure by lead time. For each, use appropriate planning horizon. Database: 6-12 months. Optimization: 1-3 months. Auto-scaling: 0-30 minutes.
**Example (Bad):** "We have 3-month capacity planning cycle." Database capacity runs out; new design needed; takes 6 months. Gap: 3 months under capacity. Crisis.
**Example (Good):** "Database on 12-month cycle; optimization on 3-month cycle; auto-scaling on 2-week cycle." Each planned with appropriate lead time.

---

#### DON'T 6: Scale Only Horizontally; Ignore Vertical Scaling + Optimization
**Mistake:** Buying more servers instead of optimizing code/database; scaling without improving efficiency
**Why It Happens:** Scaling is easiest; doesn't require code changes; feels fast
**Why It Fails:** Cost compounds; each 2x increase in demand requires 2x more servers. Eventually uneconomical. Better to optimize: 50% improvement in efficiency = 50% less servers needed.
**What to Do Instead:** Balance horizontal (more servers) with vertical (bigger servers) and diagonal (optimization). Start with optimization; move to scaling when necessary.
**Example (Bad):** Each feature added requires more servers. After 3 years, infrastructure bill is 10x original. Unoptimized code and queries are 2x inefficient.
**Example (Good):** Feature added → check if optimization can accommodate. Usually can (5-10% efficiency gain). Only scale if growth unsustainable. Review queries, caching, algorithms quarterly.

---

#### DON'T 7: Rely Solely on Auto-Scaling; Don't Plan Stateful Systems
**Mistake:** Assuming auto-scaling solves capacity problem; forgetting that some resources don't auto-scale
**Why It Happens:** Cloud marketing emphasizes auto-scaling; seems like magic solution
**Why It Fails:** Stateful systems (databases, caches, message queues) can't auto-scale instantaneously. Adding database replica takes minutes; replicating data takes hours. Auto-scaling apps can't help if database is bottleneck.
**What to Do Instead:** Identify auto-scalable vs. non-auto-scalable. For non-auto-scalable, over-provision. For auto-scalable, provision minimally; let scaling handle growth.
**Example (Bad):** "Auto-scaling handles everything." Database hits 90% CPU; auto-scaling adds more app servers (useless). Database remains bottleneck.
**Example (Good):** "App layer auto-scales (minutes lead time). Database pre-provisioned (hours to scale). Cache has headroom (can scale minutes). Each layer planned appropriately."

---

#### DON'T 8: Skip Load Testing; Plan Based on Theory Not Reality
**Mistake:** Forecasting capacity needs without actually testing systems under load
**Why It Happens:** Load testing is work; takes time; requires infrastructure
**Why It Fails:** Theoretical capacity ≠ actual capacity. Single bottleneck not obvious until tested. Surprises in production are expensive and painful.
**What to Do Instead:** Load test quarterly (or after major changes). Measure actual throughput and latency. Use test results to refine forecast and identify bottlenecks.
**Example (Bad):** "Database should handle 10K RPS based on specifications." Deploy to production; at 7K RPS, latency spikes to 500ms (unexpected). Outage.
**Example (Good):** Load test: "At 10K RPS, database latency is 200ms (unacceptable). Database is bottleneck. Current capacity: 8K RPS. Provision for 10K."

---

### 3.3 Why These Rules Exist (Deeper Reasoning)

**The Exponential Growth Trap:**
Most people's intuitions are based on linear experience (linear job growth, linear salary growth). Exponential growth (common in tech) breaks linear intuitions. Company doubling every year feels "normal pace" but requires infrastructure planning to be 12 months ahead constantly. Most capacity planning failures are due to underestimating exponential growth.

**The Non-Linear Performance Curve:**
Systems have a critical point around 70-80% utilization where performance becomes non-linear. Below 70%, doubling load increases latency 10-20%. Above 85%, doubling load increases latency 3-5x. This means provisioning strategy must have explicit margin; can't run hot and expect graceful degradation.

**The Bottleneck Principle:**
System throughput is determined by the single most constrained resource. Adding capacity to other resources is wasted investment. The key insight: identify bottleneck correctly, fix it, then identify next bottleneck. This prevents expensive over-provisioning.

**The Lead-Time Reality:**
Infrastructure has different lead times for different components. Ignoring lead times means you're always either over-provisioned (prepared too early) or under-provisioned (prepared too late). Understanding actual lead times is the key to "just right" provisioning.

**The Cost-Safety Trade-off:**
No single "optimal" utilization. It depends on:
- Business impact of outage
- Cost pressure from margin constraints
- Predictability of demand
- Speed of infrastructure scaling
- Regulatory requirements

Different companies rightly choose different points on the curve.

---

## SUMMARY TABLE: Capacity Planning Framework at a Glance

| Stage | Planning Horizon | Utilization Target | Growth Rate | Key Challenges | Infrastructure Strategy |
|---|---|---|---|---|---|
| **Early Growth** | 3-6 months | 60-80% (acceptable) | 50-100% monthly | Unpredictable; exponential | Auto-scale aggressively; accept occasional bottlenecks |
| **Rapid Growth** | 6-12 months | 50-70% | 20-50% quarterly | Coordinating teams; hiring bottleneck | Pre-provision core layers; auto-scale edges; hire ops team |
| **Scaling** | 12-24 months | 50-70% | 10-20% quarterly | Cost optimization; complexity | Formal planning process; multi-region; capacity reserves |
| **Mature** | 24+ months | 50-70% | <10% annually | Cost/performance balance; complexity | Steady-state maintenance; efficiency focus; legacy systems |

---

## RECOMMENDED READING

1. **Baron Schwartz, Peter Zaitsev, Vadim Tkachenko**: *High Performance MySQL* - practical database capacity planning and optimization; indispensable for MySQL shops

2. **Brendan Gregg**: *Systems Performance* - comprehensive guide to performance analysis; tools, methodologies, and how to identify bottlenecks

3. **Jesse Newland & Kathleen Guzman**: "Capacity Planning for GitHub" (GitHub blog) - real-world capacity planning in rapidly growing SaaS

4. **Neil Gunther**: *Analyzing Computer System Performance* - queueing theory and capacity planning mathematics; deep technical foundation

5. **John Carlos**: "Becoming Invisible: How Stripe Scales" (Stripe blog) - capacity planning philosophy at payments scale

6. **Charity Majors**: "The Three Pillars of Observability" + SRE talks - how observability enables capacity planning decisions

7. **Thomas Limoncelli & Christina Hogan**: *The Practice of Cloud System Administration* - cloud-specific capacity planning; auto-scaling, cost management

8. **Adrian Cockcroft & Chris Wanstrath**: Various talks on microservices and capacity planning - how containerization and orchestration change capacity strategy

9. **Jeff Atwood**: "Are You Getting Overloaded?" - philosophical perspective on capacity planning and performance

10. **Google Cloud Blog**: Various capacity planning case studies - real examples from large-scale systems

---

## FINAL PRINCIPLE: CAPACITY PLANNING IS A BUSINESS DECISION

Capacity planning is not purely technical; it's a business decision balancing cost, risk, and growth. The "right" answer depends on:

**Cost-sensitive businesses**: Run at 70% utilization; accept some outage risk; save cost
**Growth-focused businesses**: Run at 50% utilization; accept overhead cost; ensure growth capability
**Mission-critical services**: Run at 40% utilization; accept high cost; eliminate outage risk
**Predictable businesses**: Forecast accurately; optimize specifically; high utilization safe
**Unpredictable businesses**: Build headroom; auto-scale aggressively; prefer safety to efficiency

There is no universal "best" utilization level. The framework provides tools to make the right decision for your context.