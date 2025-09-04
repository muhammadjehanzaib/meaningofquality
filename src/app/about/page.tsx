import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <div className="py-14 sm:py-16">
      <Container className="prose prose-slate dark:prose-invert max-w-3xl">
        <h1>About Us</h1>
        <p>
          We provide high-performance adhesives, sealants, foams and aerosol
          solutions for professional builders, manufacturers and distributors.
          This site is a static showcase inspired by Akfix, focused on clarity,
          performance and accessibility.
        </p>
        <h2>What makes us different</h2>
        <ul>
          <li>Reliable quality with consistent batch-to-batch performance</li>
          <li>Application-driven product selection and training</li>
          <li>Fast documentation support (TDS/SDS) and after-sales service</li>
        </ul>
      </Container>
    </div>
  );
}
