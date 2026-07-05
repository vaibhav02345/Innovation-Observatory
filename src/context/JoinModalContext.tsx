import React, { createContext, useContext, useState, ReactNode } from 'react';

interface JoinModalContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const JoinModalContext = createContext<JoinModalContextProps | undefined>(undefined);

export const JoinModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <JoinModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </JoinModalContext.Provider>
  );
};

export const useJoinModal = (): JoinModalContextProps => {
  const context = useContext(JoinModalContext);
  if (!context) {
    throw new Error('useJoinModal must be used within a JoinModalProvider');
  }
  return context;
};
