"use client";

import { useState } from "react";
import { Calendar, HelpCircle, CheckCircle2, Video } from "lucide-react";

export default function WeeklyRhythmEngine() {
    const [activeTab, setActiveTab] = useState<"monday" | "challenge" | "sunday">("monday");

    return (
        <section className="max-w-6xl mx-auto px-6 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">The Rhythm</span>
                <h2 className="text-3xl font-extrabold text-brand-white">Growth in Daily Practice</h2>
                <p className="text-sm text-brand-muted">Ideas become valuable when they shape a decision, habit, or conversation.</p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-2 p-1.5 bg-brand-slate/50 border border-white/10 rounded-2xl max-w-md mx-auto">
                <button
                    onClick={() => setActiveTab("monday")}
                    className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition ${activeTab === "monday" ? "bg-brand-gold text-brand-navy shadow-md" : "text-brand-muted hover:text-brand-white"
                        }`}
                >
                    Monday Question
                </button>
                <button
                    onClick={() => setActiveTab("challenge")}
                    className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition ${activeTab === "challenge" ? "bg-brand-gold text-brand-navy shadow-md" : "text-brand-muted hover:text-brand-white"
                        }`}
                >
                    Wed/Thu Challenge
                </button>
                <button
                    onClick={() => setActiveTab("sunday")}
                    className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition ${activeTab === "sunday" ? "bg-brand-gold text-brand-navy shadow-md" : "text-brand-muted hover:text-brand-white"
                        }`}
                >
                    Sunday Session
                </button>
            </div>

            {/* Dynamic Content Card */}
            <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-brand-slate/30 border border-white/10">
                {activeTab === "monday" && (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="flex items-center gap-3 text-brand-gold">
                            <HelpCircle className="w-6 h-6" />
                            <span className="text-xs uppercase tracking-wider font-bold">The Becoming Question</span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-brand-white">
                            &quot;Who am I becoming right now through today&apos;s small choices?&quot;
                        </h4>
                        <p className="text-sm text-brand-muted leading-relaxed">
                            Every day, our habits and decisions shape who we become. Take 5 minutes of honest reflection before taking on the week.
                        </p>
                    </div>
                )}

                {activeTab === "challenge" && (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="flex items-center gap-3 text-brand-gold">
                            <CheckCircle2 className="w-6 h-6" />
                            <span className="text-xs uppercase tracking-wider font-bold">The Midweek Challenge</span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-brand-white">
                            &quot;Identify one area where you need intentionality and take one concrete action today.&quot;
                        </h4>
                        <p className="text-sm text-brand-muted leading-relaxed">
                            Turn insight into implementation. Share your win or struggle inside the Telegram channel.
                        </p>
                    </div>
                )}

                {activeTab === "sunday" && (
                    <div className="space-y-4 animate-fadeIn">
                        <div className="flex items-center gap-3 text-brand-gold">
                            <Video className="w-6 h-6" />
                            <span className="text-xs uppercase tracking-wider font-bold">Live Gathering • 6:00 PM (WAT)</span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-brand-white">
                            Weekly Live Mentorship with Dr. Immanuelson Sam
                        </h4>
                        <p className="text-sm text-brand-muted leading-relaxed">
                            Interactive teaching, open member perspectives, and practical weekly directional alignment.
                        </p>
                        <div className="pt-2">
                            <a
                                href="/sessions"
                                className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:underline"
                            >
                                View 6-Part Session Agenda & Calendar Links →
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}