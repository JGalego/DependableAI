---
theme: moon
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

## The Production Gap

great demos, fragile systems

--

## Why AI Fails

why the model (usually) isn’t the problem

--

## Dependable AI

from models to systems

--

## AI that (actually) matters

building systems people can trust

--

## Want to dive deeper?

[awesome.critical-ai.dev](https://awesome.critical-ai.dev)

<img src=https://awesome.critical-ai.dev/assets/images/ai4sc.png width=50%/>

---

# Why AI <span style='color: red'>fails</span>

--

**Here's an uncomfortable truth...**

Most AI talks focus on {.fragment .fade-in}

- better models {.fragment .fade-in}
- bigger models {.fragment .fade-in}
- more benchmarks {.fragment .fade-in}

--

**BUT**

Real-world impact relies on something else...

<span style='color: red'>**RELIABILITY**</span> {.fragment .fade-in}

--

**NOT**

> Can we build AI?

--

**BUT**

> Can we **trust** it when it matters?

--

## Why is this important?

Because AI is already in <span style='color: red'>**critical**</span> systems... {.fragment .fade-in}

--

### [AI is helping in the ICU](https://link.springer.com/article/10.1007/s00134-023-07102-y)

<img src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs00134-023-07102-y/MediaObjects/134_2023_7102_Fig1_HTML.png?as=webp" width=50%/>

--

### [AI is navigating drones](https://www.flyeye.io/how-ai-is-used-in-drones/)

<img src=https://miro.medium.com/1*qTWAJMhSlrDHRBe6fWjKJg.gif width=50%/>

--

### [AI is managing air traffic](https://interactive.aviationtoday.com/avionicsmagazine/november-december-2022/how-ai-makes-air-traffic-management-more-predictable-and-more-efficient/)

<img src=https://s3.amazonaws.com/marquee-test-akiaisur2rgicbmpehea/F0wnRGIzRjGQueN4Ovrj_Heathrow0202aa.jpg width=50%/>

--

### [AI is in space...](https://science.nasa.gov/science-research/science-enabling-technology/new-ai-algorithms-streamline-data-processing-for-space-based-instruments/)

<img src=https://science.nasa.gov/wp-content/uploads/2023/06/ai-algorithm-2.png width=50%/>

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

Lost a spacecraft because one team used metric <br>and the other used imperial 🚀📏

<img src=https://mars.nasa.gov/system/content_pages/main_images/375_mco_mapping.jpg width=50%/>

--

### [Patriot Missile Failure](https://cs.nyu.edu/~exact/resource/mirror/patriot.htm)

Missed a missile due to a rounding error 🎯

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

## Why AI systems are <span style='color: red'>hard</span>

Complex systems fail in surprising ways.

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

## ML Systems

```mermaid
flowchart LR

A[Data] --> B[Training]
B --> C[Model]

D[Input] --> C
C --> E[Output]

E --feedback--> A
```

--

**Key properties:**

- probabilistic
- behavior learned from data
- performance depends on data distribution

--

This leads to more uncertainty and <br>hidden failure modes

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

--

### Sofware Testing

Test the system like any other critical software.

--

The [ECSS ML handbook](https://ecss.nl/home/ecss-e-hb-40-02a-15-november-2024/) suggests:

- specific examples testing

- neural network coverage testing

- out of distribution testing

- adversarial testing

- statistical testing

--

**Golden Rule #1**

> Don't build AI <br>just because you have data.

--

**Golden Rule #2**

> Don't use AI just because you can.

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

def. **Safety property**

> "bad thing never happens"

$$\square ~\neg \texttt{bad}$$

--

def. **Liveness property**

> "good thing eventually happens"

$$\diamond ~\texttt{good}$$

--

def. **Reactive System**

A system that maintains an ongoing interaction <br>with its environment, as opposed to computing <br>some final value on termination.

--

Concurrent programs

<img src="https://media.licdn.com/dms/image/v2/C4E12AQGJi7qy3aFKvA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1592126487879?e=1774483200&v=beta&t=OutwGvHSfMoLUR9b7aYYKIbzOmqSDIp7eKLAUGOdDyQ" width=50%>

--

Embedded and process control programs

<img src=https://ebrary.net/htm/img/15/2069/33.png width=50%/>

--

Perpetually ongoing processes

<img src=https://www.frontiersin.org/files/Articles/1075224/xml-images/fenrg-10-1075224-g001.webp width=50%>

--

Operating systems

<img src=https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUydWhhcWFkcW1md3k4aWpycWRvN2FhcHI3cXR0YTMweXF0OTFhejRoMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AqV8uSb8ptxyo7Wyog/giphy-downsized.gif width=50%/>

--

### These systems are not defined by **what** they do

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

Human **in** the loop

Human **on** the loop {.fragment .fade-in}

Human **over** the loop {.fragment .fade-in}

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

# We need to <span style='color: red'>pivot</span>

--

model accuracy $\rightarrow$ system reliability

benchmarks $\rightarrow$ real-world impact {.fragment .fade-in}

research $\rightarrow$ engineering {.fragment .fade-in}

--

# Build AI that <span style='color: green'>matters</span>

AI first, human always!