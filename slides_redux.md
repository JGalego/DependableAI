---
theme: white
transition: slide
highlightTheme: monokai
slideNumber: false
enableZoom: true
logoImg: null
title: Build AI that matters 🌱 REDUX
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

--

## AI that (actually) matters

building systems people can trust

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

---

# Why AI <span style='color: red'>fails</span>

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

## AI is already <span style='color: red'>everywhere</span> <br>that matters most

--

High-stakes domains where AI is already operating:

- Healthcare — ICU monitoring, diagnosis
- Aviation — air traffic, autonomous drones
- Energy — nuclear reactors, grid control
- Finance — trading, risk, fraud detection
- Defence — mission-critical systems

--

## AI is in our <span style='color: red'>critical</span> services

We barely even notice it anymore

**unless something goes wrong** {.fragment .fade-in}

--

## When systems <span style='color: red'>fail</span>...

real accidents happen! {.fragment .fade-in}

--

### Lost $440M in 30 minutes

[Knight Capital Trading Glitch](https://www.cio.com/article/286790/software-testing-lessons-learned-from-knight-capital-fiasco.html)

buggy code deployed to production 💸

--

### A spacecraft lost to unit mismatch

[Mars Climate Orbiter](https://science.nasa.gov/mission/mars-climate-orbiter/)

one team used metric, another used imperial 📏

--

### Spaghetti code broke the brakes

[Toyota Unintended Acceleration](https://www.transportation.gov/briefing-room/us-department-transportation-releases-results-nhtsa-nasa-study-unintended-acceleration)

software defects in safety-critical systems 🚗

--

### Good enough is <span style='color: red'>not</span> good enough

(not in critical systems)

--

> "Do you code with your <br>loved ones in mind?"

<small>

― Emily Durie-Johnson, [Strategies for Developing Safety-Critical Software in C++](https://www.youtube.com/watch?v=VJ6HrRtrbr8)

</small>

--

## Even great models *eventually* fail...

often in **strange** and **unpredictable** ways {.fragment .fade-in}

--

## The question isn't <br>*if* they fail

It's <span style='color: red'>*what happens when they do*</span> {.fragment .fade-in}

---

# <span style='color: red'>Dependable</span> AI

--

## The <span style='color: red'>Real</span> Problem

The challenge isn't model accuracy.

It's system reliability under **uncertainty**.

--

## Dependable AI Mindset

1. Expect failure

2. Design for recovery

3. Monitor everything

4. Keep humans around

--

## Dependable AI Stack

| Layer | What it means |
|---|---|
| **Data Quality** | Garbage in, garbage out |
| **Model Robustness** | Test edge cases, not averages |
| **System Design** | Fail gracefully, not silently |
| **Monitoring** | If you can't see it, you can't trust it |
| **Governance** | Accountability at every level |

--

## The Human Factor

Humans provide:

- context
- judgment
- accountability

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

### Humans are <span style='color: red'>not</span> the weakness.

**We are part of the safety system.**

--

## Two Golden Rules

from the [ECSS ML handbook](https://ecss.nl/home/ecss-e-hb-40-02a-15-november-2024/)

--

### \#1

> Do <span style='color: red'>**NOT**</span> build AI <br>just because you have data.

--

### \#2

> Do <span style='color: red'>**NOT**</span> use AI <br>just because you can.

--

### Dependability is <span style='color: red'>not</span> a feature.

It's engineering discipline. {.fragment .fade-in}

---

# AI that (actually) matters

--

## We need to <span style='color: red'>pivot</span>

--

model accuracy $\rightarrow$ system reliability

benchmarks $\rightarrow$ real-world impact {.fragment .fade-in}

demos $\rightarrow$ production-grade systems {.fragment .fade-in}

--

## Questions every leader <br>should ask about AI

--

**1.** What happens when this system is wrong?

**2.** Who is accountable for its decisions? {.fragment .fade-in}

**3.** How do we know it's still working? {.fragment .fade-in}

**4.** Can a human override it? {.fragment .fade-in}

**5.** What does failure look like? {.fragment .fade-in}

--

**NOT**

Build smarter AI

**BUT** {.fragment .fade-in}

Build trustworthy systems {.fragment .fade-in}

that safely amplify our capabilities. {.fragment .fade-in}

--

### Real engineering doesn't stop at

### <span style='color: red'>*it works*</span> {.fragment .fade-in}

--

### It begins at <span style='color: green'><u>**it lasts**</u></span>

--

## Build AI that <span style='color: green'>matters</span>

AI first, human always!

--

## Want to dive deeper?

[awesome.critical-ai.dev](https://awesome.critical-ai.dev)

<img src=https://awesome.critical-ai.dev/assets/images/ai4sc.png width=50%/>
