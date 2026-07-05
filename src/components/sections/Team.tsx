import React from 'react';

const members = [
  { name: "Vaibhav Pathak", role: "Core Team", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vaibhav&backgroundColor=ffdfbf" },
  { name: "Akshat", role: "Core Team", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Akshat&backgroundColor=c0aede" },
  { name: "Lovelesh Pathak", role: "Core Team", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lovelesh&backgroundColor=d1d4f9" },
  { name: "Madhav Dixit", role: "Core Team", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Madhav&backgroundColor=b6e3f4" },
  { name: "Agrim Goel", role: "Core Team", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Agrim&backgroundColor=ffdfbf" },
  { name: "Lacky Mishra", role: "Core Team", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lacky&backgroundColor=c0aede" },
  { name: "Harsh Gupta", role: "Core Team", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Harsh&backgroundColor=d1d4f9" },
  { name: "Soumya Srivastava", role: "Core Team", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soumya&backgroundColor=ffdfbf" },
  { name: "Aarohi Gupta", role: "Core Team", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarohi&backgroundColor=c0aede" },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="relative py-20 lg:py-40 border-t border-text-secondary/20">
      <div className="px-6 lg:px-20 mb-12 lg:mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-satoshi font-bold uppercase tracking-tighter">Core Team</h2>
      </div>
      
      <div className="px-6 lg:px-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-text-secondary/10 border border-text-secondary/10">
        {members.map((member, i) => (
          <div key={i} className="bg-background aspect-square relative group overflow-hidden">
            <img 
              src={member.img} 
              alt={member.name} 
              className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 lg:p-8 flex flex-col justify-end">
              <div className="text-[9px] lg:text-xs font-mono text-accent mb-1 lg:mb-2">{member.role}</div>
              <div className="text-sm lg:text-lg font-satoshi font-bold uppercase">{member.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;