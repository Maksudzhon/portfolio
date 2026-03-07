import useInView from "../hooks/useInView";

function AnimSection({ children, className = "" }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`anim-section ${inView ? "visible" : "hidden"} ${className}`}
    >
      {children}
    </div>
  );
}

export default AnimSection;
