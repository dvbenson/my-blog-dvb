import GitHubSignInButton from "#/src/ui/components/auth/GitHubSignIn";
import GoogleSignInButton from "#/src/ui/components/auth/GoogleSignIn";

export default function SignIn() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="h-full w-full">
          <div className="mx-auto flex h-[300px] w-[350px] flex-col items-center justify-between rounded-md bg-slate-200 py-2 shadow-md">
            <div className="flex w-full flex-col justify-between gap-4 p-4">
              <h1 className="text-center text-2xl font-bold">SIGN IN PAGE</h1>
              <div className="mt-2 flex flex-col items-center justify-center gap-2">
                <p>
                  Member of the team? We've restricted use of Google
                  authentication to bloggers only!
                </p>
                <GoogleSignInButton
                  className={
                    "h-8 w-full rounded-md bg-slate-400 shadow-md hover:shadow-lg"
                  }
                  content={"Continue with Google"}
                />
              </div>
              <div>
                <p>Our readers:</p>
                <GitHubSignInButton
                  className={
                    "h-8 w-full rounded-md bg-slate-400 shadow-md hover:shadow-lg"
                  }
                  content={"Continue with GitHub"}
                />
                <p>Add Twitter</p>
                <p>Add Email?</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
