import { stories } from "@/data/stories";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { id } = await params;
  const story = stories.find((s) => s.id === id);

  if (!story) {
    notFound();
  }

  return (
    // Added w-full here to prevent parent flex containers from collapsing the page width
    <article className="w-full py-16 px-6 max-w-5xl mx-auto">
      {/* Back Navigation */}
      <Link 
        href="/impact" 
        className="inline-flex items-center text-sm font-semibold text-foundation-crimson hover:text-foundation-maroon transition-colors mb-10 group"
      >
        <span className="transform group-hover:-translate-x-1 transition-transform mr-1">&larr;</span> 
        Back to Impact Archive
      </Link>

      {/* Hero Header Split Grid */}
      <header className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center pb-12 border-b border-surface-card mb-12">
        <div className="md:col-span-7 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-foundation-crimson bg-foundation-crimson/5 px-3 py-1 rounded-md">
            {story.category}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foundation-maroon leading-tight">
            {story.title}
          </h1>
          <p className="text-lg text-text-body font-light leading-relaxed">
            {story.subtitle}
          </p>
        </div>

        {/* Story Profile Picture Frame */}
        <div className="md:col-span-5 relative w-full aspect-[4/3] sm:aspect-video md:aspect-square rounded-2xl overflow-hidden border border-surface-card bg-surface-canvas shadow-sm">
          <Image
            src={story.image}
            alt={`Portrait celebrating ${story.title}`}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-w-768px) 100vw, 400px"
          />
        </div>
      </header>

      {/* Main Narrative Structure - Fixed with w-full and explicit grid-cols-1 */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-8 space-y-6 text-base text-text-body font-normal leading-relaxed">
          {story.fullStory.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Sidebar Pull-Quote Component */}
        <aside className="md:col-span-4 bg-surface-canvas p-6 rounded-xl border border-surface-card border-l-4 border-l-foundation-crimson shadow-xs sticky top-6">
          
          <p className="font-serif text-lg text-foundation-maroon italic leading-relaxed font-normal">
            &quot;{story.quote}&quot;
          </p>
          
        </aside>
      </div>

      {/* Bottom Action Section */}
      <footer className="mt-16 bg-white border border-surface-card rounded-2xl p-8 md:p-10 shadow-sm max-w-3xl">
        <h3 className="font-serif text-2xl font-bold text-foundation-maroon mb-4">
          {story.cta.title}
        </h3>
        <ul className="space-y-3 mb-8">
          {story.cta.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-body font-normal leading-relaxed">
              <span className="text-foundation-crimson font-bold mt-0.5">&bull;</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="pt-6 border-t border-surface-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-xs italic text-text-muted font-light max-w-md">
            {story.cta.closing}
          </p>
          <Link 
            href="/contact" 
            className="inline-block text-center bg-foundation-crimson text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-foundation-maroon transition-colors shadow-xs shrink-0"
          >
            Get Involved
          </Link>
        </div>
      </footer>
    </article>
  );
}