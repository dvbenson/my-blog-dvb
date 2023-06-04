import DefaultLayout from "#/src/ui/DefaultLayout";

export default function AboutPage() {
  return (
    <>
      <DefaultLayout>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <div className="grid grid-cols-1 place-items-center">
            <h1 className="text-center">danielvb.dev BLOG</h1>
            <p className="text-center">ABOUT</p>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
