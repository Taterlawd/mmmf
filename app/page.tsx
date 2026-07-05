import Image from "next/image";
import Link from "next/link";
import { stories } from "@/data/stories";

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative py-28 px-6 text-center bg-gradient-to-b from-surface-card via-surface-canvas to-surface-canvas border-b border-surface-card">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foundation-maroon mt-8 mb-6 leading-tight">
            Educating boys and girls, advancing women, transforming communities
          </h1>
          <p className="text-lg md:text-xl text-text-body mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            From classrooms to communities, cultivating dignity,equity and opportunity..
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            
            <Link 
              href="programs" 
              className="inline-block text-center bg-foundation-crimson text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-foundation-maroon transition-colors shadow-xs shrink-0"
            >
              Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION (OPTIMIZED & SHORTENED) */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 space-y-6 text-base text-text-body font-normal leading-relaxed">
          <h2 className="font-serif text-3xl font-bold text-foundation-maroon mb-2">Who We Are</h2>
          <p>
            The Maayi Mary Mbuya Foundation is dedicated to uplifting children from vulnerable backgrounds by strengthening family structures and expanding access to quality education. Founded in honor of Maayi Mary Mbuya, we carry forward her enduring legacy of compassion—building true community resilience and opening pathways to multi-generational opportunity.
          </p>
          
          <div className="bg-surface-canvas p-6 rounded-xl border border-surface-card border-l-4 border-l-foundation-tan shadow-xs mt-4">
            <h3 className="font-serif text-xl font-bold text-foundation-maroon mb-2">What we do</h3>
            <p className="text-sm sm:text-base text-text-body leading-relaxed font-normal">
              We work hand in hand with students, parents, and schools to ensure every child completes their education with dignity. Beyond the classroom, we strengthen women’s economic independence by providing seed funding to grow local businesses and supporting the establishment of village savings groups—practical pathways that build resilience and prosperity within communities.
            </p>
          </div>
        </div>

        <div className="md:col-span-5 space-y-4">
          <div className="p-6 bg-white rounded-xl shadow-xs border border-surface-card">
            <h3 className="font-serif text-lg font-bold text-foundation-maroon mb-2">Our Story</h3>
            <p className="text-sm text-text-body leading-relaxed font-normal">
              Rooted in our founder’s international development and global health experience, the Maayi Mary Mbuya Foundation emerged during the 2020 pandemic. What began as urgent economic relief for daily‑wage women has grown into long‑term, structural programs—supporting boys and girls to complete their education and enabling women to build resilient livelihoods through seed funding and village savings groups. Together, these efforts break barriers and create communities grounded in dignity, equality, and opportunity.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-xs border border-surface-card">
            <h3 className="font-serif text-lg font-bold text-foundation-maroon mb-2">Global Alignment</h3>
            <p className="text-sm text-text-body leading-relaxed font-normal mb-4">
              Our work advances the UN Sustainable Development Goals by ensuring boys and girls access quality education, healthcare, and social protection. Coupled with women’s economic opportunity through seed funding and savings groups, we help communities break barriers and build lasting resilience.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-card">
              {['SDG 1', 'SDG 3', 'SDG 4', 'SDG 5', 'SDG 8'].map((sdg) => (
                <span key={sdg} className="text-[10px] font-bold bg-surface-canvas border border-surface-card text-foundation-maroon px-2 py-0.5 rounded-md">
                  {sdg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPROACH / PILLARS */}
      <section className="bg-surface-card/60 py-24 px-6 border-t border-b border-surface-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-foundation-maroon mb-4">Our Approach</h2>
            <p className="text-base text-text-body font-normal leading-relaxed">
              We believe that lasting change comes from holistic, community-driven interventions designed to remove everyday barriers to education, nurture personal growth, and support families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xs border border-surface-card">
              <div className="text-xl md:text-2xl font-serif font-bold text-foundation-crimson mb-4">01 / Educate</div>
              <p className="text-sm md:text-base text-text-body/90 leading-relaxed font-normal">
                Targeted tuition assistance combined with our accountability-focused Tripartite Agreement (Organization, Student, Parent) ensures full secondary pathways and consistent educational support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xs border border-surface-card">
              <div className="text-xl md:text-2xl font-serif font-bold text-foundation-tan mb-4">02 / Advance </div>
              <p className="text-sm md:text-base text-text-body/90 leading-relaxed font-normal">
                Providing business seed funding, facilitating local Village Savings and Loan Associations (VSLAs), and scaling enterprise training models to build reliable income streams for parents and caregivers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xs border border-surface-card">
              <div className="text-xl md:text-2xl font-serif font-bold text-foundation-maroon mb-4">03 / Restore</div>
              <p className="text-sm md:text-base text-text-body/90 leading-relaxed font-normal">
                Integrating nutritional monitoring and home garden training setups (such as micro-container layouts) to improve household food security and eliminate deep foundational vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM OVERVIEW */}
      <section id="programs" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="border-b border-surface-card pb-12 mb-12">
          <h2 className="font-serif text-3xl font-bold text-foundation-maroon mb-4">Core Program Pillars</h2>
          <p className="text-base text-text-body max-w-3xl font-normal leading-relaxed">
            Children from disadvantaged communities—especially talented girls—face steep structural barriers that prevent them from staying in school. By directly investing in their success, we unlock human potential that elevates entire regional networks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Education Sponsorship", desc: "Covers full secondary tuition fees, textbook kits, academic tracking, and comprehensive youth wellness workshops." },
            { title: "Family & Caregiver Growth", desc: "Provides micro-enterprise grants, direct business mentoring loops, and collaborative local savings circle pairings." },
            { title: "Hygiene & Dignity Support", desc: "Distributes monthly reproductive health resource supplies paired with localized health education sessions." },
            { title: "Nutrition Systems", desc: "Coordinates essential household nutritional food relief alongside training in resilient, small-scale farming methods." }
          ].map((prog, i) => (
            <div key={i} className="p-6 border border-surface-card rounded-xl bg-white hover:border-foundation-tan transition-all shadow-xs">
              <h4 className="font-serif text-lg font-bold text-foundation-maroon mb-2 tracking-tight">{prog.title}</h4>
              <p className="text-sm text-text-body/90 leading-relaxed font-normal">{prog.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. IMPACT STORIES PREVIEW GRID */}
      <section id="impact" className="bg-surface-card/40 py-24 px-6 border-t border-surface-card">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foundation-maroon mb-2">Real Impact</h2>
            <p className="text-base text-text-body font-normal">Behind every milestone is a lived journey of resilience, determination, and community change.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div 
                key={story.id} 
                className="group bg-white rounded-xl border border-surface-card shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="relative aspect-video w-full bg-surface-canvas overflow-hidden border-b border-surface-card">
                    <Image
                      src={story.image}
                      alt={`Cover visual celebrating ${story.title}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-102"
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 33vw, 350px"
                    />
                  </div>

                  <div className="p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-foundation-crimson block mb-3">
                      {story.category}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-foundation-maroon mb-3 leading-snug group-hover:text-foundation-crimson transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm text-text-body leading-relaxed line-clamp-3 font-normal">
                      {story.previewText}
                    </p>
                  </div>
                </div>
                
                <div className="p-8 pt-0 border-t border-surface-canvas bg-surface-canvas/40">
                  <Link href={`/impact/${story.id}`} className="text-sm font-bold text-foundation-crimson hover:text-foundation-maroon transition-colors flex items-center gap-1">
                    Read Full Story &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISION & FOUNDER SECTOR */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h3 className="font-serif text-base font-bold text-foundation-maroon tracking-widest uppercase mb-4">Our Vision</h3>
          <p className="font-serif text-2xl md:text-3xl text-foundation-maroon italic font-normal leading-relaxed px-4">
            “A society where every child has access to education, everyday dignity, and the genuine opportunity to build a self-reliant future.”
          </p>
        </div>
        
        <div className="border-t border-surface-card pt-16 flex flex-col items-center">
          <div className="relative w-24 h-24 bg-surface-canvas border border-surface-card rounded-full overflow-hidden mb-4 shadow-xs">
            <div className="absolute inset-0 flex items-center justify-center font-serif text-foundation-maroon font-bold text-xl bg-foundation-cream/30">
              MM
            </div>
            <Image 
              src="/about/founder.jpg" 
              alt="Founder of Maayi Mary Mbuya Foundation"
              fill
              className="object-cover"
            /> 
          </div>
          
          <h4 className="font-serif text-xl font-bold text-foundation-maroon">Meet Our Founder</h4>
          <p className="text-base text-text-body/90 max-w-xl mt-3 mb-6 font-normal leading-relaxed">
            International development and global health expert championing localized, community-led models across Bungoma, Kisumu, and Nairobi Counties.
          </p>
          <a 
            href="#" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-block bg-foundation-maroon text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-foundation-crimson transition-colors shadow-xs"
          >
            Connect on LinkedIn &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}