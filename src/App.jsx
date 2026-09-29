import React, { useState } from 'react';
import UseBooleanDemo from './solutions/UseBooleanDemo';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('DASHBOARD');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Q01_useBoolean':
        return <UseBooleanDemo />;
      default:
        return renderDashboardMenu();
    }
  };

  const renderDashboardMenu = () => (
    <div style={styles.menuContainer}>
      <h1 style={styles.headerTitle}>React Web Interview Solutions</h1>
      <p style={styles.subtitle}>Select a completed coding challenge to view the live showcase</p>

      <div style={styles.list}>
        {/* Q1 Button */}
        <button style={styles.menuButton} onClick={() => setActiveScreen('Q01_useBoolean')}>
          Q1: useBoolean Custom Hook
        </button>

        {/* Coming Soon Placeholder */}
        <button style={{ ...styles.menuButton, ...styles.disabledButton }} disabled>
          Q2: Coming Soon...
        </button>
      </div>
    </div>
  );

  return (
    <div style={styles.appContainer}>
      {activeScreen !== 'DASHBOARD' && (
        <button style={styles.backButton} onClick={() => setActiveScreen('DASHBOARD')}>
          ← Back to Dashboard
        </button>
      )}
      <main style={styles.content}>
        {renderScreen()}
      </main>
    </div>
  );
}

const styles = {
  appContainer: { fontFamily: 'system-ui, sans-serif', backgroundColor: '#fafafa', minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  content: { flex: 1, display: 'flex', flexDirection: 'column' },
  menuContainer: { maxWidth: '600px', margin: '60px auto', padding: '0 20px', textAlign: 'center', width: '100%', boxSizing: 'border-box' },
  headerTitle: { fontSize: '32px', fontWeight: '800', color: '#111', marginBottom: '8px' },
  subtitle: { fontSize: '16px', color: '#666', marginBottom: '40px' },
  list: { display: 'flex', flexDirection: 'column', gap: '16px' },
  menuButton: { backgroundColor: '#0070f3', color: 'white', border: 'none', padding: '18px 24px', borderRadius: '10px', fontSize: '18px', fontWeight: '600', cursor: 'pointer', textAlign: 'left', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', transition: 'transform 0.2s, background-color 0.2s' },
  disabledButton: { backgroundColor: '#eaeaea', color: '#999', cursor: 'not-allowed', boxShadow: 'none' },
  backButton: { width: '100%', padding: '16px 24px', backgroundColor: '#ffffff', border: 'none', borderBottom: '1px solid #eaeaea', color: '#0070f3', fontWeight: '600', fontSize: '16px', cursor: 'pointer', textAlign: 'left' }
};
