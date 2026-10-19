import React, { useState, useEffect } from "react";
import { FiGithub, FiGitBranch, FiUsers, FiExternalLink } from "react-icons/fi";

const GitHubStats = ({ githubUsername = "shubhamkharbad15-afk" }) => {
  const [stats, setStats] = useState({
    public_repos: 12,
    followers: 10,
    following: 15,
    html_url: `https://github.com/${githubUsername}`
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${githubUsername}`);
        if (res.ok) {
          const data = await res.json();
          setStats({
            public_repos: data.public_repos || 12,
            followers: data.followers || 10,
            following: data.following || 15,
            html_url: data.html_url
          });
        }
      } catch (err) {
        // Silently use defaults
      }
    };
    fetchGitHubData();
  }, [githubUsername]);

  return (
    <div className="my-14 max-w-4xl mx-auto px-4">
      <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-dark-surface border border-slate-300 dark:border-dark-border flex items-center justify-center text-slate-900 dark:text-slate-200 text-xl shrink-0 shadow-xs">
              <FiGithub className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  GitHub Open Source Activity
                </h3>
              </div>
              <p className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                @{githubUsername}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-5">
            <div className="text-center">
              <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">{stats.public_repos}</div>
              <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 flex items-center justify-center gap-1">
                <FiGitBranch className="w-3 h-3 text-slate-500 dark:text-slate-400" /> Repos
              </div>
            </div>
            <div className="h-6 w-[1px] bg-slate-300 dark:bg-dark-border" />
            <div className="text-center">
              <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">{stats.followers}</div>
              <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 flex items-center justify-center gap-1">
                <FiUsers className="w-3 h-3 text-slate-500 dark:text-slate-400" /> Followers
              </div>
            </div>
            <div className="h-6 w-[1px] bg-slate-300 dark:bg-dark-border" />
            <a
              href={stats.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xs"
            >
              <span>Profile</span>
              <FiExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
