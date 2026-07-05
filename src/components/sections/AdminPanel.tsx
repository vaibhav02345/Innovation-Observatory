import React, { useEffect, useState } from 'react';

interface JoinRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  createdAt: string;
}

const AdminPanel = () => {
  const [requests, setRequests] = useState<JoinRequest[]>([]);

  useEffect(() => {
    const fetchRequests = () => {
      const data = JSON.parse(localStorage.getItem('movement_joins') || '[]');
      // Sort by newest first
      data.sort((a: JoinRequest, b: JoinRequest) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setRequests(data);
    };

    fetchRequests();
    
    // In case changes happen in other tabs or same window
    window.addEventListener('storage', fetchRequests);
    return () => window.removeEventListener('storage', fetchRequests);
  }, []);

  const clearData = () => {
    if (confirm("Are you sure you want to delete all entries?")) {
      localStorage.removeItem('movement_joins');
      setRequests([]);
    }
  };

  return (
    <div className="p-6 md:p-10 bg-background min-h-screen text-white font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-text-secondary/20 pb-4">
          <h1 className="text-2xl md:text-3xl text-accent font-bold uppercase tracking-widest">Admin Panel</h1>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-text-secondary hover:text-white text-sm transition-colors">← Back to Site</a>
            <button onClick={clearData} className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2 text-xs uppercase hover:bg-red-500/20 transition-colors">
              Clear Data
            </button>
          </div>
        </div>
        
        <div className="bg-surface border border-text-secondary/20 rounded overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-text-secondary/20 bg-background/50 text-xs uppercase tracking-widest text-text-secondary">
                <th className="py-4 px-6 font-medium">Date</th>
                <th className="py-4 px-6 font-medium">Name</th>
                <th className="py-4 px-6 font-medium">Contact Info</th>
                <th className="py-4 px-6 font-medium">Message</th>
                <th className="py-4 px-6 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-text-secondary text-sm">
                    No join requests found in local storage.
                  </td>
                </tr>
              ) : (
                requests.map(req => (
                  <tr key={req.id} className="border-b border-text-secondary/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-sm text-text-secondary">
                      {new Date(req.createdAt).toLocaleString()}
                    </td>
                    <td className="py-4 px-6 font-bold">{req.name}</td>
                    <td className="py-4 px-6 text-sm">
                      <div className="text-white">{req.email}</div>
                      <div className="text-text-secondary mt-1">{req.phone}</div>
                    </td>
                    <td className="py-4 px-6 text-sm max-w-xs break-words text-text-secondary">
                      {req.message}
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-accent text-black px-2 py-1 text-[10px] uppercase font-bold rounded">
                        {req.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
