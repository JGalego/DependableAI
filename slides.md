---
theme: white
transition: slide
highlightTheme: monokai
slideNumber: false
enableZoom: true
logoImg: null
title: Build AI that matters 🌱
author: João Galego
---

<style>
    .reveal h1, .reveal h2, .reveal h3, .reveal h4, .reveal h5 {
                  text-transform: none;
          }
</style>

# Build <span style='color: red'>AI</span> that matters

Dependable AI systems for real-world impact

<small>

[João Galego](https://jgalego.github.io) $$\left|\text{🧠}\right>$$

Head of AI @ CSW

Invited Professor @ ISEG

</small>

---

# Agenda 📋

--

## Mind the gap

great demos, fragile products

--

## Why AI fails

why models aren't (usually) the problem

--

## Dependable AI

from models to systems

from systems to society {.fragment .fade-in}

--

## AI that (actually) matters

building systems people can trust

--

## Want to dive deeper?

[awesome.critical-ai.dev](https://awesome.critical-ai.dev)

<img src=https://awesome.critical-ai.dev/assets/images/ai4sc.png width=50%/>

---

# Mind the gap

--

## The AI revolution is <span style='color: red'>accelerating</span>...

--

### [Increased Spending](https://www.idc.com/getdoc.jsp?containerId=prUS49670322)

<img src="assets/icons/increased_spending.png"/>

This year, global spending on AI <br>will reach $300B growing 4.2x faster<br> than average IT spend.

--

### [Widespread Adoption](https://www.gartner.com/document/4839631)

<img src="assets/icons/widespread_adoption.png"/>

34% of enterprises have deployed <br>AI in production and 22% will <br>deploy in the next 12 months.

--

### [Generative AI Impact](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier#introduction)

<img src="assets/icons/generative_ai_impact.png"/>

Generative AI will increase the impact of all AI <br>by 15 to 40% across all industries.

--

## ... but <span style='color: red'>reality</span> tells <br>a different story

--

### [No Roadmap, No Results](https://finance.yahoo.com/news/organizations-accelerating-ai-investments-early-110000212.html)

<img src="assets/icons/no_roadmap_no_results.png"/>

When it comes to AI adoption,<br> 64% of companies lack a clear roadmap <br>with measurable goals.

--

### [Spending Big, Delivering Small](https://finance.yahoo.com/news/organizations-accelerating-ai-investments-early-110000212.html)

<img src="assets/icons/spending_big_delivering_small.png"/>

67% of organizations expect <br>to maintain or increase AI spending, <br>yet only 21% report any proven outcomes.

--

### [From Prototype To Nowhere](https://www.infoworld.com/article/2270692/why-ai-investments-fail-to-deliver.html)

<img src="assets/icons/from_prototype_to_nowhere.png"/>

86% of all AI projects <span style='color: red'>fail</span> to deliver, <br> while 50% never make it to production.

--

## The AI <span style='color: red'>production gap</span> <br>is real and growing...

--

<img src="assets/images/ai_production_gap.png" width=80%/>

--

## Why is it so <span style='color: red'>hard</span> <br>to *productionize* ML?

--

### The State of Production ML in 2025

<img src="assets/images/state_of_ml_2025.png" width=80%/><br>

<small>

**Source:** [The Institute for Ethical AI & Machine Learning](https://ethical.institute/state-of-ml-2025)

</small>

--

### <span style='color: red'>Not-So-Hidden</span> technical debt in ML systems

<img src="assets/images/hidden_technical_debt.png" width=90%/><br>

<small>

**Source:** Adapted from Sculley *et al.* (2015)

</small>

--

## In software applications, <br>ML is just <span style='color: red'>one among many</span> <br>components...

--

<img src="assets/images/real_world_software.png" width=80%/><br>

--

<img src="assets/images/uml_for_ai.jpg" width=50%/>

---

# Why AI <span style='color: red'>fails</span>

--

### Here's an uncomfortable truth...

Most AI talks tend to focus on: {.fragment .fade-in}

- better models {.fragment .fade-in}
- bigger models {.fragment .fade-in}
- more data {.fragment .fade-in}
- higher scores {.fragment .fade-in}

<!-- TODO: (optional) add images to illustrate each point -->

--

## The Main Problem

Real-world impact isn't about **intelligence**.

It's about <span style='color: red'>**RELIABILITY**</span>. {.fragment .fade-in}

--

## NOT

> Can we build AI?

--

## BUT

> Can we **trust** it when it matters?

--

## Why should we care?

Because AI is already <span style='color: red'>everywhere</span><br> that matters most {.fragment .fade-in}

--

### [AI is saving lives in the ICU...](https://link.springer.com/article/10.1007/s00134-023-07102-y)

<img src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUybXAzdDgxeWFkbnp6OHl2M3NrZDE1cDM3OTQ0eGtrOHE2MjdkdTRqOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/UrK4buqejkhK2NTFw9/giphy.gif"/>

--

### [... making life-or-death decisions](https://link.springer.com/article/10.1007/s00134-023-07102-y)

<img src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs00134-023-07102-y/MediaObjects/134_2023_7102_Fig1_HTML.png?as=webp" width=50%/>

--

### [AI is flying drones...](https://www.flyeye.io/how-ai-is-used-in-drones/)

<img src=https://miro.medium.com/1*qTWAJMhSlrDHRBe6fWjKJg.gif width=50%/>

--

### [... and directing air traffic](https://interactive.aviationtoday.com/avionicsmagazine/november-december-2022/how-ai-makes-air-traffic-management-more-predictable-and-more-efficient/)

<img src="https://img.itch.zone/aW1hZ2UvNDYyNzYvMjAyMDk3LmdpZg==/original/IHHUb7.gif"/>

<!--img src=https://s3.amazonaws.com/marquee-test-akiaisur2rgicbmpehea/F0wnRGIzRjGQueN4Ovrj_Heathrow0202aa.jpg width=50%/-->

--

### [AI is in space...](https://parolaanalytics.com/parolanews/ai-nasa-autonomous-in-space-assembly-tech/)

<img src="https://parolaanalytics.com/wp-content/uploads/2024/06/hexapod.gif" width=70%/>

--

### [AI is in space...](https://science.nasa.gov/science-research/science-enabling-technology/new-ai-algorithms-streamline-data-processing-for-space-based-instruments/)

<img src=https://science.nasa.gov/wp-content/uploads/2023/06/ai-algorithm-2.png width=50%/>

--

### [... and inside nuclear reactors](https://www.anl.gov/ntns/article/nuclear-energy-becomes-smarter-and-safer-with-ai)

<img src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyeTh2M2U0ZDBham42emYwZGt4MnQwZXZpZHd5bTk3bzZyZzdobWM2bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RnmoEV9ylBoZO/source.gif"/>

--

### [... and inside nuclear reactors](https://www.anl.gov/ntns/article/nuclear-energy-becomes-smarter-and-safer-with-ai)

<img src="https://www.anl.gov/sites/www/files/styles/article_teaser_16x9/public/33926D_454_NTNS_Danny%20Andujar_THETA_METL_PRINT%20%281%29.jpg?h=8abcec71&itok=Tzh-VcMY" width=50%/>

--

### **Sidenote:** [Datacenters in space](https://taranis.ie/datacenters-in-space-are-a-terrible-horrible-no-good-idea/) // Taranis

Why it's a terrible, horrible, no good idea

<img src="https://media.cnn.com/api/v1/images/stellar/prod/20250828-data-centers-orbit-final2.jpg?c=original&q=w_1041,c_fill" width=50%/>

--

### **Sidenote:** [Vibe nuclear](https://pivot-to-ai.com/2025/11/18/vibe-nuclear-lets-use-ai-shortcuts-on-reactor-safety/) // Pivot-to-AI

What it is & why it's a bad idea

<img src=https://pivot-to-ai.com/wp-content/uploads/2025/11/nuclear-stopwatch.webp width=50%/>

--

## AI is in our <span style='color: red'>critical</span> services

We barely even notice it anymore

**unless something goes wrong** {.fragment .fade-in}

--

## What is a <span style='color: red'>critical</span> system?

--

A system whose failure may cause

- injury or loss of life 😵
- infrastructure damage 💥
- environmental harm 🚱
- mission failure 🚀
- major financial loss 📉

<!--

**Examples:**

Patient monitoring $\rightarrow$ Delayed treatment

Aircraft navigation $\rightarrow$ Accidents

Power grid control $\rightarrow$ Blackouts

Core banking $\rightarrow$ Financial disruption

-->

--

## When these systems <span style='color: red'>fail</span>...

real accidents happen! {.fragment .fade-in}

--

### [Mars Climate Orbiter](https://science.nasa.gov/mission/mars-climate-orbiter/)

Lost a spacecraft because one team <br>used metric and the other used imperial 📏

<img src=https://mars.nasa.gov/system/content_pages/main_images/375_mco_mapping.jpg width=50%/>

--

### [Patriot Missile Failure](https://cs.nyu.edu/~exact/resource/mirror/patriot.htm)

Killed 28 soldiers due to a cumulative <br>rounding error in the system’s software 🎯

<img src=https://i.makeagif.com/media/12-04-2015/tnfVp2.gif width=50%/>

--

### [Knight Capital Trading Glitch](https://www.cio.com/article/286790/software-testing-lessons-learned-from-knight-capital-fiasco.html)

Lost $440M in 30 minutes <br> after deploying buggy code 💸

<img src=https://miro.medium.com/v2/resize:fit:1240/0*BJxcJ4HA0ve0gU9y width=50%/>

--

### [Toyota Unintended Acceleration](https://www.transportation.gov/briefing-room/us-department-transportation-releases-results-nhtsa-nasa-study-unintended-acceleration)

Spaghetti code broke the brakes 🚗

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbkfH1iDZICIDmq-7N0JaRb39tImZqScyoA&s" width=50%/>

--

### Good enough is <span style='color: red'>not</span> good enough

(not in critical systems)

--

> “Do you code with your <br>loved ones in mind?”

<small>

― Emily Durie-Johnson, [Strategies for Developing Safety-Critical Software in C++](https://www.youtube.com/watch?v=VJ6HrRtrbr8)

</small>

--

## Where does that leave <br>AI in <span style='color: red'>critical</span> systems?

When the stakes are this high...

is it really a good idea? {.fragment .fade-in}

--

### Traditional software

```mermaid
flowchart LR

A[Input] --> B[Deterministic Logic]
B --> C[Output]

subgraph Code
B
end
```

--

**Key properties:**

- deterministic
- explicit rules
- predictable behavior
- easier debugging

--

#### What is <span style='color: red'>determinism</span>?

<img src=assets/images/determinism.png width=70%/><br>

<small>

**Source:** [Andersson *et al.* (2024)](https://ieeexplore.ieee.org/document/10748739)

</small>

--

#### [Defeating Nondeterminism in LLM Inference](https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/)

<img src=https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/svgs/nondeterministic.svg width=70%><br>

<small>

**Source:** He *et al.* (2025)

</small>

--

## ML Systems

```mermaid
flowchart LR

A[Data] --> B[Training]
B --> C[Model]

D[Input] --> C
C --> E[Output]

E --> A
```

--

**Key properties:**

- probabilistic
- behavior learned from data
- performance depends on data distribution

--

## Key Point

Complex systems fail in ways we can't predict.

AI amplifies complexity - and complexity breaks things. {.fragment .fade-in}

--

## S*** happens!

Models *will* make <span style='color: red'>mistakes</span>

--

### [Just stick something to it...](https://spectrum.ieee.org/slight-street-sign-modifications-can-fool-machine-learning-algorithms)

or when is a stop sign not like a stop sign?

<img src="https://spectrum.ieee.org/media-library/signs.jpg?id=25583709&width=620&quality=85" width=50%/>

--

### [Nissan's Emergency Braking](https://incidentdatabase.ai/cite/341/)

False positives posed traffic risks to drivers

<img src=https://i.makeagif.com/media/3-14-2026/t1X9tt.gif width=50%/>

--

### [Waymo School Bus Problem](https://philkoopman.substack.com/p/the-waymo-school-bus-problem)

Polite software that 'moved out of the way' <br> by illegal passing. 🚌

<img src="https://media.licdn.com/dms/image/v2/D4E22AQHYOOmK0uuiCQ/feedshare-shrink_2048_1536/B4EZv7Ec1wJkAk-/0/1769443807809?e=2147483647&v=beta&t=kS4jniBMAqEit3mMSFmUoJI0NHEqbXDqGZnZEf_C52Y" width=50%/>

--

### Even great models *eventually* fail...

often in **strange** and **unpredictable** ways {.fragment .fade-in}

--

## How can we fight this?

Let's turn to the [ECSS ML handbook](https://ecss.nl/home/ecss-e-hb-40-02a-15-november-2024/)... {.fragment .fade-in}

--

<img src="assets/images/ecss_ml_handbook.png"/>

--

**Golden Rule #1**

> Do <span style='color: red'>**NOT**</span> build AI <br>just because you have data.

--

**Golden Rule #2**

> Do <span style='color: red'>**NOT**</span> use AI <br>just because you can.

--

### Safety Cage Architecture

<img src="assets/images/safety_cage.png" width=80%/>

--

#### Key Idea

Don't try to prove that the ML system is safe.

Instead, **constrain** it so it can't be unsafe. {.fragment .fade-in}

--

### Safety Envelope > Doer/Checker

<img src="assets/images/doer_checker_pair.png" width=80%/><br>

--

### Safety Envelope > Doer/Checker

The doer optimizes for performance.

The checker handles <span style='color: red'>**safety**</span>. {.fragment .fade-in}

--

### Doer/Checker > Automotive

The doer can be low SIL.

The checker <u>*must*</u> be **high** SIL. {.fragment .fade-in}

--

#### Automotive > ISO26262

Safety Integrity Levels (SIL)

<img src=https://instrumentationtools.com/wp-content/uploads/2015/12/instrumentationtools.com_sil-levels.png width=80%/>

--

#### Aerospace > DO-178C

Development Assurance Levels (DAL)

<img src=https://mistralsolutions.com/wp-content/uploads/2025/12/DO-254-DAL-Levels-e1628830540209.png width=80%/>

--

##### [Runway Sign Classifier](https://www.mathworks.com/help/deeplearning/ug/verify-an-airborne-deep-learning-system.html)

<img src="assets/images/runway_sign_classifier.png" width=80%/><br>

<small>

**Source:** Adapted from [Dimitriev *et al.* (2023)](https://arxiv.org/abs/2310.06506)

</small>

--

##### Sidenote: [NASA on LLMs for Assurance](https://ntrs.nasa.gov/citations/20250001849)

<img src="assets/images/nasa_llm_assurance.png" width=80%/>

--

### Neural Simplex Architecture

<img src="assets/images/neural_simplex_architecture.png"><br>

<small>

**Source:** [Phan *et al.* (2019)](https://arxiv.org/abs/1908.00528)

</small>

--

### Simplex Architecture > Automotive

<img src="assets/images/us10962972_simplex.png" width=80%/><br>

--

### Patent: [US10962972B2](https://patents.google.com/patent/US10962972B2/en)

Safety Architecture for Autonomous Vehicles

<img src="assets/images/safety_architecture_av.png" width=70%/><br>

--

#### Saab / Helsing Collaboration

<img src="https://helsing.ai/assets/image/3cc382ccf7d98fcfe5f98fb823ad8d49a8109d9b-3000x1655.png%3Frect%3D21%2C0%2C2959%2C1655%26w%3D1652%26h%3D924%26fit%3Dmax%26auto%3Dformat?w=1536&q=95" width=50%>

<small>

> "While all of Helsing’s work primarily focused on software model training, integration with Gripen E APIs and testing, Saab actually set the groundwork for operating a software-defined aircraft several years ago with an overhaul to the Gripen’s avionics."

</small>

--

### Saab's [Split Avionics](https://www.mobilityengineeringtech.com/component/content/article/53597-are-military-avionics-systems-ready-for-artificial-intelligence)

<img src="https://i.makeagif.com/media/6-19-2015/ie67l8.gif" width=50%/>

--

#### Tactical vs Flight Critical

<img src="https://3dmilprint.com/cdn/shop/articles/Gripen-20Ejpg_9d8c9db8-2c36-42d6-b9c8-5df36af9385f.jpg?v=1747336842&width=1100" width=30%> <img src="https://crdms.images.consumerreports.org/prod/products/cr/models/399694-smartphones-apple-iphone-11-10008711.png" width=28%>

<small>

> "Gripen’s avionics system separates 10% of the aircraft's flight critical management codebase from 90% of its tactical management code, resulting in avionics that are 'hardware agnostic'."

</small>

--

#### [Software-Defined Assurance](https://helsing.ai/newsroom/helsing-white-paper-software-defined-assurance) / Helsing

<small>

> **Many of the well-known approaches used to ensure the reliability of software are difficult or impossible to apply to AI-based software**, where models are created
from data rather than hand-coded by software developers. This creates
friction in the commissioning and development of AI-based software,
because it is unclear what criteria will be used to assure it.
The potential worst case is that assurance of systems involving AI are
subject to a matrix of both poorly-fitting existing requirements and new
but underspecified AI-related requirements.

</small>

--

### Airborne AI/ML Assurance Lifecycle 

<img src="assets/images/ai_ml_lifecycle.png" width=80%/>

--

### Testing

Test the system like any other critical software.

--

<img src="assets/images/ecss_ml_handbook.png"/>

--

The [ECSS ML handbook](https://ecss.nl/home/ecss-e-hb-40-02a-15-november-2024/) suggests checking:

- specific examples

- neural network coverage

- out of distribution examples

- adversarial examples

--

### V-Cycle $\rightarrow$ W-Cycle

<img src="assets/images/w_cycle.png" width=80%/><br>

<small>

**Source:** [EASA / Daedalean (2024)](https://www.easa.europa.eu/en/document-library/general-publications/concepts-design-assurance-neural-networks-codann)

</small>

--

### Formal Verification

*Mathematically* prove certain behaviors <br>cannot happen.

--

[Natural Language $\rightarrow$ Temporal Logic Formulas](https://conformalnl2ltl.github.io/)

<video controls width=50%>
    <source src="https://conformalnl2ltl.github.io/video/robot_dog_1.mp4">
</video>

--

[Minimize Hallucinations with Automated Reasoning](https://aws.amazon.com/blogs/aws/minimize-ai-hallucinations-and-deliver-up-to-99-verification-accuracy-with-automated-reasoning-checks-now-available/)

<img src=https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2025/07/16/ar-checks-generate.png width=70%>

--

#### <span style='color: red'>Safety property</span>

> "bad thing never happens"

$$\square ~\neg \texttt{bad}$$

--

#### <span style='color: green'>Liveness property</span>

> "good thing eventually happens"

$$\diamond ~\texttt{good}$$

--

#### Reactive System

Systems that maintain an ongoing interaction <br>with the environment, as opposed to computing <br>some final value on termination.

--

##### Concurrent programs

<img src="https://media.licdn.com/dms/image/v2/C4E12AQGJi7qy3aFKvA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1592126487879?e=1774483200&v=beta&t=OutwGvHSfMoLUR9b7aYYKIbzOmqSDIp7eKLAUGOdDyQ" width=50%>

--

##### Embedded and process control programs

<img src=https://ebrary.net/htm/img/15/2069/33.png width=50%/>

--

##### Perpetually ongoing processes

<img src=https://www.frontiersin.org/files/Articles/1075224/xml-images/fenrg-10-1075224-g001.webp width=50%>

--

##### Operating systems

<img src=https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUydWhhcWFkcW1md3k4aWpycWRvN2FhcHI3cXR0YTMweXF0OTFhejRoMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AqV8uSb8ptxyo7Wyog/giphy-downsized.gif width=50%/>

--

### These systems are not defined <br>by **what** they do

but <span style='color: red'>**when**</span> they do it. {.fragment .fade-in}

--

### Intelligent or not...

Building reactive systems is hard!

--

There's a saying at Google...

> "Software engineering is programming integrated over **time**." {.fragment .fade-in}

<small>

Winters, Manshreck & Wright (2020)

</small>

--

$$\texttt{SWE} = \int \texttt{Programming} ~dt$$

--

$$f \mapsto \texttt{E}[f] = \int^{\min\[\text{EOL}, +\infty\]}_{\max\[-\infty, \text{idea}\]} f ~dt$$

In postfix notation: $f\texttt{E}$

i.e. $\texttt{SWE} = \texttt{E}[\texttt{SW}]$

<!-- TODO: develop calculus argument -->

---

# <span style='color: red'>Dependable</span> AI

--

## The <span style='color: red'>Real</span> Problem

The challenge isn't model accuracy.

It's system reliability under **uncertainty**.

--

## From Models to Systems

Typical ML focuses on

```mermaid
flowchart LR

A[dataset] --> B[model]
B --> C[metrics]
```

--

Real systems require

- data pipelines
- feature pipelines
- monitoring
- evaluation
- human fallback
- governance

--

## Dependable AI Stack

Data Quality

Model Robustness

System Design

Monitoring & Feedback

Governance

--

## Dependable AI Mindset

1. Expect failure

2. Design for recovery

3. Monitor everything

4. Keep humans around

--

## Engineering Best Practices

What to do, how to do it and why

--

### Data

> Garbage in, garbage out

--

**AI systems learn from data.**

If the data is wrong, incomplete, or drifting, {.fragment .fade-in}

the system will fail. {.fragment .fade-in}

--

Focus on:
- data validation
- dataset versioning
- distribution monitoring
- label quality checks

--

You don’t control your model,

**your data does**

--

## Model

> Accuracy isn't reliability

--

A high benchmark score does not guarantee <br> **safe real-world behavior**

--

Evaluate for:
- robustness
- edge cases
- distribution shift
- calibration

--

Test the failure modes,

**not** just the average case.

--

## Observability

> If you can’t see it, you can’t trust it.

--

Track:
- data drift
- prediction drift
- system health
- anomaly signals

--

Silent failures are the most dangerous failures.

--

## Guardrails

> Expect failure. Design for safety.

--

Models will eventually fail.

Systems must handle that *safely*.

--

Common patterns:

- confidence thresholds
- fallback logic
- human escalation
- policy checks

--

Reliable systems fail *gracefully*.

--

## Humans

> AI works best when we are around

--

Humans provide:

- context
- judgment
- accountability

--

Design systems that allow:

- review
- intervention
- override

--

```python
# Predict: AI takes a shot...
result, confidence = model.predict(input_data)

# Check: Too unsure? Don't guess!
if confidence < threshold:
    result = route_to_fallback() or route_to_human()

# Log: Always leave a trail
log_decision(input_data, result)
```

--

### Human <span style='color: red'>in</span> the loop

AI acts only when a <br>human approves each decision.

--

### Human <span style='color: red'>on</span> the loop

AI acts autonomously, but humans <br>monitor and can intervene.

--

### Human <span style='color: red'>over</span> the loop

AI operates independently, while humans <br>set goals and review outcomes.

--

Humans are not the weakness.

**We are part of the safety system.**

--

Dependability is <span style='color: red'>not</span> a feature.

**It's engineering discipline.** {.fragment .fade-in}

---

# AI that (actually) matters

--

## AI <span style='color: red'>where</span> it matters most

--

High-stakes domains:

- healthcare
- aviation
- energy
- finance
- defence

--

**NOT**

Build smarter AI

**BUT** {.fragment .fade-in}

Build trustworthy systems {.fragment .fade-in}

that safely amplify our capabilities. {.fragment .fade-in}

--

## We need to <span style='color: red'>pivot</span>

--

model accuracy $\rightarrow$ system reliability

benchmarks $\rightarrow$ real-world impact {.fragment .fade-in}

research $\rightarrow$ engineering {.fragment .fade-in}

--

Real engineering does stop at *it works*.

It begins at <span style='color: red'><u>**it lasts**</u></span></u>. {.fragment .fade-in}

--

## Build AI that <span style='color: green'>matters</span>

AI first, human always!