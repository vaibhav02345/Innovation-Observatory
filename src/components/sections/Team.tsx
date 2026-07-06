import React from 'react';

const members = [
  { name: "Vaibhav Pathak", role: "Core Team", emoji: "👨‍💻" },
  { name: "Akshat Tiwari", role: "Core Team", emoji: "👨‍💻" },
  { name: "Lovelesh Pathak", role: "Core Team", emoji: "👨‍💻" },
  { name: "Madhav Dixit", role: "Core Team", emoji: "👨‍💻" },
  { name: "Agrim Goel", role: "Core Team", emoji: "👨‍💻" },
  { name: "Lacky Mishra", role: "Core Team", emoji: "👨‍💻" },
  { name: "Harsh Gupta", role: "Core Team", emoji: "👨‍💻" },
  { name: "Soumya Srivastava", role: "Core Team", emoji: "👩‍💻" },
  { name: "Aarohi Gupta", role: "Core Team", emoji: "👩‍💻" },
  { name: "Yatharth Kaushik", role: "Core Team", emoji: "👩‍💻" },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="relative py-20 lg:py-40 border-t border-text-secondary/20">
      <div className="px-6 lg:px-20 mb-12 lg:mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-satoshi font-bold uppercase tracking-tighter">Core Team</h2>
      </div>
      
      <div className="px-6 lg:px-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-text-secondary/10 border border-text-secondary/10">
        {members.map((member, i) => (
          <div key={i} className="bg-background aspect-square relative group overflow-hidden flex flex-col items-center justify-center border border-text-secondary/10 hover:bg-surface/50 transition-colors">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">
              {member.emoji}
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
              <div className="text-[9px] lg:text-xs font-mono text-accent mb-1">{member.role}</div>
              <div className="text-sm lg:text-lg font-satoshi font-bold uppercase">{member.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
