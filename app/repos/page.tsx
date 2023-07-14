import React from 'react';

import { getRepos } from '@api/github';
import { Link } from '@element/Link';
import ErrorComponent from '@module/ErrorComponent';
import Header from '@module/Header';

import { Repos } from '@type/Repos';

type language = string;

const Page = async () => {
  const response = await getRepos();
  const repos = response as Repos[];

  if (!response) {
    return (
      <main className="container w-11/12 min-h-screen pb-8 mx-auto mb-10 space-y-14 sm:pb-10 sm:w-9/12 md:w-7/12">
        <Header title="Repositories" description="My public posts on GitHub" />
        <ErrorComponent />
      </main>
    );
  }

  const languageIcon = (language: language) => {
    switch (language) {
      case 'JavaScript':
        return 'bxl-javascript text-[#e8d44d]';
      case 'TypeScript':
        return 'bxl-typescript text-[#2f74c0]';
      case 'Vue':
        return 'bxl-vuejs text-[#41b883] ';
      case 'HTML':
        return 'bxl-html5 text-[#dd4b25]';
      case 'python':
        return 'bxl-python';
      case 'CSS':
        return 'bxl-html5 text-[#dd4b25]';
      default:
        return '-';
    }
  };

  return (
    <main className="container w-11/12 min-h-screen pb-8 mx-auto mb-10 space-y-14 sm:pb-10 sm:w-9/12 md:w-7/12">
      <Header title="Repositories" description="My public posts on github" />
      <div className="grid gap-4 md:grid-cols-2">
        {repos?.map((repo) => (
          <Link href={repo.html_url} key={repo.id}>
            <div className="flex flex-col justify-between h-full p-4 transition-colors rounded-lg cursor-pointer focus-ring text-neutral-500 bg-default hover:bg-active">
              <div className="space-y-2">
                <div className="flex justify-between space-x-2">
                  <h3 className="items-center space-x-1 truncate text-white/90">
                    <span className="text-white/30">{repo.owner.login}/</span>
                    <span>{repo.name}</span>
                  </h3>
                </div>
                <p className="text-white/30 line-clamp-2">{repo.description}</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-white/30">
                  <span>Stars:</span> <span> {repo.watchers} </span>
                </div>
                <div className="flex items-center justify-between text-white/30">
                  <span>Language:</span>
                  {repo.language && (
                    <span className="flex items-center justify-end opacity-75">
                      <i className={`bx text-2xl ${languageIcon(repo.language)}`} />
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-white/30">
                  <span>License:</span> <span>MIT</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
