import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const sdgs = [
    { name: "SDG 1 – No Poverty", src: "/sdgs/sdg1.gif" },
    { name: "SDG 3 – Good Health & Well-being", src: "/sdgs/sdg3.gif" },
    { name: "SDG 4 – Quality Education", src: "/sdgs/sdg4.gif" },
    { name: "SDG 5 – Gender Equality", src: "/sdgs/sdg5.gif" },
    { name: "SDG 8 – Decent Work & Growth", src: "/sdgs/sdg8.gif" },
  ];

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-16 border-b border-surface-card pb-6">
        <span className="text-sm font-bold uppercase tracking-widest text-foundation-crimson block mb-2">
          Discover Our Mission
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foundation-maroon">
          About Us
        </h1>
      </header>

      {/* Who We Are */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl font-bold text-foundation-maroon mb-6">Who We Are</h2>
        <div className="space-y-6 text-base text-text-body font-normal leading-relaxed">
          <p>
            The Maayi Mary Mbuya Foundation helps children from vulnerable backgrounds by strengthening family structures and expanding access to quality education. We focus on building real community resilience and long-term opportunity.
          </p>
          <p>
            Established in honor of Maayi Mary Mbuya, the foundation embodies her enduring legacy of compassion, perseverance, and dedication to uplifting others. Guided by these baseline values, we work alongside families to foster practical, sustainable change for generations to come.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="grid sm:grid-cols-2 gap-6 mb-16">
        <div className="bg-surface-canvas p-8 rounded-xl border border-surface-card shadow-xs">
          <h3 className="font-serif text-xl font-bold text-foundation-maroon mb-3">Our Vision</h3>
          <p className="text-base text-text-body leading-relaxed font-normal">
            A society where every child has access to education, everyday dignity, and the genuine opportunity to build a self-reliant future.
          </p>
        </div>
        <div className="bg-surface-canvas p-8 rounded-xl border border-surface-card shadow-xs">
          <h3 className="font-serif text-xl font-bold text-foundation-maroon mb-3">Our Mission</h3>
          <p className="text-base text-text-body leading-relaxed font-normal">
            To dismantle educational barriers faced by vulnerable children through direct sponsorship, health and dignity support, and the economic advancement of their families.
          </p>
        </div>
      </section>

      {/* Our Story Layout with Optional Image Split */}
      <section className="mb-16 bg-white p-8 md:p-10 rounded-xl border border-surface-card shadow-sm grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3">
          <h2 className="font-serif text-3xl font-bold text-foundation-maroon mb-4">Our Story</h2>
          <p className="text-base text-text-body leading-relaxed font-normal">
            The foundation is deeply inspired by the lived experience of its founder, an international development and global health expert whose advocacy for women’s rights took root in 2020. During the COVID-19 pandemic, when women relying on daily wages were hit hardest by economic shutdowns, our initial programs stepped in to provide immediate relief, long-term resilience, and real pathways to recovery.
          </p>
        </div>
        
        {/* Story Section Image Anchor */}
        <div className="md:col-span-2 relative w-full aspect-[4/3] rounded-lg bg-surface-canvas overflow-hidden border border-surface-card">
          <div className="absolute inset-0 flex items-center justify-center text-xs italic text-text-muted p-4 text-center bg-surface-canvas">
            [Place Community or Heritage Photo Here]
          </div>
          {
          <Image 
            src="/about/story-heritage.jpg" 
            alt="Maayi Mary Mbuya Foundation community beginnings"
            fill
            className="object-cover"
          /> 
          }
        </div>
      </section>

      {/* Global Alignment */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl font-bold text-foundation-maroon mb-4">Our Global Alignment</h2>
        <div className="space-y-6 text-base text-text-body font-normal leading-relaxed mb-8">
          <p>
            At the 69th Session of the Commission on the Status of Women (CSW) in 2025, UN Women outlined key global actions to advance commitments made at the Beijing Platform for Action and achieve the UN Sustainable Development Goals. Action Point 2 emphasized securing freedom from poverty for women and girls through comprehensive social protection, quality education, and robust care services. These same principles guide everything we do.
          </p>
          <p>
            Our community programs directly contribute to the following global frameworks:
          </p>
        </div>
        
        {/* Visualized SDG GIF Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {sdgs.map((sdg, i) => (
            <div 
              key={i} 
              className="group relative aspect-square rounded-xl overflow-hidden border border-surface-card bg-surface-canvas shadow-xs transition-transform hover:-translate-y-1 duration-200"
            >
              {/* Dynamic Animated GIF Asset Layer */}
              <Image
                src={sdg.src}
                alt={`${sdg.name} animated indicator`}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-w-4xl) 20vw, 150px"
              />
              
              {/* Vignette Overlay for Crisp Typography Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Positioned Label */}
              <div className="absolute bottom-0 inset-x-0 p-3">
                <p className="text-xs font-bold text-white leading-tight">
                  {sdg.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="border-t border-surface-card pt-12 flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Founder Image Frame */}
        <div className="relative w-28 h-28 bg-surface-canvas border border-surface-card rounded-full overflow-hidden shrink-0 mx-auto md:mx-0 shadow-xs">
          <div className="absolute inset-0 flex items-center justify-center font-serif text-foundation-maroon font-bold text-2xl bg-foundation-cream/30">
            MM
          </div>
          <Image 
            src="/about/founder.jpg" 
            alt="Founder of Maayi Mary Mbuya Foundation"
            fill
            className="object-cover"
          /> 
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h2 className="font-serif text-3xl font-bold text-foundation-maroon">Meet our Founder</h2>
          <p className="text-base text-text-body mt-2 mb-6 font-normal leading-relaxed">
            As an international development and global health expert, her advocacy builds community-centered operational models tailored explicitly to the regional realities of girls and women across Bungoma, Kisumu, and Nairobi Counties.
          </p>
          <a 
            href="https://www.linkedin.com/in/helenbokea/" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-block bg-foundation-maroon text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-foundation-crimson transition-colors shadow-xs"
          >
            Connect on LinkedIn &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}