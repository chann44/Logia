# Logia: personalized mathematics learning

Status: Published as [GitHub issue #1](https://github.com/chann44/Logia/issues/1), with 26 implementation sub-issues (#2–#27). Product and technical design are agreed. Remaining engineering details are delegated to implementation within the decisions below, with uncertain interactions validated by a working prototype. The learner-journey testing boundary and focused mathematical validation tests are confirmed.

## Problem Statement

Adults who want to learn mathematics can name a topic such as algebra without knowing its prerequisites, which skills they already understand, or where their knowledge gaps lie. Choosing a course alone does not tell them where to begin or how today's learning connects to future abilities. They need a practical next step and trustworthy evidence of progress without completing an exhaustive placement exam first.

## Solution

Logia helps an adult clarify a learning goal, take a short adaptive diagnostic quiz, and follow a provisional learning plan that changes with evidence. The first release covers arithmetic foundations through Algebra 1, using OSSU's precollege mathematics curriculum and resources as a foundation.

The initial application runs on one learner's computer and is accessed through a browser, without sign-in. Progress and uploaded images are stored locally. Voice is the primary tutor interaction, with typed interaction available as a fallback; AI and permitted speech processing use cloud services.

A reviewed curriculum graph describes specific skills and their prerequisite relationships. A separate learner knowledge model records tentative evidence of each person's understanding. Unassessed skills are distinct from identified knowledge gaps, and the model carries across learning goals.

Learners receive curated resources, in-app explanations, supported practice, independent checks, and visual explanations. The explanation workspace is a shared canvas where the learner and AI can add text and other content. Learners can place images and highlight material to request explanations; AI can create visual explanations and animations on the canvas. The interface emphasizes the next recommended activity while an expandable map explains prerequisites and future connections. Learners retain control over their sequence.

## User Stories

1. As an adult learner, I want to describe a mathematics learning goal in plain language, so that I can begin without knowing curriculum terminology.
2. As a learner, I want Logia to clarify what I want to be able to do, so that a broad topic becomes an actionable destination.
3. As a learner, I want to confirm Logia's interpretation of my goal, so that my plan reflects my intent.
4. As a learner, I want to see whether my goal is within the supported curriculum, so that I understand what Logia can currently teach.
5. As a learner requesting an unsupported goal, I want relevant supported foundations suggested, so that I can still make useful progress.
6. As a learner, I want to optionally specify session length, so that activities can fit my available time.
7. As a learner, I want to optionally specify a deadline, so that my plan can prioritize appropriately without promising guaranteed understanding by that date.
8. As a learner, I want to begin assessment without creating an account, so that I can start directly in my local application.
9. As a learner, I want a short initial diagnostic quiz, so that I can reach a useful plan without taking an exhaustive examination.
10. As a learner, I want questions adapted to my responses, so that assessment time focuses on relevant uncertainty.
11. As a learner, I want to type mathematical answers, so that I can demonstrate understanding without relying solely on multiple-choice recognition.
12. As a learner, I want to optionally explain my reasoning, so that Logia has more context for interpreting my answer.
13. As a learner, I want an explicit way to answer "I don't know," so that I do not need to guess.
14. As a learner, I want targeted follow-up questions after an ambiguous result, so that a slip, misconception, or missing prerequisite is not conflated with another cause.
15. As a learner, I want assessment questions to have verified answers and scoring criteria, so that faulty questions do not misrepresent my understanding.
16. As a learner, I want a correct answer treated as evidence rather than conclusive mastery, so that guessing does not hide a gap.
17. As a learner, I want uncertainty to be visible, so that I can distinguish an estimate from an established observation.
18. As a learner, I want unassessed skills distinguished from likely gaps, so that missing information is not presented as failure.
19. As a learner, I want a provisional learning plan after the initial quiz, so that I can start learning while diagnosis continues.
20. As a learner, I want recommendations based on specific skills and prerequisites, so that broad topic labels do not obscure what I need to practice.
21. As a learner, I want to understand why an activity is recommended, so that its relationship to my goal is clear.
22. As a learner, I want one clear next activity on the main screen, so that I can begin without navigating a complex graph.
23. As a learner, I want to expand a map of prerequisites, progress, and future connections, so that I can understand how skills relate.
24. As a learner, I want to continue past a recommended refresher after seeing the likely difficulty, so that I retain control over my learning.
25. As a learner, I want a skipped prerequisite revisited if it causes difficulty, so that I can get help when it becomes relevant.
26. As a learner, I want one recommended resource for a plan step, so that I do not have to choose among a long list of links.
27. As a learner, I want alternative curated resources when needed, so that I can try another explanation or format.
28. As a learner, I want an in-app explanation alongside external resources, so that I can learn within Logia.
29. As a learner, I want diagrams when they clarify a concept, so that mathematical relationships are easier to understand.
30. As a learner, I want relevant interactive visuals such as number lines, fraction models, and equation balances, so that I can explore the ideas directly.
31. As a learner, I want supported practice with hints, so that I can develop understanding before an independent check.
32. As a learner, I want completion of a resource recorded separately from understanding, so that my progress reflects what I can do.
33. As a learner, I want independent checks after supported practice, so that I can find out whether I can apply a skill without assistance.
34. As a learner, I want questions that differ from worked examples, so that readiness reflects transfer beyond copying a procedure.
35. As a learner, I want readiness based on successful independent work across multiple questions, so that one answer does not determine my path.
36. As a learner, I want my plan to change as new evidence arrives, so that it remains relevant to my current understanding.
37. As a learner who is repeatedly stuck, I want a different explanation, visual, or prerequisite check, so that I am not trapped in repetitive unsuccessful practice.
38. As a learner who needs to stop, I want a break or another activity offered, so that difficulty does not force an endless quiz loop.
39. As a learner, I want assessment progress saved to my local learner profile, so that my initial effort carries forward without account creation.
40. As a returning learner, I want my learning goals, plans, and knowledge model available, so that I can continue learning.
41. As a learner starting another goal, I want relevant earlier evidence reused, so that I do not unnecessarily repeat assessment.
42. As a returning learner, I want brief retention checks where useful, so that older evidence can be refreshed.
43. As a learner, I want elapsed time to introduce uncertainty rather than automatically establish a gap, so that my knowledge is not presumed lost.
44. As a learner, I want to flag a confusing or incorrect question, explanation, or evaluation where it appears, so that I can dispute faulty guidance.
45. As a learner, I want disputed assessment evidence left unresolved pending checking, so that it does not by itself lower my estimated understanding.
46. As a product evaluator, I want to compare performance on fresh independent questions before and after learning, so that I can assess whether identified gaps are improving.
47. As a product evaluator, I want later retention evidence distinguished from immediate performance, so that durable learning can be evaluated.
48. As a product evaluator, I want initial assessment completion measured separately, so that usability is not confused with learning effectiveness.
49. As a learner, I want to use Logia in a desktop or mobile browser, so that I can complete the learning flow on my available device.
50. As a learner, I want a shared explanation canvas where both I and the AI can add text, so that we can work through mathematics together.
51. As a learner, I want to place images and text on the canvas, so that I can bring material I need help understanding into the explanation.
52. As a learner, I want to highlight relevant canvas content and ask about it, so that the AI explains the specific part that confuses me.
53. As a learner, I want AI-created animations on the canvas, so that I can understand mathematical changes and relationships visually.
54. As a learner, I want to move and resize objects on a zoomable canvas, so that I can organize my mathematical work.
55. As a learner, I want to return to the current explanation from elsewhere on the canvas, so that exploration does not leave me lost.
56. As a learner, I want to select an object or image region and request an explanation, so that the AI receives the exact material I mean with relevant nearby context.
57. As a learner, I want to undo an AI contribution and review proposed replacements of my work, so that I retain control over my canvas.
58. As a learner, I want to reopen an activity's saved canvas and explanation history, so that I can revisit the work later.
59. As a learner, I want independent checks separated from AI-supported canvas work, so that my readiness reflects unaided understanding.
60. As a learner, I want to play, pause, replay, and step backward or forward through an animation, so that I can study at my own pace.
61. As a learner, I want equations and annotations retained after each animation step, so that I can ask about the current mathematical state.
62. As a learner who reduces motion, I want a static step-through explanation, so that I can learn without animation.
63. As a learner, I want AI to respond to explicit requests rather than every canvas edit, so that I can think and arrange my work freely.
64. As a learner, I want a visible working state and cancellation for AI responses, so that I can understand and control an ongoing request.
65. As a learner, I want my existing canvas work preserved when AI generation fails, so that a failed response does not undo my effort.
66. As a learner, I want to speak questions and reasoning and hear AI explanations, so that voice is the primary way I interact with the tutor.
67. As a learner, I want to explicitly start, pause, and end a voice conversation, so that I control when Logia listens.
68. As a learner, I want to speak naturally and see listening, thinking, and speaking states, so that I understand the conversation's progress.
69. As a learner, I want to interrupt spoken explanations and pause their animations together, so that I can ask about the current step.
70. As a learner, I want spoken explanations synchronized with the relevant canvas operation, so that the narration and mathematical changes agree.
71. As a learner, I want to inspect and correct transcribed words and mathematical expressions before submitting an independent answer, so that speech recognition errors do not become assessment errors.
72. As a learner, I want typed interaction available when voice is unavailable or unwanted, so that I can continue learning.
73. As a learner, I want a Done speaking control alongside automatic pause detection, so that I can manage spoken turns when thinking takes longer.
74. As a learner, I want saved transcripts and explanation steps alongside canvas history, so that I can review earlier learning sessions.
75. As a learner, I want recent spoken explanations replayed from a local audio cache, so that replay does not require another generation request when the audio is available.
76. As the local operator, I want separately configurable tutoring, transcription, and speech-generation models visible in settings, so that I can change OpenRouter models without editing code.
77. As the local operator, I want persistent local data and a documented backup procedure, so that restarts and maintenance do not lose my learning history.
78. As a learner, I want flagged assessment questions excluded until I explicitly restore them, so that disputed content does not continue influencing my learning plan.
79. As a learner, I want a replacement for a flagged assessment question, so that I can continue gathering useful learning evidence.

## Implementation Decisions

- Scope: adults learning mathematics, initially arithmetic foundations through Algebra 1. Higher mathematics remains a later expansion.
- Separate the shared curriculum graph from each learner's knowledge model. A topic groups skills for navigation; diagnosis operates on specific assessable skills.
- Anchor curriculum and resource curation to OSSU. Its course-level structure is a starting point, not an existing fine-grained skill graph. Logia needs reviewed mappings between skills, prerequisites, questions, and resources.
- AI may propose curriculum additions, but proposals require checking before becoming shared prerequisite relationships.
- Resolve a free-text request into a learner-confirmed, supported learning goal. Explain coverage limits and suggest relevant foundations for unsupported requests.
- Aim for an initial diagnostic experience of approximately five to ten minutes. Produce a provisional plan and continue diagnosis during learning rather than requiring assessment of every prerequisite up front.
- Begin with checked question templates that AI can vary and explain. Questions must have verified answers and scoring criteria before their results affect the learner knowledge model; the requirement also applies to variations.
- Accept typed mathematical answers and optional reasoning. Support "I don't know" and targeted follow-ups when evidence is ambiguous.
- Preserve uncertainty. An unassessed skill, a suspected knowledge gap, supported practice, and successful independent work must remain distinguishable.
- Require successful independent practice across multiple questions, including a variation beyond the worked example, before estimating readiness. Numerical confidence thresholds and exact evidence aggregation are not yet selected.
- Track resource completion separately from evidence of independent understanding. Hinted work contributes evidence of supported practice without qualifying as an independent check.
- Give each plan step one recommended curated resource and an in-app explanation, with alternatives available when useful. Resource selection can extend beyond OSSU's links.
- Provide a freeform, zoomable explanation canvas for one learner and AI, with movable and resizable objects. Initial content types are text, equations, images, drawing strokes, highlights, and animation objects. Include a return-to-current-explanation action.
- Selecting an object or highlighting a region exposes an Explain this action. Supply the selected content and relevant nearby context to the AI; support selecting an exact equation or diagram region within an uploaded image.
- AI may add explanations directly beside relevant content. Make each contribution undoable and propose changes before replacing learner-authored material.
- AI composes new animation sequences from supported mathematical objects and actions, including movement, highlighting, labels, and mathematical transformations. The application supplies the supported objects and actions; AI chooses their composition.
- Application code checks supported mathematical answers and transformations. AI proposes explanations and structured canvas actions; validate those actions before application. An uncheckable transformation must not be presented as verified or used to change readiness.
- Provide play, pause, replay, and previous/next controls for learner-paced animation steps. Retain equations and annotations after each step and support questions about the current step. Provide a static step-through presentation for reduced motion.
- Trigger AI responses on explicit requests such as submitting a question or selecting Explain this, not on every canvas edit. Show a working state, allow cancellation, and preserve existing learner work when generation fails.
- Save one canvas per learning activity with its content and associated explanation history. Provide undo for edits. Canvas documents remain separate from the curriculum graph and learner knowledge model.
- Use the shared canvas for explanations and supported practice. Present independent checks in a focused answer screen without tutoring assistance. Permit voice transcription during checks, but show the recognized words and mathematical expressions for correction before submission; withhold hints and explanations until submission.
- Make the next activity prominent and expose an expandable map for prerequisites, progress, and future connections.
- Allow learners to override recommended sequencing after explaining likely difficulty. Revisit a prerequisite when subsequent evidence suggests it is obstructing progress.
- Respond to repeated difficulty with another explanation or visual, a prerequisite check, a break, or another activity. The intervention threshold remains an implementation detail to validate.
- Keep one persistent knowledge model per learner, with distinct learning goals and plans. Reuse relevant evidence across goals while allowing retention checks to refresh it.
- Use one local learner profile without sign-in. Save assessment and learning progress directly to that profile. Account creation and guest-to-account migration are outside the initial local version.
- Use optional session-length and deadline preferences to adjust pacing and priorities. Do not present a deadline as a guarantee of understanding.
- Allow content and evaluation reports in context. For the local version, exclude flagged assessment questions from further assessment until the local learner explicitly restores them. Preserve disputed answers for inspection but exclude their evidence from readiness calculations; offer a replacement question. AI can propose corrections but cannot approve its own disputed question. Recalculate affected readiness from eligible evidence.
- Evaluate fresh independent performance and later retention. Measure diagnostic completion separately as a usability signal; no numerical success targets have been agreed.
- Logical responsibilities include curriculum and resource curation, assessment and evidence interpretation, learner knowledge modeling, planning, learning activities, progress persistence, and content reporting. These describe behavior, not mandated services or deployment boundaries.
- Build a responsive web application, optimized for focused desktop study while retaining the complete learning flow on mobile.
- Use TypeScript and TanStack Start with API routes. Prefer TanStack libraries for common application tasks where appropriate; the individual library selections remain to be specified.
- Use Vercel AI SDK for AI integrations and shadcn/ui for interface components and styling foundations.
- Run the initial single-user application on the learner's computer, accessed through a browser, and use an OpenRouter API key for AI integrations. Use OpenRouter's transcription and speech generation endpoints through local API routes, alongside Vercel AI SDK for tutor responses.
- Make voice the primary tutor interaction. A Start conversation action begins a session; the learner can speak naturally until pausing or ending it. Show listening, thinking, and speaking states, allow interruption, and retain typing as a fallback.
- Synchronize narration and canvas animation step by step. Pausing or interrupting pauses both together at the current explanation step.
- Use the voice pipeline: capture a spoken turn, transcribe it, generate validated explanation steps, then speak and animate each step. Detect pauses to finish turns and provide a manual Done speaking control for longer thinking pauses. Initially synchronize at explanation-step granularity; prototype actual latency and interruption behavior before promising more precise timing.
- Save transcripts, explanation steps, and canvas changes locally. Discard microphone recordings after transcription rather than retaining them as learning history. Cache generated narration audio locally for replay when available; cache limits remain an implementation choice.
- Supply each tutor request with the current goal, relevant skill evidence, recent conversation, selected canvas content, and useful nearby objects. Allow retrieval of older activity context when needed rather than sending every saved canvas on every turn.
- Select tldraw as the canvas foundation following acceptance of the commercial-license tradeoff. Local-use licensing applicability and any future distribution requirements must be verified before deployment; no license has been purchased.
- On mobile, focus on the current explanation, provide a compact bottom toolbar and AI-help sheet, and expose an explicit canvas exploration mode for panning and zooming.
- Autosave canvas edits with visible saved, saving, or retry-needed status. Recover unsaved work after accidental refresh and support retrying failed AI requests without duplicating completed additions.
- Aim for a calm study environment: warm off-white surfaces, readable dark text, restrained accent color, generous equation space, and purposeful motion. Avoid school-style grades, streak pressure, and competitive rankings.
- The earlier invited-pilot hosting plan is superseded by local operation. Future multi-user distribution and operating budget remain unspecified.
- Use local PostgreSQL with Drizzle. Store the learner profile, skills, prerequisite relationships, and assessment evidence in relational tables; store canvas documents as structured JSON. Store uploaded image files on local disk with metadata and references in PostgreSQL.
- Run PostgreSQL through Docker and start the application using a documented development command. Persist database data and uploaded files across restarts and document a straightforward backup procedure.
- Omit Better Auth and sign-in from the initial local version. This supersedes the earlier authentication selection and proposed Google/email sign-in methods.
- Use OpenRouter for AI access, transcription, and speech generation, and tldraw for the canvas. Provide independently configurable models for tutoring, transcription, and speech generation, visible in settings and changeable without editing code. Choose tested defaults during implementation; no specific model identifiers are fixed by this spec. No separate graph database is selected.
- Remaining libraries and internal interfaces are delegated to implementation within this architecture, including mathematical validation tooling, audio turn detection, animation playback, and individual TanStack libraries. Validate voice interruption and synchronized canvas playback in a small working prototype before building the full curriculum flow. Do not silently change agreed product behavior to accommodate a library limitation.

## Testing Decisions

The following test approach is confirmed: high-level learner-journey tests supplemented by focused mathematical validation tests. There is no application code, existing test suite, or test-boundary precedent in the current repository.

- Prefer one high-level boundary: the public learner journey, exercised through the application interface from goal selection through diagnostic assessment, learning activities, reassessment, and saved progress. Exercise the logical responsibilities together rather than testing private functions or internal module wiring.
- A good test supplies realistic learner actions and asserts observable behavior: the confirmed goal, presented questions, uncertainty, plan changes, next activity, and persisted progress. It should tolerate changes to internal structure and generated wording.
- Use controlled AI and external-resource responses for repeatability while exercising real application orchestration and persistence. Behavioral tests do not by themselves establish the pedagogical or mathematical quality of live generated content; that requires separate content validation.
- Separately test mathematical correctness rules and run live checks for speech quality, latency, and interruption behavior. Live checks complement deterministic journey tests and must not be treated as exhaustive correctness guarantees.
- Cover a goal within scope, clarification of a broad goal, and a request beyond Algebra 1 with an honest coverage explanation.
- Cover a learner with no evidence, a learner with a suspected prerequisite gap, an "I don't know" response, an isolated mistake, and ambiguous evidence that triggers a follow-up. Assert that unassessed skills are not mislabeled as gaps.
- Cover the end-to-end learning loop: diagnostic evidence leads to a relevant plan step; resource completion alone does not establish readiness; supported practice is followed by independent checks; multiple successful independent answers can advance the plan.
- Cover a learner who skips a prerequisite and later needs it, and a learner whose repeated difficulty triggers a changed approach rather than an endless sequence of similar questions.
- Cover assessment without sign-in, return to the saved local profile, and reuse of evidence for another goal.
- Cover retention checks and confirm that elapsed time alone does not relabel a previously demonstrated skill as a gap.
- Cover flagging a question or evaluation, exclusion of disputed evidence from readiness calculations, preservation of the answer for inspection, and provision of a replacement question. Verify that flagged questions are not offered again until explicitly restored and that an AI-proposed correction cannot restore them by itself.
- Cover the main next-activity view and the expanded prerequisite map, including relevant visual explanations and resource alternatives.
- Extend learner-journey coverage to moving and resizing content, highlighting an image region for contextual explanation, receiving an AI-composed animation, undoing an AI contribution, preserving learner-authored work, returning to the current explanation, and reopening a saved activity canvas with explanation history.
- Verify that independent checks use a focused answer screen without tutoring assistance, distinct from supported canvas practice. Permit transcription, require review and submission, and withhold hints or explanations before submission.
- Verify that invalid proposed mathematical transformations are rejected and uncheckable transformations do not affect readiness. Exercise structured action validation through the application boundary.
- Cover animation pause/replay/step controls and the static reduced-motion presentation. Verify that editing alone does not trigger an AI request, cancellation is available, and failed generation preserves existing work.
- Cover explicit voice-session start/pause/end, natural turn-taking, visible conversation states, interruption, and synchronized narration/animation pause. Verify typed fallback and correction of transcribed mathematics before assessment submission.
- Cover canvas autosave status, recovery after refresh, and retry without duplicating completed AI additions.
- Verify manual completion of a spoken turn, saved transcript/history retrieval, narration cache replay, and removal of microphone recordings after transcription. Verify that request context is limited to relevant learning and canvas material while older context remains retrievable.
- Verify independent configuration of tutor/transcription/speech models and persistence of settings. Verify data survives local service restarts and exercise the documented backup/restore procedure.
- Validate reviewed curriculum relationships and question answers before using them in learning flows. Deliberately invalid assessment content must not influence the learner knowledge model.
- Keep usability signals such as assessment completion distinct from learning evidence and retention measurements.

## Out of Scope

- Subjects other than mathematics.
- Curriculum beyond Algebra 1 in the first release, including later OSSU courses.
- Handwriting recognition.
- Native applications and offline learning in the first release.
- Multi-human canvas collaboration in the first release.
- Sign-in, cloud-hosted learner accounts, and guest-to-account migration in the initial local version.
- Arbitrary AI-generated animation code execution; animations are composed from application-supported mathematical objects and actions.
- Exhaustively assessing every prerequisite before providing any useful plan.
- Treating a quiz answer, lesson completion, or deadline as proof or a guarantee of mastery.
- Allowing unreviewed AI suggestions to become shared curriculum prerequisites.

## Further Notes

- Curriculum reference: [OSSU Pre-College Math](https://ossu.dev/precollege-math/). It offers course-level prerequisites, linked resources, and final assessments across a broader curriculum than this first release. The fine-grained prerequisite graph and individual learner knowledge models are Logia's additions.
- Agreed domain vocabulary is maintained in the repository glossary. No architecture decision records or application code existed when this draft was prepared.
- The conversation settled the product direction and selected TypeScript, TanStack Start with API routes, TanStack libraries where appropriate, Vercel AI SDK, OpenRouter, shadcn/ui, tldraw, and local PostgreSQL with Drizzle. Better Auth and cloud object storage were superseded by a single local profile and local file storage. Remaining engineering choices are delegated to implementation; evidence thresholds require validation and must not be presented as established measures of learning accuracy.
- AI-created animations are an explicit canvas requirement, implemented as new compositions of supported mathematical objects and actions.
- The configured tracker is GitHub Issues in chann44/Logia, using the five canonical triage labels. The approved implementation breakdown contains 26 dependent vertical slices.
- OpenRouter references: [speech recognition](https://openrouter.ai/docs/guides/overview/multimodal/stt), [speech generation](https://openrouter.ai/docs/guides/overview/multimodal/tts). These support the selected turn-based pipeline; low-latency interruption and step synchronization still require a working prototype.
- The spec and all 26 implementation tickets carry the ready-for-agent label. Tickets are attached as GitHub sub-issues with native blocking relationships. The initial implementation frontier is [Open and resume a local canvas (#2)](https://github.com/chann44/Logia/issues/2).
