import React from 'react';

const members = [
  { name: "Vaibhav Pathak", role: "Core Team", img: "/logo.png" },
  { name: "Akshat", role: "Core Team", img: "/logo.png" },
  { name: "Lovelesh Pathak", role: "Core Team", img: "/logo.png" },
  { name: "Madhav Dixit", role: "Core Team", img: "/logo.png" },
  { name: "Agrim Goel", role: "Core Team", img: "/logo.png" },
  { name: "Lacky Mishra", role: "Core Team", img: "/logo.png" },
  { name: "Harsh Gupta", role: "Core Team", img: "/logo.png" },
  { name: "Soumya Srivastava", role: "Core Team", img: "/logo.png" },
  { name: "Aarohi Gupta", role: "Core Team", img: "/logo.png" },
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