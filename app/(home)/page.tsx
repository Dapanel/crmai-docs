import Link from "fumadocs-core/link";

export default async function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Welcome to CRMAI Docs</h1>
      <p className="text-fd-muted-foreground">
        Find thing could be usefull for you.
      </p>
      <div className="flex flex-row items-center justify-center mt-4 gap-4">
        <Link
          href="/docs"
          className="text-fd-foreground hover:text-fd-primary font-medium underline"
        >
          docs
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=628113111882"
          className="text-fd-foreground hover:text-fd-primary font-medium underline"
        >
          Whatsapp
        </Link>
      </div>
    </main>
  );
}
