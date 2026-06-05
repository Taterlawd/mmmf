import { stories } from "@/data/stories";
import Image from "next/image";
import Link from "next/link";

export default function ImpactArchivePage() {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto">
      {/* Page Header */}
      <header className="mb-16 border-b border-surface-card pb-6 max-w-4xl">
        <span className="text-sm font-bold uppercase tracking-widest text-foundation-crimson block mb-2">
          Our Shared Milestones
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foundation-maroon">
          Stories of Transformation
        </h1>
        <p className="text-base text-text-body mt-4 font-normal max-w-2xl leading-relaxed">
          Behind every program milestone is a lived journey of resilience, determination, and real structural community adjustment across our regional networks.
        </p>
      </header>

      {/* Photo-Card Grid Showcase */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div 
            key={story.id} 
            className="group bg-white rounded-2xl border border-surface-card shadow-xs flex flex-col justify-between overflow-hidden hover:shadow-sm transition-all duration-200"
          >
            <div>
              {/* Card Banner Image Frame */}
              <div className="relative aspect-video w-full bg-surface-canvas overflow-hidden border-b border-surface-card">
                <Image
                  src={story.image}
                  alt={`Cover visual for ${story.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-102"
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 350px"
                />
              </div>

              {/* Text Area */}
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-foundation-crimson block mb-2">
                  {story.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-foundation-maroon mb-3 line-clamp-1 group-hover:text-foundation-crimson transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-text-body leading-relaxed line-clamp-3 font-normal">
                  {story.previewText}
                </p>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="p-6 pt-0 border-t border-surface-canvas bg-surface-canvas/30">
              <Link 
                href={`/impact/${story.id}`} 
                className="inline-flex items-center text-xs font-bold text-foundation-crimson hover:text-foundation-maroon transition-colors pt-4 gap-1"
              >
                Read Full Account &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}