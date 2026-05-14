import {
  ArrowLeft,
  Heart,
  Send,
  ThumbsDown,
} from "lucide-react";
import Phone from "../components/Phone";

const comments = [
  {
    username: "Username_1",
    text: "GOOD !!!!!",
    time: "2d",
    likes: "436",
  },
  {
    username: "Username_2",
    text: "Perfect!!!!!!!",
    time: "2d",
    likes: "388",
  },
  {
    username: "Username_3",
    text: "Nice activity bro",
    time: "1d",
    likes: "245",
  },
  {
    username: "Username_4",
    text: "Keep going 🔥",
    time: "1d",
    likes: "192",
  },
];

const keyboardRows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["⇧", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

export default function Comments() {
  return (
    <Phone title="Comment / Discussion">
      <div className="relative h-full overflow-hidden bg-[#F6FAFD] text-left">
        <header className="flex h-[92px] items-center justify-center border-b border-[#17324D]/15 px-7 pt-4">
          <button className="absolute left-7 top-10 grid h-11 w-11 place-items-center rounded-full border border-[#050505] text-[#050505]">
            <ArrowLeft size={21} strokeWidth={2.2} />
          </button>

          <h1 className="text-[18px] font-black text-[#050505]">
            Discussion
          </h1>
        </header>

        <main className="h-[calc(100%-260px)] overflow-y-auto px-7 pt-8">
          <div className="space-y-7">
            {comments.map((comment) => (
              <article key={comment.username} className="flex items-start gap-3">
                <div className="h-11 w-11 shrink-0 rounded-full border border-[#050505] bg-[#D8E1EB]" />

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-medium text-[#050505]/35">
                    {comment.username}
                  </p>

                  <p className="mt-1 text-[12px] font-black text-[#050505]">
                    {comment.text}
                  </p>

                  <p className="mt-3 text-[10px] font-medium text-[#050505]/35">
                    {comment.time}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 text-[#050505]">
                  <Heart size={17} strokeWidth={2.1} />

                  <span className="text-[10px] font-medium text-[#050505]/45">
                    {comment.likes}
                  </span>

                  <ThumbsDown size={17} strokeWidth={2.1} />
                </div>
              </article>
            ))}
          </div>
        </main>

        <div className="absolute bottom-0 left-0 right-0 border-t border-[#17324D]/15 bg-[#F6FAFD]">
          <div className="flex h-12 items-center border-b border-[#17324D]/10 px-7">
            <input
              className="h-full flex-1 bg-transparent text-[11px] font-medium text-[#050505] outline-none placeholder:text-[#050505]/35"
              placeholder="Add a comment"
            />

            <button className="text-[11px] font-semibold text-[#050505]/45">
              Send
            </button>
          </div>

          <div className="bg-[#F6FAFD] px-3 pb-6 pt-4">
            <div className="space-y-2">
              <div className="grid grid-cols-10 gap-1.5">
                {keyboardRows[0].map((key) => (
                  <button
                    key={key}
                    className="h-10 rounded-[7px] bg-[#D8E1EB] text-[16px] font-black text-[#050505] shadow-[0_1px_0_rgba(23,50,77,0.15)]"
                  >
                    {key}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-9 gap-1.5 px-5">
                {keyboardRows[1].map((key) => (
                  <button
                    key={key}
                    className="h-10 rounded-[7px] bg-[#D8E1EB] text-[16px] font-black text-[#050505] shadow-[0_1px_0_rgba(23,50,77,0.15)]"
                  >
                    {key}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-9 gap-1.5">
                {keyboardRows[2].map((key) => (
                  <button
                    key={key}
                    className="h-10 rounded-[7px] bg-[#D8E1EB] text-[16px] font-black text-[#050505] shadow-[0_1px_0_rgba(23,50,77,0.15)]"
                  >
                    {key}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-[44px_1fr_54px] gap-2 pt-1">
                <button className="h-10 rounded-[7px] bg-[#D8E1EB] text-[18px] font-black text-[#050505]">
                  123
                </button>

                <button className="h-10 rounded-[7px] bg-[#D8E1EB]" />

                <button className="h-10 rounded-[7px] bg-[#D8E1EB] text-[18px] font-black text-[#050505]">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Phone>
  );
}