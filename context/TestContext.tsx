'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Test {
  id: string;
  code: string;
  name: string;
}

interface TestContextType {
  addedTests: Test[];
  addTest: (test: Test) => void;
  isTestAdded: (id: string) => boolean;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider = ({ children }: { children: ReactNode }) => {
  const [addedTests, setAddedTests] = useState<Test[]>([]);

  const addTest = (test: Test) => {
    setAddedTests(prev => {
      if (prev.some(t => t.id === test.id)) return prev;
        return [...prev, test];
    });
  };

  const isTestAdded = (id: string) => addedTests.some(test => test.id === id);

  return (
    <TestContext.Provider value={{ addedTests, addTest, isTestAdded }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (!context) throw new Error('useTestContext must be used within TestProvider');
  return context;
};
