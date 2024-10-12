export default function Section({ title, children, ...props }: any) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
