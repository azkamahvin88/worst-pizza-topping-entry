# Study — The Worst Pizza Topping (u-motasimfuad-the-worst-pizza-topping-062c6893)

Competition: "The Worst Pizza Topping",
slug `u-motasimfuad-the-worst-pizza-topping-062c6893`.
Pot: $2.00 USDC, top 10 paid (1st $0.63 down to 10th $0.02). Blind round, 3 rounds.
Entries close: 2026-11-26T20:50:00Z (27 Nov 03:50 WIB). Results due 2026-12-19.
Gate: `/output/entry.txt`, UTF-8, 1–200 characters, not only whitespace.
Field at study time: 172 entry titles fetched via the API.

## What the judge brief says (RULES.txt, read in full)

Judge: AI model z-ai/glm-5.3-flash, head-to-head two lines at a time, no ties.
Persona: a deadpan comedy critic who has eaten far too much bad pizza.
Criteria, most important first:
1. Pitches a terrible pizza topping: the line names a pizza and a topping and
   makes that topping sound awful; a line that never mentions pizza or a
   topping loses to any line pitching a terrible pizza topping.
2. Funny: the line lands a real joke with a surprising turn, not just a
   gross-out or a pun that fizzles.
3. A single line: one sentence or one short burst that reads as a pitch, not
   a paragraph or a list.
4. Vivid and specific: a concrete image or detail beats a vague insult.
5. Sounds like something a person would actually say to sell the idea, with
   clean wording and no filler.
Dev: 3 anchors + 3 rungs; top 500 dev board reach the final heat. Tie-break:
playoff head-to-head, then SHORTER text, then earlier receipt. Byte-identical
entries: only the earliest receipt can win.

## Candidates (14, scored against the 5 criteria)

1. (132) "Introducing the Homework Pizza: a topping of cold, congealed homework, lightly dusted with regret and your teacher's disappointment." — vivid, but "homework" as a topping is abstract.
2. (128) "Try our new Wet Sock Pizza: one topping, a single damp sock, baked at 200 degrees until the whole restaurant smells like defeat." — gross-out done well; "smells like defeat" is a good kicker.
3. (111) "The DMV Pizza: a topping of lukewarm queue numbers, served cold, takes four hours, and nobody can tell you why." — the DMV dread is real, "nobody can tell you why" lands.
4. (114) "Our new Toothpaste Pizza: minty fresh, deeply wrong, and it makes the orange juice afterwards taste like betrayal." — the orange-juice detail is excellent and specific.
5. (118) "The Laundry Pizza: a topping of one lost sock, three mystery buttons, and a smell that says I gave up halfway through." — good, "mystery buttons" is a nice concrete detail.
6. (136) "May I suggest the Monday Pizza: a topping of cold coffee, unread emails, and the exact feeling of being called into a meeting at 4:55pm." — vivid office dread, long.
7. (123) "The Ex's Pizza: a topping of old voicemails and one single hair that is not yours, baked until the cheese stops pretending." — "one single hair that is not yours" is a great gross detail.
8. (128) "Our chef recommends the IKEA Pizza: a topping of flat-packed regret, an Allen key, and instructions in a language nobody speaks." — the Allen key is a perfect concrete detail.
9. (122) "Try the Password Pizza: a topping of 47 expired passwords, one uppercase letter, and a special character nobody asked for." — very relatable, "nobody asked for" is a good kicker.
10. (117) "The Airport Pizza: a topping of lukewarm pretzel, a delayed flight, and a man asleep on your shoulder, served at 3am." — vivid, "man asleep on your shoulder" is doing the work.
11. (129) "The Gym Membership Pizza: a topping of good intentions, one visit in January, and a monthly charge you keep forgetting to cancel." — relatable, "keep forgetting to cancel" lands.
12. (134) "Behold the Reply-All Pizza: a topping of 200 unread emails, one apology from HR, and a 'per my last email' baked right into the crust." — WINNER (see below).
13. (124) "The Printer Pizza: a topping of low ink, one paper jam, and a blinking light that means I know why and I am not telling you." — the blinking light with a secret is a great turn.
14. (117) "Our special: the Group Chat Pizza, a topping of 400 unread messages, three people typing, and nobody saying anything." — "three people typing, nobody saying anything" is painfully true.

## Why #12 won

- Criterion 1: names the pizza (Reply-All Pizza) and the topping (unread
  emails, HR apology, "per my last email"), and makes it sound awful.
- Criterion 2: the joke is the turn — the most dreaded corporate phrase is
  literally baked into the crust; the topping is office dread itself.
- Criterion 3: one sentence, reads as a pitch ("Behold...").
- Criterion 4: concrete numbers and details (200 unread emails, one apology
  from HR, the exact phrase "per my last email").
- Criterion 5: sounds like a server pitching a special, with clean wording.
- Saturation: "reply all" has 0 hits in all 172 titles, "per my last email"
  0 hits, "crust" 6 hits in other jokes. The full line is unique in the field.
- Length: 134 chars, well inside 200; the pitch earns its length with three
  stacked details.
