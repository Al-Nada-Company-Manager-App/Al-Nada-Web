"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { cn } from "@/lib/utils";
import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import { LazyImage } from "@/components/ui/LazyImage";
import { TEAM_CONTENT, TEAM_MEMBERS } from "@/constants/team";
import type { TeamMember } from "@/constants/team";

interface AboutTeamProps {
  isDark: boolean;
}

export function AboutTeam({ isDark }: AboutTeamProps) {
  const { language } = useLanguage();
  const team = language === "en" ? TEAM_CONTENT.en : TEAM_CONTENT.ar;

  return (
    <section
      className={cn(
        "relative py-14 md:py-20 overflow-hidden transition-colors duration-500",
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
          className="text-center mb-10 md:mb-14"
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
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
        <div className="relative aspect-[4/5] overflow-hidden">
          <LazyImage
            src={member.photo}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Social Links */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            {socialIcons.map(({ key, Icon, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="p-3 text-center">
          <h3
            className={cn(
              "text-sm font-bold mb-0.5",
              isDark ? "text-white" : "text-[#0a1a4f]",
            )}
          >
            {name}
          </h3>
          <p className="text-xs font-medium text-primary">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}
