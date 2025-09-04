import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <div className="py-14 sm:py-16">
      <Container className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Replace the details below with your real company contact info.
        </p>

        <div className="mt-8 grid gap-6">
          <div className="rounded-lg border border-black/5 bg-background p-6">
            <h2 className="text-base font-semibold">Head Office</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              123 Industrial Park, City, Country
            </p>
          </div>

          <div className="rounded-lg border border-black/5 bg-background p-6">
            <h2 className="text-base font-semibold">Email</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              sales@example.com
            </p>
          </div>

          <div className="rounded-lg border border-black/5 bg-background p-6">
            <h2 className="text-base font-semibold">Phone</h2>
            <p className="mt-1 text-sm text-muted-foreground">+00 123 456 789</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
