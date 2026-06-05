import Image from "next/image";

export default function ProgramsPage() {
  const corePillars = [
    {
      title: "Educate",
      image: "/programs/educate.jpg",
      details: [
        "Targeted Tuition & Support: We provide direct financial and logistical assistance covering tuition, school fees, learning materials, and transportation. This structured support ensures that children can enroll in high school and remain there until graduation.",
        "Mentorship & Skills Development: Beyond regular academics, we offer mentorship and emotional support to build confidence, resilience, and critical thinking. Through leadership training and career guidance, students get the practical tools they need to succeed both in school and in life.",
        "Tripartite Agreement: Our model relies heavily on shared responsibility. A formal agreement brings together the foundation, the student, and the parents, with each party committing to a specific role. The foundation provides resources, the student commits to academic effort, and parents offer home support and active engagement. This framework ensures every child is fully supported from all sides.",
        "Community Engagement: We expand our reach beyond individual students by actively engaging families and communities. Through community workshops and regular meetings, we share student progress, reinforce our shared vision, and build collective responsibility for the success of our children."
      ],
      subSectionTitle: "Our Approach to School Health and Menstrual Hygiene",
      subSectionDesc: "The Maayi Mary Mbuya Foundation addresses fundamental barriers to education by ensuring girls have access to reliable hygiene and menstrual health support. We also provide essential hygiene packs to boys. Our practical and community-sensitive approach focuses on promoting everyday dignity and maintaining consistent school attendance.",
      subSectionBullets: [
        "Provision of Supplies: Every school term, we buy hygiene and menstrual health products to build a reliable supply for students.",
        "Distribution of Hygiene Packs: We assemble these items into neat hygiene packs and distribute them directly to all school children for fair and equal access.",
        "Targeted Inclusion of Girls: We place special focus on identifying and supporting girls who have begun menstruating, ensuring they never miss school days due to a lack of resources.",
        "Awareness and Education: We break down stigmas around personal hygiene and menstrual health through open workshops and informational sessions that build real confidence."
      ]
    },
    {
      title: "Empower",
      image: "/programs/empower.jpg",
      details: [
        "Seed Capital and Funding: To help overcome the barrier of limited resources, we offer targeted financial support. These small investments enable local women to buy stock, acquire essential tools, or secure stable business premises, laying a solid groundwork for long-term independence.",
        "Business Training: We teach practical skills in financial management, marketing, inventory control, and simple bookkeeping so women can run their enterprises confidently and make smart growth choices.",
        "Promoting a Savings Culture: Our programs emphasize the value of regular savings for both personal stability and business health. By training women to separate household and business funds, we help them protect their enterprises from unexpected setbacks.",
        "Group Formation and Support: We help form community financial structures like Village Savings and Loan Associations (VSLAs). These groups provide women with safe access to credit, shared resources, and a strong network that builds true community solidarity."
      ]
    },
    {
      title: "Restore",
      image: "/programs/restore.jpg",
      details: [
        "Nutritional Education: We host practical workshops and share educational materials focused on balanced diets, everyday hygiene, and using affordable, locally available foods. This helps families make healthier choices without relying on expensive outside resources.",
        "Agricultural Training: Hands-on training gives families small-scale, intensive farming techniques like container gardening and vertical farming. These methods are tailored for limited spaces, letting families grow fresh, nutritious food right at home.",
        "Resource Support: To back up our training, we provide high-yield seeds, essential gardening tools, and guidance on organic soil health and composting so families can sustain their gardens over time.",
        "Health Awareness: We promote preventive health habits by sharing clear information on hygiene, recognizing common illnesses early, and encouraging regular medical check-ups to keep households healthy and secure."
      ]
    }
  ];

  const structuralPrograms = [
    {
      name: "Education Sponsorship Program",
      challenge: "Many bright students face constant disruptions in school because they cannot afford tuition fees, books, or uniforms, which often leads to low confidence and high dropout rates.",
      intervention: "We provide complete educational support, covering full secondary school fees, supplying books and revision materials, and offering regular mentorship and emotional guidance.",
      outcome: "Students stay in school continuously, their academic performance improves, their self-esteem grows, and they graduate ready for higher learning or professional skills training."
    },
    {
      name: "Family & Community Empowerment Program",
      challenge: "Many parents and caregivers struggle to earn a reliable income due to a lack of capital, business tools, and mentorship, which creates intense household stress and hurts a child's nutrition and education.",
      intervention: "We support caregivers through practical economic empowerment, providing initial seed capital, regular business monitoring, smartphones for communication, and peer-to-peer support through local Chama networks.",
      outcome: "Families build stable income streams, household financial stress drops, parents are fully equipped to support their children, and communities build a culture of mutual support."
    },
    {
      name: "Hygiene & Dignity Support Program",
      challenge: "A lack of basic hygiene products harms the health, class attendance, and confidence of young students, especially girls. Menstrual stigma and misinformation cause unnecessary school absenteeism.",
      intervention: "We promote health and dignity by distributing sanitary towels monthly, providing underwear and hygiene packs to both boys and girls, and running health education sessions to remove shame.",
      outcome: "Girls attend classes consistently and confidently, menstrual stigma is completely minimized, and young people are protected from harmful coping mechanisms."
    },
    {
      name: "Nutrition Support Program",
      challenge: "Food insecurity is a daily struggle for many households, particularly during illness or economic crises, which directly impacts a child's focus, health, and academic performance.",
      intervention: "We address immediate hunger through crisis food relief and community feeding programs, while developing long-term projects like school-based greenhouses managed by student volunteers.",
      outcome: "Children enjoy better health and concentration in class, families find relief from food insecurity, and students pick up valuable agricultural and sustainability skills."
    }
  ];

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <header className="mb-16 border-b border-surface-card pb-6">
        <span className="text-sm font-bold uppercase tracking-widest text-foundation-crimson block mb-2">
          Methodology & Delivery
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foundation-maroon">
          Our Approach & Programs
        </h1>
      </header>

      {/* The Pillars Loop */}
      <section className="space-y-24 mb-24">
        <div className="border-b border-surface-card pb-4">
          <h2 className="font-serif text-3xl font-bold text-foundation-maroon">The Core Pillars</h2>
        </div>
        
        {corePillars.map((pillar, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-surface-card shadow-sm overflow-hidden">
            {/* Contextual Header Image Banner */}
            <div className="relative w-full aspect-[3/2] md:aspect-[16/10] bg-surface-card">
              <Image
                src={pillar.image}
                alt={`${pillar.title} operational pillar banner`}
                fill
                priority={idx === 0}
                className="object-cover"
                sizes="(max-w-5xl) 100vw, 1024px"
              />
            </div>

            <div className="p-8 md:p-10">
              <h3 className="font-serif text-3xl font-bold text-foundation-crimson mb-6 border-b pb-3">
                {pillar.title}
              </h3>
              
              <div className="space-y-6">
                {pillar.details.map((detail, dIdx) => (
                  <p key={dIdx} className="text-base text-text-body font-normal leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>

              {pillar.subSectionTitle && (
                <div className="mt-10 pt-8 border-t border-surface-card">
                  <h4 className="font-serif text-xl font-bold text-foundation-maroon mb-3">
                    {pillar.subSectionTitle}
                  </h4>
                  <p className="text-base text-text-muted font-normal mb-6 leading-relaxed">
                    {pillar.subSectionDesc}
                  </p>
                  
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {pillar.subSectionBullets?.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm md:text-base text-text-body bg-surface-canvas p-4 rounded-lg font-normal border border-surface-card leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Structured Programs Breakdown Matrix */}
      <section className="space-y-12">
        <div className="border-b border-surface-card pb-4">
          <h2 className="font-serif text-3xl font-bold text-foundation-maroon">Detailed Operational Matrix</h2>
        </div>
        
        {structuralPrograms.map((prog, idx) => (
          <div key={idx} className="bg-surface-canvas border border-surface-card p-6 md:p-8 rounded-xl">
            <h3 className="font-serif text-2xl font-bold text-foundation-maroon mb-6">
              {prog.name}
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-surface-card shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foundation-crimson mb-2">
                  The Challenge
                </h4>
                <p className="text-sm md:text-base text-text-muted leading-relaxed font-normal">
                  {prog.challenge}
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-surface-card shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foundation-tan mb-2">
                  Our Intervention
                </h4>
                <p className="text-sm md:text-base text-text-muted leading-relaxed font-normal">
                  {prog.intervention}
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-surface-card shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foundation-maroon mb-2">
                  The Outcome
                </h4>
                <p className="text-sm md:text-base text-text-muted leading-relaxed font-normal">
                  {prog.outcome}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}