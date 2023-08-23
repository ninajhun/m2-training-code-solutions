export default function Button({ onCustomClick, children }) {
  return (
    <button onClick={onCustomClick} style={{ margin: '40px' }}>
      {children}
    </button>
  );
}
