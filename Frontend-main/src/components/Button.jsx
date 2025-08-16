// src/components/ui/button.jsx
export function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}
