import MessageForm from "@/components/MessageForm";

export default function Message() {
  return (
    <main className="flex flex-grow flex-col gap-6 sm:gap-10 items-center justify-center fade-in-bounce">
      <div className="max-w-md w-full flex flex-col gap-6 sm:gap-8">
        <div className="text-center fade-in">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2 pen-regular animate-float">
          Leave me a note!
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 coding-regular">
            drop your comments, suggestions, and questions here :)
          </p>
        </div>
        <MessageForm />
      </div>
    </main>
  );
}
