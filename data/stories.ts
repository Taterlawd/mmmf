export interface Story {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  previewText: string;
  quote: string;
  fullStory: string[];
  image: string; // Added for asset integration
  cta: {
    title: string;
    bullets: string[];
    closing: string;
  };
}

export const stories: Story[] = [
  {
    id: "nellys-journey",
    title: "Nelly’s Journey: From Fear to Hope",
    subtitle: "At just 16, Nelly from Bungoma proudly completed her Form 4 studies in 2025—a milestone that once seemed out of reach.",
    category: "Education Sponsorship",
    previewText: "For years, the shadow of unpaid school fees weighed heavily on her dreams, as her mother struggled to keep her in class. Everything changed when the Foundation stepped in.",
    quote: "Finishing high school has given me hope that I will achieve my dreams, no matter how big.",
    image: "/impact/nelly.jpg",
    fullStory: [
      "At just 16, Nelly from Bungoma proudly completed her Form 4 studies in 2025—a milestone that once seemed out of reach. For years, the shadow of unpaid school fees weighed heavily on her dreams, as her mother struggled to keep her in class.",
      "Everything changed when the Maayi Mary Mbuya Foundation stepped in. Covering tuition, uniforms, and essentials throughout her four years of high school, the Foundation lifted a burden that had once clouded her future. With this support, Nelly flourished—discovering joy in Geography, Computer Studies, Kiswahili, and even tennis. She built lasting friendships with fellow sponsored students, sharing encouragement and exam papers that made the journey brighter and less lonely.",
      "Her greatest breakthrough came in Mathematics. With extra mentorship and guidance, Nelly transformed her performance, proving to herself that perseverance and support could unlock new possibilities. Beyond academics, the Foundation’s impact reached her family too—empowering her mother to start pig farming and strengthen their household income."
    ],
    cta: {
      title: " Support More Students Like Nelly",
      bullets: [
        "Sponsor a child’s education and remove the burden of school fees",
        "Every contribution—big or small—creates ripples of hope. Together, we can empower more children like Nelly to dream boldly and achieve greatly."
      ],
      closing: "“Together, we can lift families, empower women, and give children the gift of education.”"
    }
  },
  {
    id: "kevins-story",
    title: "Kevin’s Story: From Hopelessness to Hope",
    subtitle: "At 19, Kevin had nearly given up on education. Without books, electricity, or encouragement, school felt impossible.",
    category: "Education Sponsorship",
    previewText: "School remained tough, with bullying and humiliating punishments, but instead of breaking him, these challenges fueled his determination. With mentorship, he rebuilt his confidence.",
    quote: "Helpful.",
    image: "/impact/kevin.jpg",
    fullStory: [
      "At 19, Kevin had nearly given up on education. Without books, electricity, or encouragement, school felt impossible. Then the Maayi Mary Mbuya Foundation stepped in—providing learning materials and easing household needs. For the first time, Kevin felt someone believed in him.",
      "School remained tough, with bullying and humiliating punishments, but instead of breaking him, these challenges fueled his determination. With mentorship and consistent check-ins, he rebuilt his confidence, even finding pride in speaking English. Football became his outlet, while the Foundation’s support gave him strength.",
      "The impact reached home too: his mother revamped her fruit and vegetable business, reducing stress and stabilizing the family. Kevin now dreams of becoming a nurse—a career he sees as both solid and meaningful."
    ],
    cta: {
      title: " Support More Students Like Kevin",
      bullets: [
        "Sponsor a student’s education and remove the burden of school fees",
        "Provide learning essentials like books, uniforms, and mentorship"
      ],
      closing: "“Behind every smile is a story of resilience, hope, and transformation.”"
    }
  },
  {
    id: "marys-story",
    title: "Mary’s Story: Restoring Dignity, Transforming Education",
    subtitle: "Mary Treaza—a dedicated teacher, consultant, and long-time community advocate—became a vital link between vulnerable learners and support.",
    category: "Community Advocates",
    previewText: "Mary confided in a friend about a silent crisis in her school: girls missing classes simply because they lacked sanitary towels. The Foundation responded immediately.",
    quote: "This support has changed everything.",
    image: "/impact/mary.jpg",
    fullStory: [
      "Mary Treaza—a dedicated teacher, consultant, and long-time community advocate—never imagined she would become a vital link between vulnerable learners and life-changing support. Her journey with the Maayi Mary Mbuya Foundation (MMMF) began when she confided in a friend about a silent crisis in her school: girls missing classes simply because they lacked sanitary towels, and boys struggling without even basic hygiene supplies.",
      "The Foundation responded immediately. Sanitary towels, underwear, soap, oil, and dental kits began reaching students every month. The impact was profound: Absenteeism dropped dramatically, dropout rates fell to zero, there were no pregnancies or elopements, and confidence returned—no more shame or fear in class. Boys’ hygiene improved significantly, especially dental health.",
      "Mary had once tried to buy pads from her own pocket, but she couldn’t sustain it alone. MMMF multiplied her efforts, enabling her to launch a Hygiene & Dignity Program where girls learn about menstruation and self-care, boys are educated to reduce stigma, and students support one another in a culture of respect.",
      "Today, her school is safer, cleaner, and more supportive. Learners from humble backgrounds feel seen, valued, and cared for. Mary is deeply grateful: 'This support has changed everything.' She emphasizes that continued support will keep girls in school—and one day, these same girls will grow up to support others."
    ],
    cta: {
      title: " Support More Programs Like Mary’s",
      bullets: [
        "Provide hygiene packs for girls and boys",
        "Support dignity programs that reduce stigma and empower learners",
        "Empower teachers and parents to sustain change in their communities"
      ],
      closing: "Every gift creates ripples of dignity and hope. Together, we can ensure no child misses school because of hygiene barriers."
    }
  }
];