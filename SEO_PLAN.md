# SmartQuiz website SEO plan

## Search intent and page targets

The landing page targets people looking for a fun way to turn a subject into a quick learning session. Copy is grounded in the current iOS app and public App Store listing.

| Search intent | Primary phrase | Supporting phrases | Page treatment |
| --- | --- | --- | --- |
| Find a quiz app that creates questions | AI quiz app | AI quiz maker, AI trivia app, quiz generator | Page title, description, hero, software application structured data |
| Make a quiz about a chosen subject | custom quiz maker | quiz on any topic, personalized trivia, choose quiz difficulty | Feature section, product screenshots, FAQ |
| Learn from mistakes | quiz flashcards | flashcards from wrong answers, review quiz answers | Flashcard section and FAQ |
| Build a learning habit | daily quiz app | daily quiz challenge, learning streak app, trivia habit | Habit section and FAQ |
| Verify app terms before install | SmartQuiz privacy / terms | Smart Quiz AI privacy policy, SmartQuiz terms | Dedicated canonical legal pages linked in footer and App Store listing |

## On-page structure

- One descriptive H1 introduces the benefit. H2 sections explain the learning loop, personalization, daily habit, review, and common questions.
- Use concise, human copy and internal links between the home page and legal pages. Do not add keyword-stuffed copy or unsupported rankings, reviews, or usage claims.
- Use the app's own icon and current App Store screenshot campaign; every screenshot has descriptive alternative text.
- Keep primary App Store links prominent above the fold and repeat the conversion action near the end of the page.
- Use a responsive semantic HTML layout, keyboard-accessible mobile navigation, visible focus states, and reduced-motion support.

## Technical SEO implemented

- Unique titles, descriptions, canonical URLs, theme color, and Open Graph / X card metadata for home and both legal routes.
- `SoftwareApplication` structured data links the iOS app to its verified App Store product page. A homepage `FAQPage` record mirrors the visible questions.
- `robots.txt` allows public crawling and points to the XML sitemap. `sitemap.xml` lists canonical homepage, privacy, and terms URLs.
- `.nojekyll` keeps GitHub Pages from filtering underscore-prefixed future assets. `CNAME` preserves the existing custom domain. A custom `404.html` provides a useful recovery path.
- Images and styles are served locally. There are no external font, analytics, or advertising requests on the landing page.

## SEO measurement and iteration

After the domain is linked and DNS/HTTPS are confirmed, verify the property in Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`, and inspect canonical indexing for all three pages. Track impressions, clicks, and query coverage for the target phrases; improve headings and FAQ answers only when search data reveals a real gap. Check the App Store URL and legal paths whenever the product listing or hosting domain changes.

## Important limits

- Search rank and indexing are controlled by search engines and cannot be guaranteed by page metadata.
- The site does not claim review counts, learner totals, quiz-generation speed, or comparative accuracy.
- The App Store CTA points to the current public listing for “Smart Quiz: AI Trivia Maker” (ID `6736992820`).
- App data handling is described in the Privacy Policy from the current app source. The policy deliberately does not make a claim about AI, analytics, or purchase-provider retention periods.
