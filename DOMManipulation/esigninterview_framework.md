## 1. FRAME --- Clarify the problem and goal

**Objective:** Understand why the feature matters, whose problem it
solves, and what success means before deciding what to build.

### Questions to ask

-   **Business:** Why is this feature important? What opportunity or
    business problem triggered it? Does it support retention,
    engagement, conversion, efficiency, or differentiation?
-   **User:** What problem or friction does it remove? What does the
    user currently do instead? What becomes easier or better?
-   **Success:** What should the user be able to accomplish? What
    observable behavior or outcome would indicate success?

### Example

Challenge: Improve how busy professionals manage an overloaded inbox.

-   User problem: Important conversations are buried among
    lower-priority messages.
-   User outcome: Quickly understand what needs attention and decide
    what to do next.
-   Business opportunity: Make the email product more useful and improve
    ongoing engagement.
-   Success signal: Users identify and act on important messages with
    less effort.

### Define the problem

> We believe **\[user\]** experiences **\[problem\]** when
> **\[context\]**. We want to help them **\[desired outcome\]** by
> **\[opportunity\]**, creating **\[user and business value\]**.

**Deliverable:** A concise problem statement and a clear definition of
success.

------------------------------------------------------------------------

## 2. UNDERSTAND --- Identify the user, context, and need

**Objective:** Ground the solution in one meaningful user scenario
rather than designing for everyone at once.

### Questions to ask

-   Who is the primary user? Beginner, regular, or power user?
-   What are they trying to do, and how familiar are they with the
    product?
-   Where, when, and on which device are they using the feature?
-   What triggers the need? What happens immediately before and after?
-   What constraints matter---time pressure, interruptions,
    accessibility, or task complexity?
-   What do they need to accomplish, and how should the experience feel?

Focus on behavioral and situational context. Consider occupation,
device, and environment only when they affect the experience.

### Example

Primary user: A busy professional who checks email between meetings on a
laptop.

-   Trigger: They open their inbox after several hours away.
-   Need: Find conversations that require a response or decision.
-   Constraint: Limited time and high message volume.
-   Desired feeling: In control, informed, and confident---not
    overwhelmed.

### Frame the scenario

> Build **\[X\]** for **\[specific user\]** so that when
> **\[situation\]**, they can **\[desired outcome\]**.

**Deliverable:** One primary user, one triggering situation, and one
end-to-end user goal.

------------------------------------------------------------------------

## 3. EXPLORE --- Generate and compare solution directions

**Objective:** Explore more than one approach before committing. Use AI
as a thinking partner, not as the source of product decisions.

### Questions to ask

-   What type of feature, interface, or interaction would best support
    the goal?
-   Should the experience be proactive or user-initiated?
-   Should AI summarize, classify, recommend, generate, or take action?
-   Where does AI add meaningful value---and where would conventional UI
    be simpler?
-   What alternatives might reduce friction or give users more control?

### Example: Three inbox concepts

  -----------------------------------------------------------------------
  Direction               Core interaction        Consideration
  ----------------------- ----------------------- -----------------------
  Smart prioritization    Surface messages that   Must explain why a
                          need attention          message is prioritized

  AI briefing             Summarize important     Must preserve relevant
                          inbox activity          context

  Suggested actions       Recommend a next step   User should approve
                          for a message           consequential actions
  -----------------------------------------------------------------------

### Example exploration prompt

> I'm exploring an AI-assisted inbox for busy professionals who struggle
> to identify conversations requiring attention. Propose three distinct
> interaction approaches. For each, explain the core interaction, user
> benefit, usability risks, implementation complexity, and where AI adds
> value versus conventional UI. Avoid generic chatbot solutions;
> prioritize intuitive, low-friction experiences.

**Decision:** Select a direction based on the user problem, not novelty.

**Deliverable:** Two or three viable directions, one preferred approach,
and the rationale.

------------------------------------------------------------------------

## 4. PRIORITIZE --- Define the smallest meaningful experience

**Objective:** Choose the highest-value interaction that can be
prototyped and evaluated within the available time.

### Prioritization dimensions

  -----------------------------------------------------------------------
  Dimension                           Ask
  ----------------------------------- -----------------------------------
  Reach                               How many target users could
                                      benefit?

  User value                          How meaningfully does it solve
                                      their problem?

  Business value                      How does it support the product
                                      objective?

  Implementation cost                 How much time and complexity will
                                      it take?

  Risk and confidence                 What could go wrong, and how
                                      confident are we in the assumption?
  -----------------------------------------------------------------------

### Example

For the AI inbox assistant:

-   **Build first:** Message prioritization, one concise summary, and
    one suggested action.
-   **Include:** Accept/dismiss behavior and essential loading/error
    states.
-   **Defer:** Advanced personalization, analytics, and multi-message
    automation.

Prioritize a complete, testable slice over several disconnected
components.

### Make the trade-off explicit

> I'm prioritizing **\[interaction\]** because it delivers **\[user
> value\]** and tests **\[key hypothesis\]**. I'm deferring
> **\[scope\]** because it is not necessary to validate the core
> experience.

**Deliverable:** A prioritized scope, key hypothesis, and explicit list
of what is out of scope.

------------------------------------------------------------------------

## 5. BUILD --- Decompose, prompt, prototype, and iterate

**Objective:** Translate the selected experience into manageable tasks
and guide AI toward a useful implementation.

### A. Decompose the work

Break the feature into small, ordered, testable chunks. Identify
dependencies and start with the smallest end-to-end journey.

**Example sequence:**

1.  Establish the application structure and relevant existing
    components.
2.  Build the message and inbox interface.
3.  Represent priority states.
4.  Add the summary interaction.
5.  Add suggested actions and user controls.
6.  Add loading, success, and error states.
7.  Validate the primary flow and refine.

### B. Use an eight-part prompt structure

1.  **Role and context:** What product are we working in? What existing
    system or codebase matters?
2.  **Instruction and task:** What should be built, and what deliverable
    is expected?
3.  **Scope and constraints:** What is included, excluded, or
    technically restricted?
4.  **Design guidance:** What UX principles, design-system conventions,
    visual language, and interaction rules apply?
5.  **References and examples:** What components, documentation,
    screenshots, or examples show the intended quality?
6.  **Data and context:** What realistic content, user scenario, and
    product information are needed?
7.  **Edge cases and failure handling:** What should happen with
    ambiguity, missing data, loading, errors, or unexpected outcomes?
8.  **Acceptance criteria and output:** How will we know the result is
    complete, and what should be tested or presented?

### Example implementation prompt

> You are implementing a single-message prioritization experience for a
> premium email application.
>
> **Objective:** Help users quickly understand which messages require
> attention.
>
> **Scope:** Display sender and subject, an AI-generated summary, one
> suggested next action, and accept/dismiss controls.
>
> **Constraints:** Use the existing component architecture and design
> tokens. Maintain a restrained visual hierarchy. Preserve keyboard
> accessibility and visible focus states. Do not introduce unrelated
> features.
>
> **Behavior:** Show a loading state while generating a summary. Show an
> error state if generation fails. Never execute a suggested action
> without user approval. Preserve the original message content.
>
> **Acceptance criteria:** Controls work; loading, success, and failure
> states are represented; the layout adapts to viewport size; existing
> reusable components are used where appropriate.
>
> First inspect the existing code and identify relevant components.
> Explain the implementation approach before modifying files. Implement
> only the defined scope.

### C. Prompt progressively

Use a deliberate loop:

1.  **Inspect:** Understand the existing structure, components, and
    constraints.
2.  **Plan:** Ask for a proposed implementation and identify
    dependencies.
3.  **Build:** Implement one defined slice.
4.  **Review:** Compare the output with the requirements.
5.  **Refine:** Fix the highest-impact issue; avoid changing everything
    at once.
6.  **Validate:** Test the actual interactions and states.

**Deliverable:** A focused, working prototype with the core user journey
represented.

------------------------------------------------------------------------

## 6. EVALUATE --- Validate the outcome and exercise judgment

**Objective:** Determine whether the prototype solves the problem,
identify where AI failed, and take control where needed.

### Validate against the experience

  -----------------------------------------------------------------------
  Dimension                           Questions
  ----------------------------------- -----------------------------------
  User alignment                      Does it solve the original user
                                      problem?

  Functionality                       Do the intended interactions
                                      actually work?

  Visual quality                      Is the hierarchy clear and
                                      consistent?

  Accessibility                       Are semantics, keyboard navigation,
                                      and focus states usable?

  Reliability                         Are uncertainty, errors, and
                                      missing information handled safely?

  Scope                               Did AI introduce unnecessary
                                      complexity or unsupported behavior?
  -----------------------------------------------------------------------

### Anticipate common failures

-   **Product:** AI misunderstands intent or makes an unsupported
    recommendation.
-   **Visual:** Generated UI has weak hierarchy or inconsistent styling.
-   **Interaction:** Controls appear functional but do not produce the
    expected state change.
-   **Data:** AI invents information or loses source context.
-   **Technical:** Generated code ignores existing components or
    introduces fragile logic.
-   **Accessibility:** Keyboard, focus, or semantic behavior is
    incomplete.

### Example

If the assistant cannot confidently determine whether an email requires
a response, it should communicate uncertainty or ask the user---not
invent confidence or trigger an action.

### Demonstrate judgment

-   Accept output only when it meets the user need and defined criteria.
-   Explain what AI did well and what it misunderstood.
-   Distinguish a prompting issue from an implementation issue.
-   Take manual control when another prompt is unlikely to help.
-   Explain trade-offs, limitations, and what you would validate next.

### Close with a success scenario

> The user opens their inbox, quickly identifies an important
> conversation, understands its context through a concise summary, and
> decides whether to act on the suggestion. If the system is uncertain,
> it makes that uncertainty clear and leaves control with the user.

**Deliverable:** A reviewed prototype, known limitations, and a clear
rationale for decisions.

------------------------------------------------------------------------

# One-page interview cheat sheet

## FRAME → UNDERSTAND → EXPLORE → PRIORITIZE → BUILD → EVALUATE

  -----------------------------------------------------------------------
  Stage                   Think through           Make a decision /
                                                  produce
  ----------------------- ----------------------- -----------------------
  **1. FRAME**            Why does this matter?   A concise problem
                          What user problem and   statement, desired
                          business opportunity    outcome, and success
                          are we addressing? What signal.
                          does success look like? 

  **2. UNDERSTAND**       Who is the primary      One target user, one
                          user? What triggers the scenario, and one core
                          need? What is their     user journey.
                          context, constraint,    
                          and end goal?           

  **3. EXPLORE**          What alternative        Two or three
                          feature and interaction directions, a preferred
                          models could solve      concept, and the
                          this? Where does AI add rationale.
                          value?                  

  **4. PRIORITIZE**       What has the greatest   A thin, end-to-end
                          reach and user/business feature scope and a
                          value relative to cost  clear statement of what
                          and risk? What can be   is out of scope.
                          deferred?               

  **5. BUILD**            How can the work be     A progressively
                          decomposed into         prompted, working
                          dependent, testable     prototype. Inspect →
                          chunks? What context,   Plan → Build → Review →
                          constraints,            Refine → Validate.
                          references, data, and   
                          acceptance criteria     
                          does AI need?           

  **6. EVALUATE**         Does it solve the       A validated primary
                          problem? What failed?   flow, known gaps, and a
                          What needs manual       defensible explanation
                          intervention? What are  of decisions.
                          the trade-offs and      
                          limitations?            
  -----------------------------------------------------------------------

### Keep these prompts in mind

**Problem:** What are we solving, for whom, and why now?

**User:** What triggers the need, and what does success feel like?

**Solution:** What is the simplest interaction that meaningfully solves
it?

**Priority:** What is essential to validate the core hypothesis---and
what can wait?

**AI:** Have I provided enough context, constraints, references,
realistic data, edge cases, and acceptance criteria?

**Judgment:** Is the output actually right, or does it merely look
complete?

### The senior-level behaviors to demonstrate

-   **Think independently before asking AI:** Use AI to expand and
    accelerate your thinking, not replace it.
-   **Make reasoning visible:** Explain the observation, decision, and
    intended validation behind important choices.
-   **Build a complete thin slice:** Prefer one meaningful, working user
    journey over many disconnected features.
-   **Iterate with intent:** Identify the highest-impact issue and make
    targeted improvements.
-   **Own the outcome:** Inspect generated work, anticipate failure,
    intervene manually when necessary, and communicate trade-offs.

### Closing statement

> I use design thinking to determine what should exist, product judgment
> to determine what matters most, and AI-assisted engineering to explore
> and realize the experience. I remain accountable for the quality,
> usability, and reliability of the outcome.
