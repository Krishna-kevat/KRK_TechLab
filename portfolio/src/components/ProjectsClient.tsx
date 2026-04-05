"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Star, ArrowRight } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { GithubRepo, GithubUser } from "@/lib/github";
import { siteConfig } from "@/config/site";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoModal } from "@/components/VideoModal";

export function ProjectsClient({ repos, user }: { repos: GithubRepo[], user: GithubUser | null }) {
  const [filter, setFilter] = useState<string>("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  
  // Extract unique languages
  const languages = Array.from(new Set(repos.map(r => r.language).filter(Boolean))) as string[];
  const tabs = ["All", ...languages];

  const filteredRepos = repos.filter(repo => filter === "All" || repo.language === filter);
  // Sort by stars descending
  const sortedRepos = [...filteredRepos].sort((a, b) => b.stargazers_count - a.stargazers_count);

  const handleWatchDemo = (url: string) => {
    setActiveVideoUrl(url);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative bg-background/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            GitHub <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"
          />
          
          {user && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-6 text-muted-foreground mb-8 text-sm md:text-base border border-white/10 glass max-w-fit mx-auto px-6 py-3 rounded-full"
            >
              <div className="flex items-center gap-2 text-white font-medium">
                <Github className="text-xl" /> @{user.login}
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} /> {user.followers} Followers
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} /> {user.public_repos} Repos
              </div>
            </motion.div>
          )}

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === tab 
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {sortedRepos.map((project) => (
              <ProjectCard key={project.id} project={project} onWatchDemo={handleWatchDemo} />
            ))}
          </AnimatePresence>
        </div>
        
        {sortedRepos.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No projects found matching the criteria.
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href={`https://github.com/${siteConfig.githubUsername}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-medium">
            View all on GitHub <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} videoUrl={activeVideoUrl} />
    </section>
  );
}
