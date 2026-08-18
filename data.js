// data.js
// Static demo data for THE DEMO NEWS.
// Each article has: id, category, title, summary, date, readTime, body (array of paragraphs), url
// "url" is the internal link to the article's own page (article.html?id=...).

const ARTICLES = [
  {
    id: 1,
    category: "Artificial Intelligence",
    title: "Startup Ships an AI Model That Runs Entirely on a Coin-Sized Chip",
    summary:
      "A small hardware team says its new inference chip can run a language model offline, no cloud connection required, opening the door to AI gadgets that work anywhere.",
    date: "2026-08-14",
    readTime: "4 min read",
    body: [
      "A little-known hardware startup has unveiled a chip no bigger than a coin that can run a compact language model entirely offline. The company says the breakthrough came from rethinking how memory and compute talk to each other, rather than from a bigger or smarter model.",
      "Most on-device AI today still leans on the cloud for anything beyond simple tasks. This chip flips that assumption. Early demo units answered questions, summarized text, and translated speech with no network connection at all, running for hours on a small battery.",
      "The team says the design could show up first in hearing aids, translation earbuds, and rugged field equipment used by farmers and disaster response teams in areas with poor connectivity.",
      "Analysts who reviewed the demo were cautiously impressed, noting that the real test will be whether the chip can be manufactured cheaply at scale. The company plans to share developer kits with select partners by the end of the year.",
    ],
  },
  {
    id: 2,
    category: "Space",
    title: "Private Lunar Lander Completes First Fully Autonomous Landing",
    summary:
      "No human touched the controls. A commercial lander guided itself to a soft touchdown near the Moon's south pole, using onboard vision to pick its own landing spot.",
    date: "2026-08-11",
    readTime: "5 min read",
    body: [
      "For the first time, a commercial lunar lander chose its own landing site and touched down without any real-time human piloting. Mission controllers monitored the descent but did not intervene, letting the craft's onboard vision system handle the final approach.",
      "The lander used a combination of terrain-matching cameras and a small onboard model trained on thousands of simulated descents to identify boulders and slopes that could tip the craft over. It adjusted its path twice in the final ninety seconds before settling gently on a flat patch of regolith.",
      "Engineers on the project called it a turning point for lunar logistics. Future missions carrying supplies or equipment for astronauts won't need a live pilot on Earth reacting to a delayed video feed.",
      "The company behind the mission says the same landing software will be offered to other spacecraft makers, potentially lowering the cost of future robotic missions to the Moon and beyond.",
    ],
  },
  {
    id: 3,
    category: "Cybersecurity",
    title: "Researchers Find a Way to Catch Deepfake Calls in Real Time",
    summary:
      "A university lab built a tool that listens for tiny, inhuman patterns in synthetic voices during live phone calls, flagging likely scams before money changes hands.",
    date: "2026-08-09",
    readTime: "3 min read",
    body: [
      "Voice cloning scams have gotten good enough to fool worried family members and busy finance teams alike. A university research group says it has built a tool that can flag a synthetic voice mid-call, rather than after the damage is done.",
      "The system listens for tiny irregularities in breathing patterns and pitch that even convincing voice clones tend to get wrong under real-time pressure. In lab tests, it correctly flagged synthetic voices in the vast majority of trials, with a low rate of false alarms on real human speakers.",
      "The researchers are working with a handful of banks to pilot the tool on customer service lines, where impersonation scams targeting elderly customers have become a growing concern.",
      "They caution that the arms race is far from over. As voice generation improves, detection tools will need constant retraining to keep up.",
    ],
  },
  {
    id: 4,
    category: "Robotics",
    title: "Warehouse Robots Are Learning to Ask for Help Instead of Guessing",
    summary:
      "A logistics robotics company says teaching its robots to pause and request human guidance, instead of pushing through uncertainty, cut damaged packages by a third.",
    date: "2026-08-07",
    readTime: "4 min read",
    body: [
      "For years, warehouse robots were built to keep moving no matter what, guessing their way past confusing shelves or oddly shaped packages. One robotics company decided to try the opposite approach: teach robots to stop and ask a human when they're unsure.",
      "The change sounds small, but the company says it led to a noticeable drop in damaged goods and mis-shelved items. Robots now flag a live operator through a simple on-screen prompt when confidence in a decision drops below a set threshold, instead of pushing ahead on a best guess.",
      "Workers on the floor say the alerts are infrequent enough not to be annoying, popping up mostly for oddly stacked or unusually shaped items that trip up the robot's usual routine.",
      "The company plans to roll the feature out across its full fleet by early next year, betting that a robot willing to admit uncertainty is more useful than one that always looks confident.",
    ],
  },
  {
    id: 5,
    category: "Chips",
    title: "New Chip Design Cuts Data Center Cooling Needs in Half",
    summary:
      "By rerouting heat through the chip itself instead of pulling it out from the top, a semiconductor firm says its new design could ease one of AI's biggest power problems.",
    date: "2026-08-05",
    readTime: "5 min read",
    body: [
      "Data centers running AI workloads spend an enormous amount of energy just keeping their chips cool. A semiconductor firm now says it has redesigned how heat moves through a chip, and the results could meaningfully cut that cooling burden.",
      "Traditional chips pull heat away from the top of the silicon, where it has to travel through several layers before reaching a cooling system. The new design carves tiny channels directly into the chip so liquid coolant flows much closer to the hottest parts, cutting out several inefficient steps.",
      "In early testing, the approach cut cooling-related energy use by close to half compared to a standard setup handling the same workload, according to the company's own benchmarks.",
      "If the results hold up in larger deployments, the design could ease pressure on data centers straining local power grids to keep up with AI demand, a growing concern in several regions.",
    ],
  },
  {
    id: 6,
    category: "Biotech",
    title: "Lab-Grown Retina Tissue Restores Partial Sight in Early Human Trial",
    summary:
      "A small clinical trial reports that patients with a rare form of vision loss regained the ability to make out shapes and light after receiving a lab-grown tissue patch.",
    date: "2026-08-03",
    readTime: "4 min read",
    body: [
      "In a small but closely watched clinical trial, patients with an inherited condition that gradually destroys the retina report regaining some ability to sense shapes and light after receiving a patch of lab-grown retinal tissue.",
      "The tissue was grown from the patients' own stem cells over several weeks, then surgically placed at the back of the eye. Researchers say using a patient's own cells appears to reduce the risk of rejection compared to donor tissue.",
      "None of the participants regained full vision, and researchers are careful to temper expectations. But several described being able to notice doorways, windows, and the outline of people in a room for the first time in years.",
      "A larger trial is being planned to test whether the improvements hold up over time and whether the approach could help patients with more common forms of vision loss.",
    ],
  },
  {
    id: 7,
    category: "Climate Tech",
    title: "Startup's Rock Dust Trick Aims to Pull Carbon Out of the Air, Cheaply",
    summary:
      "Spreading crushed volcanic rock on farmland speeds up a natural process that locks away carbon dioxide, and a new startup thinks it can make the process pay for itself.",
    date: "2026-08-01",
    readTime: "3 min read",
    body: [
      "Rocks naturally absorb carbon dioxide from the air as they weather, just extremely slowly. A startup is betting it can speed that process up dramatically by spreading crushed volcanic rock dust across farmland, and get farmers to want to use it.",
      "The pitch is twofold: the rock dust locks away carbon over a period of months rather than millennia, and it also happens to improve soil health, potentially boosting crop yields enough to offset the cost of spreading it.",
      "Independent researchers monitoring pilot fields say early carbon capture numbers look promising, though they caution that verifying exactly how much carbon is being locked away long-term remains tricky.",
      "The company is now working with agricultural cooperatives across several regions to scale up the approach, aiming to turn ordinary farmland into a quiet, distributed carbon sink.",
    ],
  },
  {
    id: 8,
    category: "Gaming",
    title: "Game Studio Lets an AI Director Rewrite Levels While You Play",
    summary:
      "Instead of static levels, a new game adjusts its own layout and difficulty mid-session based on how each player is actually performing, aiming to keep everyone in a flow state.",
    date: "2026-07-29",
    readTime: "3 min read",
    body: [
      "A mid-sized game studio has built what it calls a live level director: a system that quietly reshapes parts of a level while a player is still inside it, based on how they're doing in real time.",
      "Struggling players might find an extra health pickup appear around the next corner, or a tricky jump quietly shortened. Players breezing through may find enemies get a little sharper or a shortcut mysteriously seals itself off.",
      "The studio says the goal isn't to make the game easier or harder overall, but to keep players in that hard-to-describe zone where a game feels challenging but fair, often called flow.",
      "Early players report not noticing the changes directly, which the developers count as a good sign. Too obvious, they say, and the trick stops working.",
    ],
  },
  {
    id: 9,
    category: "Fintech",
    title: "Digital Wallets Now Let Small Vendors Split Payments Automatically",
    summary:
      "A payments app update automatically divides a single sale between a seller, their supplier, and a delivery partner the instant a customer pays, no manual bookkeeping required.",
    date: "2026-07-26",
    readTime: "3 min read",
    body: [
      "For small sellers who rely on suppliers and delivery partners, tracking who gets paid what after every sale can be a constant headache. A popular digital wallet app has rolled out a feature that splits a single payment automatically the moment it lands.",
      "Sellers set up simple rules ahead of time, for example, a fixed cut to a supplier and a percentage to a delivery partner, and the app handles the division instantly when a customer pays, with each party seeing the money in their own account within seconds.",
      "Early adopters, many of them small food vendors and craft sellers, say the feature has cut hours of manual reconciliation out of their week and reduced disputes with delivery partners over missing payments.",
      "The company says it plans to add support for more complex arrangements, including revenue sharing across multiple suppliers, in a future update.",
    ],
  },
  {
    id: 10,
    category: "Consumer Tech",
    title: "Smart Glasses Finally Ditch the Awkward Battery Pack",
    summary:
      "A new pair of smart glasses distributes its battery across the entire frame instead of bulking up one arm, and reviewers say you'd barely know they're smart at all.",
    date: "2026-07-23",
    readTime: "2 min read",
    body: [
      "Early smart glasses tended to give themselves away with a noticeably thick arm housing the battery. A newly announced pair takes a different approach, spreading thin battery cells across the entire frame so no single section bulges.",
      "The result, according to people who tried a prototype, is a pair of glasses that looks close to a normal pair of frames, with just enough charge for a full day of light use including notifications, translation, and short voice queries.",
      "The company is positioning the design less as a flashy gadget and more as a quiet accessory, betting that people are more likely to actually wear smart glasses if they don't look like a gadget at all.",
      "Reviewers note that battery life still trails behind bulkier competitors, a trade-off the company says it made deliberately in favor of a design people would want to wear every day.",
    ],
  },
];
