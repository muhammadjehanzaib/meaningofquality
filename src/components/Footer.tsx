import Container from "./ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-muted">
      <Container className="py-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded bg-primary/10 grid place-items-center text-primary text-sm font-bold">
              MQ
            </div>
            <span className="text-base font-semibold">Meaning of Quality</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Industrial adhesives, sealants, foams and spray solutions for
            professional builders and manufacturers.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Products</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/products">All Products</Link></li>
            <li><Link href="/products#adhesives">Adhesives</Link></li>
            <li><Link href="/products#sealants">Sealants</Link></li>
            <li><Link href="/products#foams">PU Foams</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Follow</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a href="#" aria-disabled>LinkedIn</a></li>
            <li><a href="#" aria-disabled>Instagram</a></li>
            <li><a href="#" aria-disabled>Facebook</a></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-black/5">
        <Container className="py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Meaning of Quality. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
