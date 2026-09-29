import React from 'react';
import useBoolean from '../hooks/useBoolean';

export default function UseBooleanDemo() {
  const { value, setTrue, setFalse } = useBoolean(false);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Question 1: useBoolean Hook</h2>
      
      <div style={styles.statusBox}>
        <p style={styles.statusText}>
          Status: <span style={value ? styles.enabled : styles.disabled}>{value ? 'ENABLED' : 'DISABLED'}</span>
        </p>
      </div>

      <div style={styles.buttonRow}>
        <button style={{ ...styles.button, ...styles.btnTrue }} onClick={setTrue}>
          Enable
        </button>
        <button style={{ ...styles.button, ...styles.btnFalse }} onClick={setFalse}>
          Disable
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' },
  title: { fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#333' },
  statusBox: { padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '20px', width: '100%', maxWidth: '300px', textAlign: 'center', border: '1px solid #ddd' },
  statusText: { fontSize: '18px', margin: 0 },
  enabled: { color: '#2e7d32', fontWeight: 'bold' },
  disabled: { color: '#d32f2f', fontWeight: 'bold' },
  buttonRow: { display: 'flex', gap: '16px' },
  button: { padding: '12px 24px', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', border: 'none', transition: 'opacity 0.2s', minWidth: '110px' },
  btnTrue: { backgroundColor: '#4CAF50', color: 'white' },
  btnFalse: { backgroundColor: '#F44336', color: 'white' }
};
