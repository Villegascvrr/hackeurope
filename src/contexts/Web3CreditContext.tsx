import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Web3CreditProfile {
  walletAddress: string;
  walletAge: number;
  transactionVolume: number;
  hasLiquidations: boolean;
  githubUrl: string;
  linkedinUrl: string;
  trustScore: number;
  maxLoan: number;
  interestRate: string;
}

interface Web3CreditContextType {
  profile: Web3CreditProfile | null;
  setProfile: (profile: Web3CreditProfile) => void;
  clearProfile: () => void;
}

const Web3CreditContext = createContext<Web3CreditContextType | undefined>(undefined);

export const Web3CreditProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfileState] = useState<Web3CreditProfile | null>(() => {
    const stored = sessionStorage.getItem("web3CreditProfile");
    return stored ? JSON.parse(stored) : null;
  });

  const setProfile = (p: Web3CreditProfile) => {
    sessionStorage.setItem("web3CreditProfile", JSON.stringify(p));
    setProfileState(p);
  };

  const clearProfile = () => {
    sessionStorage.removeItem("web3CreditProfile");
    setProfileState(null);
  };

  return (
    <Web3CreditContext.Provider value={{ profile, setProfile, clearProfile }}>
      {children}
    </Web3CreditContext.Provider>
  );
};

export const useWeb3Credit = () => {
  const ctx = useContext(Web3CreditContext);
  if (!ctx) throw new Error("useWeb3Credit must be used within Web3CreditProvider");
  return ctx;
};
