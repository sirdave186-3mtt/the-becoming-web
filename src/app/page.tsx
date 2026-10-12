import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, Target, Users2, Sparkles, Check, Flame, MessageSquareQuote } from 'lucide-react';
import GlobalFootprint from '@/components/GlobalFootprint';
import WeeklyRhythmEngine from '@/components/WeeklyRhythmEngine';
import Image from 'next/image';

const PILLARS = [
  { icon: Target, title: "Personal Growth", desc: "Build self-awareness, intentional daily habits, and practical discipline." },
  { icon: ShieldCheck, title: "Character & Courage", desc: "Confront limiting beliefs, practice accountability, and do what growth demands." },
  { icon: Compass, title: "Purpose & Leadership", desc: "Lead yourself first, serve others, and align beliefs with meaningful action." },
  { icon: Users2, title: "Border-Free Community", desc: "Engage with Becomers across 7+ nations and learn through shared experience." },
];

const BECOMER_TRAITS = [
  "Pursues consistent progress over the performance of perfection.",
  "Turns insight into practical weekly action instead of just collecting inspiration.",
  "Takes full ownership of decisions and commitments without shame.",
  "Uses personal growth to create tangible value and service for others.",
];

export default function Home() {
  return (
    <div className="space-y-28 pb-20">
      {/* 1. Hero Section */}
      <section className="relative pt-20 px-6 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Members from 7 Nations & Growing</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
          Don&apos;t Just Exist. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-200 to-brand-gold">
            Become.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
          A growth community and mentorship platform hosted by global speaker <strong className="text-brand-white">Dr. Immanuelson Sam</strong> for people committed to personal development, courageous leadership, and meaningful action.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/join"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold px-8 py-4 rounded-full hover:brightness-110 transition shadow-xl shadow-brand-gold/20 text-sm"
          >
            <span>Join The Becoming</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/sessions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 bg-brand-slate/40 text-brand-white px-7 py-4 rounded-full hover:bg-brand-slate transition text-sm"
          >
            Explore Sunday Sessions
          </Link>
        </div>
      </section>

      {/* 2. Global Footprint & Milestone Counter */}
      <GlobalFootprint currentCount={84} />

      {/* 3. Core Pillars */}
      <section className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Focus Areas</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white">What We Grow In</h2>
          <p className="text-brand-muted text-sm">Growth is not an accident. It is shaped by your choices, habits, and mindset.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="p-7 rounded-3xl bg-brand-slate/30 border border-white/10 hover:border-brand-gold/40 transition space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-brand-white">{pillar.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Weekly Rhythm Engine */}
      <WeeklyRhythmEngine />

      {/* 5. Founder Spotlight */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-slate/40 to-brand-navy p-8 md:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold tracking-wider uppercase">
                <MessageSquareQuote className="w-4 h-4" />
                <span>From The Founder</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-brand-white leading-tight">
                &ldquo;You are not finished. Your present circumstances or past mistakes do not define the full extent of who you can become.&rdquo;
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed">
                Growth deserves more than occasional motivation. It requires honest reflection, practical learning, supportive relationships, and consistent action. What happens in our Sunday sessions will show up in how you speak, how you lead, and how you live.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <div>
                  <h4 className="font-bold text-brand-white text-base">Dr. Immanuelson Sam</h4>
                  <p className="text-xs text-brand-gold">Founder, The Becoming • Global Speaker & Management Consultant</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center p-8 rounded-2xl bg-brand-navy border border-white/10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                <Flame className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-white">Guided Mentorship</h3>
              <p className="text-xs text-brand-muted">
                Gain direct mentor perspectives, ask hard questions, and turn ideas into tangible results.
              </p>
              <Link
                href="/founder"
                className="text-xs font-bold text-brand-gold hover:underline inline-flex items-center gap-1 pt-2"
              >
                Read Founder Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Identity / Who is a Becomer */}
      <section className="max-w-5xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">Identity</span>
          <h2 className="text-3xl font-extrabold text-brand-white">Who Is a Becomer?</h2>
          <p className="text-brand-muted text-sm max-w-lg mx-auto">
            A Becomer is someone who has made a conscious commitment to participate in their own progress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BECOMER_TRAITS.map((trait, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-brand-slate/20 border border-white/5 flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs text-brand-white leading-relaxed">{trait}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bottom High-Impact Call-to-Action */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-brand-gold/30 bg-gradient-to-r from-brand-slate/60 to-brand-navy p-10 sm:p-14 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-brand-white tracking-tight">
            Ready to Begin?
          </h2>
          <p className="text-sm text-brand-muted max-w-xl mx-auto leading-relaxed">
            Every Sunday at 6:00 PM Online. Enter your details to connect with Becomers across Africa and beyond.
          </p>
          <div className="pt-2">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-bold px-9 py-4 rounded-full hover:brightness-110 transition shadow-xl shadow-brand-gold/20 text-sm"
            >
              <span>Join The Community Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}