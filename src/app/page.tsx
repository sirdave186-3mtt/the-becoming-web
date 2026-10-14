import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Target,
  Users,
  ShieldCheck,
  Compass,
  Award
} from 'lucide-react';
import AfricaMapSection from '@/components/AfricaMapSection';
import { getCachedCommunityStats } from '@/lib/cached-queries';

const CORE_PILLARS = [
  {
    title: 'Personal Growth & Self-Honesty',
    desc: 'Confronting blind spots, shedding excuses, and building sustainable daily habit loops.',
    icon: Target,
  },
  {
    title: 'Courageous Leadership',
    desc: 'Leading by serving humbly, navigating ambiguity, and taking responsibility for collective outcomes.',
    icon: ShieldCheck,
  },
  {
    title: 'Mindset & Resilience',
    desc: 'Unlearning inherited limiting beliefs and developing emotional tenacity amid turbulence.',
    icon: Sparkles,
  },
  {
    title: 'Strategic Clarity & Execution',
    desc: 'Translating noble intentions into measurable weekly commitments and concrete habits.',
    icon: Compass,
  },
  {
    title: 'Borderless Community',
    desc: 'A safe, high-accountability room of forward-thinking Africans challenging each other to grow.',
    icon: Users,
  },
  {
    title: 'Character & Culture',
    desc: 'Excellence without arrogance. Ensuring who you are inside aligns with what you project outside.',
    icon: Award,
  },
];

export default async function HomePage() {
  const { totalMembers, countryCounts } = await getCachedCommunityStats();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16 space-y-24 sm:space-y-32">
      {/* 1. Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>A Borderless Growth Movement</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-brand-white tracking-tight leading-[1.08]">
          Don’t Just Exist. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold">
            Become.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-brand-muted leading-relaxed max-w-2xl mx-auto">
          You are a work in progress, and you are responsible for participating in that progress. Step into a weekly incubator of courageous leadership, self-mastery, and structured reflection.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/join"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold px-8 py-4 rounded-full hover:brightness-110 transition text-sm shadow-xl shadow-brand-gold/20"
          >
            <span>Join The Community</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/sessions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 bg-brand-slate/40 text-brand-white px-7 py-4 rounded-full hover:border-brand-gold/40 transition text-sm"
          >
            <Calendar className="w-4 h-4 text-brand-gold" />
            <span>Sunday Gatherings</span>
          </Link>
        </div>

        {/* Live session cadence badge */}
        <div className="pt-2 flex items-center justify-center gap-2 text-xs text-brand-muted">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Next Gathering: Every Sunday at 6:00 PM (West Africa Time) Online</span>
        </div>
      </section>

      {/* 2. Interactive Pan-African Map & Clickable Country Cards (with Cached Stats) */}
      <AfricaMapSection
        totalMembers={totalMembers}
        countryCounts={countryCounts}
      />

      {/* 3. Core Growth Pillars */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">
            Foundational Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white">
            What We Cultivate
          </h2>
          <p className="text-sm text-brand-muted">
            The Becoming is structured around six core anchors designed to produce enduring personal transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl bg-brand-slate/30 border border-white/10 hover:border-brand-gold/40 transition duration-300 space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-brand-white group-hover:text-brand-gold transition">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Weekly Rhythm Preview */}
      <section className="rounded-3xl border border-white/10 bg-brand-slate/40 p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">
            The Weekly Rhythm
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-white">
            A Structured Cadence for Growth
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted">
            Becoming is not a once-a-month event—it is a continuous weekly rhythm of inquiry, action, and accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 space-y-2">
            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block">
              Monday
            </span>
            <h4 className="text-base font-bold text-brand-white">The Becoming Question</h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              A deep, probing reflection prompt released into the community to re-calibrate priorities for the week ahead.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 space-y-2">
            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block">
              Wednesday / Thursday
            </span>
            <h4 className="text-base font-bold text-brand-white">The Midweek Challenge</h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              One tangible, concrete behavioral adjustment to execute in your daily routine. Zero excuses, full ownership.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-navy border border-brand-gold/40 shadow-lg shadow-brand-gold/5 space-y-2">
            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block">
              Sunday • 6:00 PM WAT
            </span>
            <h4 className="text-base font-bold text-brand-white">The Live Gathering</h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              60 minutes of unvarnished leadership teaching, shared perspective, and candid feedback hosted by Dr. Immanuelson Sam.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Founder Spotlight */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-brand-navy shadow-2xl">
          <Image
            src="/images/immanuelson-sam.jpg"
            alt="Dr. Immanuelson Sam"
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-left">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block">
              Convener &amp; Visionary
            </span>
            <h3 className="text-xl font-bold text-brand-white">Dr. Immanuelson Sam</h3>
            <p className="text-xs text-brand-muted">Global Speaker | African Mentor | Consultant</p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold">
            <span>Leadership &amp; Stewardship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-brand-white tracking-tight">
            &ldquo;You are not finished. You are responsible for participating in your progress.&rdquo;
          </h2>

          <p className="text-sm text-brand-muted leading-relaxed">
            Dr. Immanuelson Sam is a seasoned Management Consultant, Executive Leadership Coach, and Global Speaker with over 15 years of battle-tested leadership experience advising institutions and executives across West Africa.
          </p>

          <p className="text-sm text-brand-muted leading-relaxed">
            The Becoming was born out of his conviction that sustainable leadership starts with radical self-honesty, emotional clarity, and disciplined daily habits.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/founder"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-full hover:brightness-110 transition text-xs shadow-md shadow-brand-gold/15"
            >
              <span>Explore Founder Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 border border-white/10 bg-brand-slate/40 text-brand-white px-6 py-3 rounded-full hover:border-brand-gold/40 transition text-xs"
            >
              <span>Access Session Resources</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}