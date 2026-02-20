"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  Home,
  CheckCircle,
  Linkedin,
  Twitter,
  Mail,
  Facebook,
} from "lucide-react";
import { LazyImage } from "@/components/ui/LazyImage";
import {
  ABOUT_CONTENT,
  ABOUT_FEATURES,
  ABOUT_IMAGES,
  ABOUT_PAGE_CONTENT,
} from "@/constants/about";
import { TEAM_CONTENT, TEAM_MEMBERS, DEPARTMENTS } from "@/constants/team";
import type { TeamMember } from "@/constants/team";

export default function AboutPage() {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isRTL = language === "ar";
  const isDark = mounted ? resolvedTheme === "dark" : true;
  const page =
    language === "en" ? ABOUT_PAGE_CONTENT.en : ABOUT_PAGE_CONTENT.ar;
  const about = language === "en" ? ABOUT_CONTENT.en : ABOUT_CONTENT.ar;
  const team = language === "en" ? TEAM_CONTENT.en : TEAM_CONTENT.ar;

  const storyParagraphs =
    language === "en"
      ? ABOUT_PAGE_CONTENT.en.story
      : ABOUT_PAGE_CONTENT.en.storyAr;

  const featureIcons: Record<string, React.FC<{ className?: string }>> = {
    users: (p) => (
      <svg
        {...p}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    "check-circle": (p) => <CheckCircle {...p} />,
    "message-circle": (p) => (
      <svg
        {...p}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    headphones: (p) => (
      <svg
        {...p}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  };

  return (
    <div className={cn("flex flex-col min-h-screen", isRTL && "rtl")}>
      {/* ══════════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════════ */}
      <section
        className={cn(
          "relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden",
          isDark
            ? "bg-[#060f2e]"
            : "bg-gradient-to-br from-[#0a1a4f] via-[#0d2266] to-[#112d7a]",
        )}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              {page.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-8">
              {page.heroSubtitle}
            </p>

            <nav className="flex items-center justify-center gap-2 text-sm">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors"
              >
                <Home className="h-4 w-4" />
                {page.breadcrumbHome}
              </Link>
              <ChevronRight
                className={cn("h-4 w-4 text-white/40", isRTL && "rotate-180")}
              />
              <span className="text-primary font-semibold">
                {page.breadcrumbCurrent}
              </span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ABOUT / STORY SECTION
      ══════════════════════════════════════════════════ */}
      <section
        className={cn(
          "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#070d24]"
            : "bg-gradient-to-b from-[#f0f6ff] via-[#f6f9ff] to-white",
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images Column */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className={cn(
                  "relative w-[85%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl",
                  isDark ? "shadow-black/40" : "shadow-primary/15",
                  isRTL ? "ml-auto" : "",
                )}
              >
                <LazyImage
                  src={ABOUT_IMAGES.main}
                  alt="Al Nada Scientific Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={cn(
                  "absolute bottom-[-20px] w-[55%] aspect-[4/3] rounded-2xl overflow-hidden border-4 shadow-xl",
                  isDark
                    ? "border-[#070d24] shadow-black/30"
                    : "border-white shadow-primary/10",
                  isRTL ? "left-0" : "right-0",
                )}
              >
                <LazyImage
                  src={ABOUT_IMAGES.secondary}
                  alt="Al Nada Team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className={cn(
                  "absolute top-6 z-10 w-24 h-24 rounded-2xl flex flex-col items-center justify-center shadow-xl",
                  isDark
                    ? "bg-primary/90 shadow-primary/30"
                    : "bg-primary shadow-primary/25",
                  isRTL ? "left-6" : "right-6",
                )}
              >
                <span className="text-3xl font-black text-white">17+</span>
                <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">
                  {language === "en" ? "Years" : "عام"}
                </span>
              </motion.div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4",
                  isDark
                    ? "bg-primary/15 text-primary border border-primary/25"
                    : "bg-primary/10 text-primary border border-primary/20",
                )}
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                {about.tag}
              </span>

              <h2
                className={cn(
                  "text-3xl md:text-4xl font-extrabold tracking-tight mb-6",
                  isDark ? "text-white" : "text-[#0a1a4f]",
                )}
              >
                {about.title}
              </h2>

              <div className="space-y-4 mb-8">
                {storyParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className={cn(
                      "text-base leading-relaxed",
                      isDark ? "text-gray-400" : "text-[#4a6fa5]",
                    )}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="space-y-3">
                {about.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle
                      className={cn(
                        "h-5 w-5 flex-shrink-0",
                        isDark ? "text-primary" : "text-primary",
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm font-medium",
                        isDark ? "text-gray-300" : "text-[#2c4a7c]",
                      )}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FEATURES / WHY CHOOSE US
      ══════════════════════════════════════════════════ */}
      <section
        className={cn(
          "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#0a1433]"
            : "bg-gradient-to-b from-white via-[#f6f9ff] to-[#edf3ff]",
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4",
                isDark
                  ? "bg-primary/15 text-primary border border-primary/25"
                  : "bg-primary/10 text-primary border border-primary/20",
              )}
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              {about.featuresTag}
            </span>
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight",
                isDark ? "text-white" : "text-[#0a1a4f]",
              )}
            >
              {about.featuresTitle}
            </h2>
            <p
              className={cn(
                "mt-4 max-w-2xl mx-auto text-lg leading-relaxed",
                isDark ? "text-gray-400" : "text-[#4a6fa5]",
              )}
            >
              {about.featuresDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_FEATURES.map((feature, i) => {
              const IconComponent = featureIcons[feature.icon];
              const label =
                language === "en" ? feature.label.en : feature.label.ar;
              const title =
                language === "en" ? feature.title.en : feature.title.ar;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={cn(
                    "group relative p-8 rounded-2xl text-center transition-all duration-500",
                    isDark
                      ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30"
                      : "bg-white hover:bg-primary/5 border border-gray-100 hover:border-primary/30 shadow-lg shadow-primary/5",
                  )}
                >
                  <div
                    className={cn(
                      "mx-auto mb-5 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500",
                      isDark
                        ? "bg-primary/15 group-hover:bg-primary/25"
                        : "bg-primary/10 group-hover:bg-primary/20",
                    )}
                  >
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-primary" />
                    )}
                  </div>
                  <p
                    className={cn(
                      "text-xs font-bold uppercase tracking-wider mb-1",
                      isDark ? "text-primary/80" : "text-primary",
                    )}
                  >
                    {label}
                  </p>
                  <h3
                    className={cn(
                      "text-lg font-bold",
                      isDark ? "text-white" : "text-[#0a1a4f]",
                    )}
                  >
                    {title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DEPARTMENTS
      ══════════════════════════════════════════════════ */}
      <section
        className={cn(
          "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#070d24]"
            : "bg-gradient-to-b from-[#edf3ff] via-[#f6f9ff] to-white",
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4",
                isDark
                  ? "bg-primary/15 text-primary border border-primary/25"
                  : "bg-primary/10 text-primary border border-primary/20",
              )}
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              {language === "en"
                ? ABOUT_PAGE_CONTENT.en.departmentsTag
                : ABOUT_PAGE_CONTENT.ar.departmentsTag}
            </span>
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight",
                isDark ? "text-white" : "text-[#0a1a4f]",
              )}
            >
              {language === "en"
                ? ABOUT_PAGE_CONTENT.en.departmentsTitle
                : ABOUT_PAGE_CONTENT.ar.departmentsTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEPARTMENTS.map((dept, i) => {
              const title = language === "en" ? dept.title.en : dept.title.ar;
              const subtitle =
                language === "en" ? dept.subtitle.en : dept.subtitle.ar;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div
                    className={cn(
                      "relative h-72 rounded-2xl overflow-hidden transition-all duration-500",
                      isDark
                        ? "shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-primary/15"
                        : "shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20",
                    )}
                  >
                    <LazyImage
                      src={dept.image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {title}
                      </h3>
                      <p className="text-sm text-primary font-semibold">
                        {subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TEAM SECTION
      ══════════════════════════════════════════════════ */}
      <section
        className={cn(
          "relative py-24 md:py-32 overflow-hidden transition-colors duration-500",
          isDark
            ? "bg-[#0a1433]"
            : "bg-gradient-to-b from-white via-[#f6f9ff] to-[#edf3ff]",
        )}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isDark ? (
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          ) : (
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
          )}
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-20"
          >
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4",
                isDark
                  ? "bg-primary/15 text-primary border border-primary/25"
                  : "bg-primary/10 text-primary border border-primary/20",
              )}
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              {team.tag}
            </span>
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight",
                isDark ? "text-white" : "text-[#0a1a4f]",
              )}
            >
              {team.title}
            </h2>
            <p
              className={cn(
                "mt-4 max-w-2xl mx-auto text-lg leading-relaxed",
                isDark ? "text-gray-400" : "text-[#4a6fa5]",
              )}
            >
              {team.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <TeamCard
                key={i}
                member={member}
                index={i}
                language={language}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Team Member Card ──────────────────────────────────────────────────────

function TeamCard({
  member,
  index,
  language,
  isDark,
}: {
  member: TeamMember;
  index: number;
  language: string;
  isDark: boolean;
}) {
  const name = language === "en" ? member.name.en : member.name.ar;
  const position = language === "en" ? member.position.en : member.position.ar;

  const socialIcons = [
    { key: "linkedin", Icon: Linkedin, href: member.socials.linkedin },
    { key: "twitter", Icon: Twitter, href: member.socials.twitter },
    { key: "facebook", Icon: Facebook, href: member.socials.facebook },
    {
      key: "email",
      Icon: Mail,
      href: member.socials.email ? `mailto:${member.socials.email}` : undefined,
    },
  ].filter((s) => s.href);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5, ease: "easeOut" }}
      className="group"
    >
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden transition-all duration-500",
          isDark
            ? "bg-white/5 hover:bg-white/8 border border-white/10 hover:border-primary/30"
            : "bg-white hover:shadow-xl border border-gray-100 hover:border-primary/20 shadow-lg shadow-primary/5",
        )}
      >
        {/* Photo */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <LazyImage
            src={member.photo}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Social Links — appear on hover */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            {socialIcons.map(({ key, Icon, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="p-5 text-center">
          <h3
            className={cn(
              "text-lg font-bold mb-1",
              isDark ? "text-white" : "text-[#0a1a4f]",
            )}
          >
            {name}
          </h3>
          <p className="text-sm font-medium text-primary">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}
